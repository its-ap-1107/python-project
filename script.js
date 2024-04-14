function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    appendMessage(userInput, "user");

    // Call BrainShopAPI to get response
    // Example code to fetch response from API
    fetch('https://api.brainshop.ai/get?bid=181436&key=sUP7pcyDi0iVhlG2&uid=[uid]&msg=' + userInput)
        .then(response => response.json())
        .then(data => {
            var botResponse = data.cnt;
            appendMessage(botResponse, "bot");
        })
        .catch(error => console.error('Error:', error));
}

function appendMessage(message, sender) {
    var chatBox = document.getElementById("chat-box");
    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add(sender);
    chatBox.appendChild(messageElement);
}
