// X Data Scraper - Background Script

console.log("X Data Scraper: Background script active.");

chrome.action.onClicked.addListener((tab) => {
    // Open extensions management page for quick reload during development
    chrome.tabs.create({
        url: 'chrome://extensions/?id=fpppfanjlmbbimolfmngfmdlphefanoh'
    });
});

// Original toggle sidebar functionality (commented out for development)
// chrome.action.onClicked.addListener((tab) => {
//     if (tab.id) {
//         chrome.tabs.sendMessage(tab.id, { action: "toggle_sidebar" }, (response) => {
//             if (chrome.runtime.lastError) {
//                 // If content script is not ready, inject it
//                 console.log("Injecting content script...");
//                 chrome.scripting.executeScript({
//                     target: { tabId: tab.id },
//                     files: ['content.js']
//                 });
//             }
//         });
//     }
// });
