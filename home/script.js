
// navbar sidebar
function toggleSidebar() {
  var sidebar = document.getElementById("mobileSidebar");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
}

// Close sidebar when clicking outside navbar 
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("mobileSidebar");
  const hamburger = document.querySelector(".hamburger");

  if (sidebar.style.width === "250px" &&
    !sidebar.contains(event.target) &&
    !hamburger.contains(event.target)) {
    sidebar.style.width = "0";
  }
});

// Optional: Show or hide the button based on scroll position
window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block"; // Show the button
  } else {
    scrollToTopBtn.style.display = "none"; // Hide the button
  }
});

// chat bot
document.addEventListener("DOMContentLoaded", function () {
  const chatbotBtn = document.getElementById("chatbot-btn");
  const chatContainer = document.getElementById("chat-container");
  const closeChat = document.getElementById("close-chat");
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  window.onload = function () {
    displayWelcomeMessage();
  };

  chatbotBtn.addEventListener("click", function () {
    chatContainer.style.display = "flex";
    displayWelcomeMessage();
  });

  closeChat.addEventListener("click", function () {
    chatContainer.style.display = "none";
  });

  sendBtn.addEventListener("click", function () {
    const userMessage = userInput.value.trim();
    if (userMessage) {
      addMessage(userMessage, "user");

      userInput.value = "";

      setTimeout(() => {
        const botMessage = "I'm an AI here to help you!";
        addMessage(botMessage, "bot");
      }, 1000);
    }
  });

  function addMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function displayWelcomeMessage() {
    if (chatContainer.style.display === "flex" || chatContainer.style.display === "none") {
      const welcomeMessage = "Welcome to Course Hub!";
      addMessage(welcomeMessage, "bot");

      setTimeout(function () {
        const helpMessage = "How may I help you?";
        addMessage(helpMessage, "bot");
      }, 2000);
    }
  }

  userInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      sendBtn.click();
    }
  });
});


// review section 
const container = document.querySelector('.review-container');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', () => {
  container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  container.scrollBy({ left: -container.offsetWidth, behavior: 'smooth' });
});


// courses community section
const container1 = document.querySelector('.community-container');
const nextBtn1 = document.getElementById('nextBtn-1');
const prevBtn1 = document.getElementById('prevBtn-1');

nextBtn1.addEventListener('click', () => {
  container1.scrollBy({ left: container1.offsetWidth, behavior: 'smooth' });
});

prevBtn1.addEventListener('click', () => {
  container1.scrollBy({ left: -container1.offsetWidth, behavior: 'smooth' });
});



