
function toggleDarkMode() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { action: 'toggleDarkMode' });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('toggleButton').addEventListener('click', toggleDarkMode);
});
