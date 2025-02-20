document.addEventListener("DOMContentLoaded", () => {
    const messagesDiv = document.getElementById("messages");
    const input = document.getElementById("message-input");

    function sendMessage() {
        const message = input.value;
        if (message.trim() !== "") {
            const msgElement = document.createElement("p");
            msgElement.textContent = message;
            messagesDiv.appendChild(msgElement);
            input.value = "";
        }
    }

    window.sendMessage = sendMessage;
});
