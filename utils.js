// Utility functions for CSS Snagger

// Generate DOM path for an element
function generateDOMPath(element) {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return '';
  }
  
  let path = [];
  let currentElement = element;
  
  while (currentElement && currentElement.nodeType === Node.ELEMENT_NODE) {
    let selector = currentElement.nodeName.toLowerCase();
    
    if (currentElement.id) {
      selector += '#' + currentElement.id;
      path.unshift(selector);
      break; // ID is unique, no need to go further up
    } else {
      let sibling = currentElement;
      let siblingIndex = 1;
      
      // Count previous siblings with same tag
      while (sibling = sibling.previousElementSibling) {
        if (sibling.nodeName === currentElement.nodeName) {
          siblingIndex++;
        }
      }
      
      if (currentElement.className) {
        selector += '.' + Array.from(currentElement.classList).join('.');
      }
      
      if (siblingIndex > 1 || !currentElement.className) {
        selector += `:nth-child(${siblingIndex})`;
      }
      
      path.unshift(selector);
      currentElement = currentElement.parentNode;
    }
  }
  
  return path.join(' > ');
}

// Extract and filter computed styles
function extractComputedStyles(element) {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return {};
  }
  
  const computedStyle = window.getComputedStyle(element);
  const styles = {};
  
  // Group styles by category
  const categories = {
    layout: ['display', 'position', 'top', 'right', 'bottom', 'left', 'width', 'height', 'margin', 'padding', 'box-sizing', 'overflow'],
    typography: ['font', 'text', 'line-height', 'letter-spacing', 'word-spacing', 'color', 'text-decoration'],
    background: ['background', 'border', 'border-radius', 'box-shadow'],
    other: []
  };
  
  // Process all computed styles
  for (let i = 0; i < computedStyle.length; i++) {
    const property = computedStyle[i];
    const value = computedStyle.getPropertyValue(property);
    
    // Skip default or initial values (simplified approach)
    if (value === 'initial' || value === 'none' || value === 'normal' || value === '0px' || value === 'auto') {
      continue;
    }
    
    // Categorize the property
    let category = 'other';
    for (const [cat, props] of Object.entries(categories)) {
      if (props.some(prop => property.startsWith(prop))) {
        category = cat;
        break;
      }
    }
    
    if (!styles[category]) {
      styles[category] = {};
    }
    
    styles[category][property] = value;
  }
  
  return styles;
}

// Format styles as CSS text
function formatStylesAsCSS(styles) {
  let css = '';
  
  for (const category in styles) {
    css += `/* ${category.toUpperCase()} */\n`;
    
    for (const property in styles[category]) {
      css += `${property}: ${styles[category][property]};\n`;
    }
    
    css += '\n';
  }
  
  return css;
}

// Format element's HTML with indentation
function formatHTML(html) {
  // Simple indentation for HTML
  let formatted = '';
  let indent = 0;
  
  html = html.replace(/>\s*</g, '>\n<'); // Add new line between tags
  
  const lines = html.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.match(/<\/[^>]+>$/)) {
      // Closing tag, decrease indent before printing
      indent--;
    }
    
    formatted += '  '.repeat(Math.max(0, indent)) + line + '\n';
    
    if (line.match(/<[^/][^>]*>$/) && !line.match(/<(img|br|hr|input)[^>]*>$/i)) {
      // Opening tag, increase indent after printing
      // But not for self-closing tags
      indent++;
    }
  }
  
  return formatted;
}

// Copy text to clipboard
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy: ', err);
    return false;
  }
}
