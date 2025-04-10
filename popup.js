document.addEventListener('DOMContentLoaded', function() {
  const activateToggle = document.getElementById('activateToggle');
  const statusText = document.getElementById('statusText');
  
  // Check if selection mode is already active
  chrome.storage.local.get(['isActive'], function(result) {
    activateToggle.checked = result.isActive || false;
    updateStatusText(result.isActive || false);
  });
  
  // Toggle selection mode
  activateToggle.addEventListener('change', function() {
    const isActive = activateToggle.checked;
    
    // Save state
    chrome.storage.local.set({isActive: isActive});
    
    // Update UI
    updateStatusText(isActive);
    
    // Send message to content script
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, {action: isActive ? 'activate' : 'deactivate'})
          .catch(error => console.log('Error sending message to content script:', error));
      }
    });
  });
  
  function updateStatusText(isActive) {
    statusText.textContent = isActive ? 'Element Selection Active' : 'Activate Element Selection';
    statusText.style.color = isActive ? '#ff5722' : '#333';
  }
});
