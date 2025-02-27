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
          { keywords: ["aids", "what is aids", "aids?"], response: "AIDS (Acquired Immunodeficiency Syndrome) is the most severe stage of HIV infection." },
          { keywords: ["hiv symptoms", "symptoms of hiv", "early signs of hiv"], response: "Early symptoms of HIV may include fever, sore throat, swollen lymph nodes, rash, and fatigue." },
          { keywords: ["hiv transmission", "how is hiv spread", "hiv causes"], response: "HIV is transmitted through unprotected sex, sharing needles, blood transfusions with infected blood, and from mother to child during childbirth or breastfeeding." },
          { keywords: ["hiv prevention", "how to prevent hiv", "hiv protection"], response: "HIV prevention methods include using condoms, practicing safe sex, avoiding sharing needles, and taking PrEP (pre-exposure prophylaxis) if at high risk." },
          { keywords: ["is hiv curable", "hiv cure", "can hiv be cured"], response: "There is currently no cure for HIV, but it can be managed with antiretroviral therapy (ART) to maintain a healthy life." },
          { keywords: ["hiv test", "how to test for hiv", "where to get hiv test"], response: "HIV testing is available at hospitals, clinics, and community health centers. Rapid tests and self-testing kits are also available." },
          { keywords: ["hiv treatment", "how is hiv treated", "hiv medication"], response: "HIV is treated with antiretroviral therapy (ART), which helps control the virus and keep the immune system strong." },
          { keywords: ["hiv and pregnancy", "can a mother pass hiv to baby", "hiv mother to child"], response: "HIV-positive mothers can reduce the risk of passing the virus to their baby by taking ART and following medical advice during pregnancy and childbirth." },
          { keywords: ["hiv vs aids", "difference between hiv and aids"], response: "HIV is the virus that causes AIDS. AIDS is the final stage of HIV when the immune system is severely weakened." },
          { keywords: ["living with hiv", "hiv positive", "hiv lifestyle"], response: "People living with HIV can lead healthy lives with proper treatment, a balanced diet, and regular medical check-ups." }
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


