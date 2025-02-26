// FOR CHATBOT
const userInputField = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

userInputField.addEventListener("keypress", function (event) {
     if (event.key === "Enter" && userInputField.value.trim() !== "") {
          event.preventDefault(); // Prevent accidental form submission
          sendMessage();
     }
     });

     function sendMessage() {
     let userInput = userInputField.value.trim();
     if (!userInput) return; // Prevent empty messages

     displayUserMessage(userInput);
     userInputField.value = "";

     // Process bot response after a short delay
     setTimeout(() => {
          let botResponse = getBotResponse(userInput);
          displayBotMessage(botResponse);
     }, 800);
     }

     function displayUserMessage(message) {
     let userMessage = document.createElement("div");
     userMessage.className = "message user-message";
     userMessage.textContent = message;
     chatBox.appendChild(userMessage);
     chatBox.scrollTop = chatBox.scrollHeight;
     }

     function displayBotMessage(response) {
     let botMessage = document.createElement("div");
     botMessage.className = "message bot-message";

     let botIcon = document.createElement("img");
     botIcon.src = "Resources/Icons/iconAI.png";
     botIcon.alt = "Bot";
     botIcon.className = "chat-icon";

     let botText = document.createElement("span");
     botText.textContent = response;

     botMessage.appendChild(botIcon);
     botMessage.appendChild(botText);
     chatBox.appendChild(botMessage);
     chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
     input = input.trim().toLowerCase();
     console.log("User input:", input); // Debugging log

     const responses = [
          { keywords: ["hello", "hi"], response: "Hello! I'm here to provide information about HIV and AIDS. How can I assist you?" },
          { keywords: ["hiv", "what is hiv", "hiv?"], response: "HIV (Human Immunodeficiency Virus) is a virus that attacks the body's immune system." },
          { keywords: ["aids", "what is aids", "aids?"], response: "AIDS (Acquired Immunodeficiency Syndrome) is the most severe stage of HIV infection." }
     ];

     for (let entry of responses) {
          for (let keyword of entry.keywords) {
               if (input === keyword.toLowerCase()) { // Exact match check
                    console.log("Matched keyword:", keyword); // Debugging log
                    return entry.response;
               }
          }
     }

     return "I'm here to provide accurate information about HIV and AIDS. Could you clarify your question?";
}


// FOR HEADER
// HEADER RESPONSIVENESS
document.addEventListener("DOMContentLoaded", function () {
     const burgerMenu = document.getElementById("burgerMenu");
     const navMenu = document.getElementById("navMenu");

     burgerMenu.addEventListener("click", function () {
          navMenu.classList.toggle("active");
     });
});


