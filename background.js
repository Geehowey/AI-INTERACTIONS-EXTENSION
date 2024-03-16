chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("Data received: ", request);
  // Here, you can send the data to a server
  // sendDataToServer(request);

  sendResponse({ status: "Data received" });
});

// Example function to send data to a server
function sendDataToServer(data) {
  fetch("https://yourbackend.endpoint/api/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error));
}
