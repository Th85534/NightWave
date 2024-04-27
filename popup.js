
// Function to send a message to the content script to toggle dark mode
function toggleDarkMode() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { action: 'toggleDarkMode' });
  });
}

// Attach a click event listener to the toggle button
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('toggleButton').addEventListener('click', toggleDarkMode);
});
