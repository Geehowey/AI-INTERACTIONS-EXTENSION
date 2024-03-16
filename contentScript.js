const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          // An Element node
          if (node.matches("selector")) {
            // Replace 'selector' with a CSS selector for elements of interest
            const dataToCapture = node.textContent; // Example: capturing text content
            sendDataToBackground({ text: dataToCapture });
          }
        }
      });
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

function sendDataToBackground(data) {
  chrome.runtime.sendMessage(data);
}
