let darkModeEnabled = false;

// Function to apply dark mode styles
function applyDarkMode() {
 document.body.style.backgroundColor = '#111';
 document.body.style.color = '#ddd';

 // Apply dark mode styles to child elements, excluding certain elements
 const childElements = document.querySelectorAll('body *:not(button):not(input):not(select):not(a):not(textarea):not(svg):not(path)');
 for (const element of childElements) {
    element.style.backgroundColor = '#111';
    element.style.color = '#ddd';
 }

 darkModeEnabled = true;
}

// Function to remove dark mode styles
function removeDarkMode() {
 document.body.style.backgroundColor = '';
 document.body.style.color = '';

 // Remove dark mode styles from child elements, excluding certain elements
 const childElements = document.querySelectorAll('body *:not(button):not(input):not(select):not(a):not(textarea):not(svg):not(path)');
 for (const element of childElements) {
    element.style.backgroundColor = '';
    element.style.color = '';
 }

 darkModeEnabled = false;
}

// Listen for messages from the popup or other scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
 if (request.action === 'toggleDarkMode') {
    // Toggle dark mode
    if (darkModeEnabled) {
      removeDarkMode();
    } else {
      applyDarkMode();
    }
 }
});

// Apply dark mode when the page loads
applyDarkMode();