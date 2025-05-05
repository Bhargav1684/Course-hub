
// navbar sidebar
function toggleSidebar() {
  var sidebar = document.getElementById("mobileSidebar");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
}

// dropdown
// Optional JavaScript if you want to toggle the dropdown manually (without hover)
document.querySelector('.dropdown button').addEventListener('click', function () {
    const dropdownContent = document.querySelector('.dropdown-content');
    const arrow = document.querySelector('.arrow');

    // Toggle dropdown visibility
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';

    // Rotate arrow when dropdown is opened
    arrow.style.transform = dropdownContent.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
});


// section 7
document.addEventListener('DOMContentLoaded', function () {
    const facultyCards = document.querySelectorAll('.faculty-card');

    // Create an Intersection Observer to detect when the cards come into view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(facultyCards).indexOf(entry.target);

                // Add classes based on which set of cards it is
                if (index < 3) {
                    entry.target.classList.add('slide-left-to-right');
                } else {
                    entry.target.classList.add('slide-right-to-left');
                }

                // Stop observing the card once it's animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.7 // Trigger when 50% of the element is in view
    });

    // Observe each faculty card
    facultyCards.forEach(card => {
        observer.observe(card);
    });
});


// section 9
   // Toggle the answer visibility on click
   const questions = document.querySelectorAll('.question h3');
   questions.forEach(question => {
       question.addEventListener('click', () => {
           const answer = question.nextElementSibling;
           answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
       });
   });

   // Toggle the additional questions section visibility
   const moreQuestionsBtn = document.getElementById('moreQuestionsBtn');
   const additionalQuestions = document.getElementById('additionalQuestions');

   moreQuestionsBtn.addEventListener('click', () => {
       if (additionalQuestions.style.display === 'none' || additionalQuestions.style.display === '') {
           additionalQuestions.style.display = 'block';
           moreQuestionsBtn.innerText = 'Show Fewer Questions';
       } else {
           additionalQuestions.style.display = 'none';
           moreQuestionsBtn.innerText = 'More Questions';
       }
   });


   // chat box 
   document.addEventListener("DOMContentLoaded", function () {
    const chatbotBtn = document.getElementById("chatbot-btn");
    const chatContainer = document.getElementById("chat-container");
    const closeChat = document.getElementById("close-chat");
    const sendBtn = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
  
    // Display the welcome message first when the page reloads
    window.onload = function () {
      displayWelcomeMessage();
    };
  
    // Open/Close Chat Window
    chatbotBtn.addEventListener("click", function () {
      chatContainer.style.display = "flex";
      // If the chat is opened manually, display the welcome message and help message
      displayWelcomeMessage();
    });
  
    closeChat.addEventListener("click", function () {
      chatContainer.style.display = "none";
    });
  
    // Send Message
    sendBtn.addEventListener("click", function () {
      const userMessage = userInput.value.trim();
      if (userMessage) {
        // Add user's message
        addMessage(userMessage, "user");
  
        // Clear input field
        userInput.value = "";
  
        // Simulate bot's response
        setTimeout(() => {
          const botMessage = "I'm an AI here to help you!";
          addMessage(botMessage, "bot");
        }, 1000);
      }
    });
  
    // Function to add a message to the chat
    function addMessage(message, sender) {
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("message", sender);
      messageDiv.textContent = message;
      chatBox.appendChild(messageDiv);
      chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom
    }
  
    // Function to display the "Welcome to Course Hub!" message
    function displayWelcomeMessage() {
      if (chatContainer.style.display === "flex" || chatContainer.style.display === "none") {
        // First, show the "Welcome to Course Hub!" message
        const welcomeMessage = "Welcome to Course Hub!";
        addMessage(welcomeMessage, "bot");
  
        // After a short delay (2 seconds), display "How may I help you?"
        setTimeout(function () {
          const helpMessage = "How may I help you?";
          addMessage(helpMessage, "bot");
        }, 2000);  // Delay of 2 seconds
      }
    }
  
    // Optional: Press Enter to send message
    userInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        sendBtn.click();
      }
    });
  });