
//add to cart navbar
function addToCart(courseName, coursePrice) {
  alert(`${courseName} added to cart for ${coursePrice}`);
}


// Optional: Show or hide the button based on scroll position
window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block"; // Show the button
  } else {
    scrollToTopBtn.style.display = "none"; // Hide the button
  }
});


//  text container in hero section header
document.addEventListener('DOMContentLoaded', function () {
  const textLines = document.querySelectorAll('.text-line');
  let currentIndex = 0;

  function startAnimation() {
    // Reset all lines and hide them initially
    textLines.forEach(line => {
      line.style.opacity = 0;
      line.style.width = 0;  // Ensure it's hidden at the start
      line.style.animation = 'none';  // Reset animation
    });

    // Show and animate the current line
    const currentLine = textLines[currentIndex];
    currentLine.style.opacity = 1;
    currentLine.style.animation = 'typing 3s steps(30, end) forwards, erasing 2s steps(30, end) forwards 3s';

    // Move to the next line after typing and erasing are done (5s: 3s typing + 2s erasing)
    currentIndex = (currentIndex + 1) % textLines.length;

    // Loop the animation every 5 seconds
    setTimeout(startAnimation, 5000);
  }

  startAnimation(); // Start the animation when the page loads
});


// chat bot
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
