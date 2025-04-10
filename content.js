// Global variables
let isActive = false;
let selectedElement = null;
let overlay = null;

// Listen for messages from popup
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'activate') {
    activateSelectionMode();
    sendResponse({success: true});
  } else if (message.action === 'deactivate') {
    deactivateSelectionMode();
    sendResponse({success: true});
  }
  return true;
});

// Activate element selection mode
function activateSelectionMode() {
  if (isActive) return;
  
  isActive = true;
  
  // Add event listeners
  document.addEventListener('mouseover', handleMouseOver);
  document.addEventListener('mouseout', handleMouseOut);
  document.addEventListener('click', handleClick);
  document.addEventListener('keydown', handleKeyDown);
  
  // Change cursor to indicate selection mode
  document.body.style.cursor = 'crosshair';
  
  // Create status indicator
  const statusIndicator = document.createElement('div');
  statusIndicator.id = 'css-snagger-status';
  statusIndicator.textContent = 'CSS Snagger Active - Click any element';
  statusIndicator.style.position = 'fixed';
  statusIndicator.style.top = '10px';
  statusIndicator.style.right = '10px';
  statusIndicator.style.padding = '5px 10px';
  statusIndicator.style.background = 'rgba(0, 0, 0, 0.7)';
  statusIndicator.style.color = 'white';
  statusIndicator.style.borderRadius = '3px';
  statusIndicator.style.zIndex = '2147483647';
  statusIndicator.style.fontSize = '12px';
  document.body.appendChild(statusIndicator);
}

// Deactivate element selection mode
function deactivateSelectionMode() {
  if (!isActive) return;
  
  isActive = false;
  
  // Remove event listeners
  document.removeEventListener('mouseover', handleMouseOver);
  document.removeEventListener('mouseout', handleMouseOut);
  document.removeEventListener('click', handleClick);
  document.removeEventListener('keydown', handleKeyDown);
  
  // Reset cursor
  document.body.style.cursor = '';
  
  // Remove status indicator
  const statusIndicator = document.getElementById('css-snagger-status');
  if (statusIndicator) {
    statusIndicator.remove();
  }
  
  // Remove overlay if exists
  removeOverlay();
  
  // Remove highlight from selected element
  if (selectedElement) {
    selectedElement.style.outline = '';
    selectedElement = null;
  }
}

// Handle mouse over event
function handleMouseOver(event) {
  if (!isActive || event.target === document.body) return;
  
  // Skip our own UI elements
  if (isOurUIElement(event.target)) return;
  
  // Highlight the element
  event.target.style.outline = '2px dashed #ff5722';
  event.target.style.outlineOffset = '2px';
  
  // Prevent default behavior
  event.preventDefault();
  event.stopPropagation();
}

// Handle mouse out event
function handleMouseOut(event) {
  if (!isActive || event.target === document.body) return;
  
  // Skip our own UI elements
  if (isOurUIElement(event.target)) return;
  
  // Only remove highlight if this is not the selected element
  if (event.target !== selectedElement) {
    event.target.style.outline = '';
    event.target.style.outlineOffset = '';
  }
  
  // Prevent default behavior
  event.preventDefault();
  event.stopPropagation();
}

// Handle click event
function handleClick(event) {
  if (!isActive) return;
  
  // Skip our own UI elements
  if (isOurUIElement(event.target)) return;
  
  // If clicking on the selected element again, do nothing
  if (event.target === selectedElement) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  
  // If clicking elsewhere while an element is selected, deselect it
  if (selectedElement) {
    selectedElement.style.outline = '';
    selectedElement.style.outlineOffset = '';
    selectedElement = null;
    removeOverlay();
  }
  
  // If clicking on a new element, select it
  if (event.target !== document.body) {
    selectedElement = event.target;
    selectedElement.style.outline = '2px solid #ff5722';
    selectedElement.style.outlineOffset = '2px';
    
    // Create and show overlay
    createOverlay(selectedElement);
  }
  
  // Prevent default behavior
  event.preventDefault();
  event.stopPropagation();
}

// Handle key down event
function handleKeyDown(event) {
  if (!isActive) return;
  
  // ESC key to exit selection mode
  if (event.key === 'Escape') {
    deactivateSelectionMode();
  }
}

// Check if an element is part of our UI
function isOurUIElement(element) {
  return element.id === 'css-snagger-status' || 
         element.id === 'css-snagger-overlay' || 
         element.closest('#css-snagger-overlay') !== null;
}

// Create overlay with element information
function createOverlay(element) {
  // Remove existing overlay if any
  removeOverlay();
  
  // Extract information
  const computedStyles = extractComputedStyles(element);
  const domPath = generateDOMPath(element);
  const htmlStructure = formatHTML(element.outerHTML);
  
  // Create overlay container
  overlay = document.createElement('div');
  overlay.id = 'css-snagger-overlay';
  overlay.className = 'css-snagger-overlay';
  
  // Create tabs
  const tabsHTML = `
    <div class="css-snagger-tabs">
      <button class="css-snagger-tab active" data-tab="css">CSS</button>
      <button class="css-snagger-tab" data-tab="dom">DOM Path</button>
      <button class="css-snagger-tab" data-tab="html">HTML</button>
      <button class="css-snagger-close">×</button>
    </div>
  `;
  
  // Create content
  const cssContent = formatStylesAsCSS(computedStyles);
  const contentHTML = `
    <div class="css-snagger-content">
      <div class="css-snagger-tab-content active" data-tab="css">
        <pre>${cssContent}</pre>
        <button class="css-snagger-copy" data-content="css">Copy CSS</button>
      </div>
      <div class="css-snagger-tab-content" data-tab="dom">
        <pre>${domPath}</pre>
        <button class="css-snagger-copy" data-content="dom">Copy DOM Path</button>
      </div>
      <div class="css-snagger-tab-content" data-tab="html">
        <pre>${htmlStructure}</pre>
        <button class="css-snagger-copy" data-content="html">Copy HTML</button>
      </div>
    </div>
  `;
  
  // Combine and add to overlay
  overlay.innerHTML = tabsHTML + contentHTML;
  
  // Position the overlay
  positionOverlay(overlay, element);
  
  // Add to document
  document.body.appendChild(overlay);
  
  // Add event listeners
  setupOverlayEventListeners(overlay, {css: cssContent, dom: domPath, html: htmlStructure});
}

// Position the overlay near the element
function positionOverlay(overlay, element) {
  const elementRect = element.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  
  // Set initial position
  overlay.style.position = 'fixed';
  overlay.style.zIndex = '2147483647';
  
  // Default position (right of element)
  let left = elementRect.right + 10;
  let top = elementRect.top;
  
  // Check if overlay would go off-screen to the right
  if (left + 300 > viewportWidth) {
    // Position to the left of the element instead
    left = Math.max(0, elementRect.left - 310);
  }
  
  // Check if overlay would go off-screen at the bottom
  if (top + 400 > viewportHeight) {
    // Position at the bottom of the viewport
    top = Math.max(0, viewportHeight - 410);
  }
  
  overlay.style.left = `${left}px`;
  overlay.style.top = `${top}px`;
}

// Setup event listeners for the overlay
function setupOverlayEventListeners(overlay, content) {
  // Tab switching
  const tabs = overlay.querySelectorAll('.css-snagger-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs and content
      overlay.querySelectorAll('.css-snagger-tab').forEach(t => t.classList.remove('active'));
      overlay.querySelectorAll('.css-snagger-tab-content').forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding content
      tab.classList.add('active');
      const tabName = tab.getAttribute('data-tab');
      overlay.querySelector(`.css-snagger-tab-content[data-tab="${tabName}"]`).classList.add('active');
    });
  });
  
  // Copy buttons
  const copyButtons = overlay.querySelectorAll('.css-snagger-copy');
  copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const contentType = button.getAttribute('data-content');
      const success = await copyToClipboard(content[contentType]);
      
      if (success) {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.disabled = true;
        
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
        }, 1500);
      }
    });
  });
  
  // Close button
  const closeButton = overlay.querySelector('.css-snagger-close');
  closeButton.addEventListener('click', () => {
    removeOverlay();
    if (selectedElement) {
      selectedElement.style.outline = '';
      selectedElement.style.outlineOffset = '';
      selectedElement = null;
    }
  });
  
  // Make overlay draggable
  makeDraggable(overlay);
}

// Make an element draggable
function makeDraggable(element) {
  const header = element.querySelector('.css-snagger-tabs');
  let isDragging = false;
  let offsetX, offsetY;
  
  header.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - element.getBoundingClientRect().left;
    offsetY = e.clientY - element.getBoundingClientRect().top;
    
    // Prevent text selection during drag
    e.preventDefault();
  });
  
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
  });
  
  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
}

// Remove the overlay
function removeOverlay() {
  if (overlay) {
    overlay.remove();
    overlay = null;
  }
}

// Check if the extension is already active (e.g., after page reload)
chrome.storage.local.get(['isActive'], function(result) {
  if (result.isActive) {
    activateSelectionMode();
  }
});
