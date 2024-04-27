let darkModeEnabled = false;

function applyDarkMode() {
 document.body.style.backgroundColor = '#111';
 document.body.style.color = '#ddd';

 // Applying dark mode styles to child elements, excluding certain elements
 const childElements = document.querySelectorAll('body *:not(button):not(input):not(select):not(a):not(textarea):not(svg):not(path)');
 for (const element of childElements) {
    element.style.backgroundColor = '#111';
    element.style.color = '#ddd';
 }

 darkModeEnabled = true;
}

function removeDarkMode() {
 document.body.style.backgroundColor = '';
 document.body.style.color = '';

 // Removing dark mode styles from child elements, excluding certain elements
 const childElements = document.querySelectorAll('body *:not(button):not(input):not(select):not(a):not(textarea):not(svg):not(path)');
 for (const element of childElements) {
    element.style.backgroundColor = '';
    element.style.color = '';
 }

 darkModeEnabled = false;
}

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

applyDarkMode();
