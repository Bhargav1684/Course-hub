
// navbar sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("mobileSidebar");
  sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
}

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
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
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

// small screen size device slider section for all section 
document.addEventListener('DOMContentLoaded', () => {
  const sliders = [
    {
      container: '.course-section',
      leftBtn: '.slider-2-btn.left-2',
      rightBtn: '.slider-2-btn.right-2',
      responsive: false,
      dynamicStep: true
    },
    {
      container: '.course-certificates',
      leftBtn: '.slider-btn.left',
      rightBtn: '.slider-btn.right',
      responsive: true
    },
    {
      container: '.course-container2',
      leftBtn: '.for-left',
      rightBtn: '.for-right'
    },
    {
      container: '.free-course-certificates',
      leftBtn: '.free-left',
      rightBtn: '.free-right'
    },
    {
      container: '.free-course-certificates-4',
      leftBtn: '.course-left',
      rightBtn: '.course-right'
    },
    {
      container: '.review-container',
      leftBtn: '#prevBtn',
      rightBtn: '#nextBtn',
      dynamicStep: true
    },
    {
      container: '.community-container',
      leftBtn: '#prevBtn-1',
      rightBtn: '#nextBtn-1',
      dynamicStep: true
    }
  ];

  const isSmallScreen = () => window.innerWidth <= 768;

  sliders.forEach(slider => {
    const container = document.querySelector(slider.container);
    const leftBtn = document.querySelector(slider.leftBtn);
    const rightBtn = document.querySelector(slider.rightBtn);

    if (!container || !leftBtn || !rightBtn) return;

    const getScrollAmount = () =>
      slider.dynamicStep ? container.offsetWidth : 300;

    const scrollSlider = (direction) => {
      container.scrollBy({
        left: direction === 'left' ? -getScrollAmount() : getScrollAmount(),
        behavior: 'smooth'
      });
    };

    const updateResponsiveButtons = () => {
      if (slider.responsive) {
        const display = isSmallScreen() ? 'block' : 'none';
        leftBtn.style.display = display;
        rightBtn.style.display = display;
      }
    };

    if (!slider.responsive || isSmallScreen()) {
      leftBtn.addEventListener('click', () => scrollSlider('left'));
      rightBtn.addEventListener('click', () => scrollSlider('right'));
    }

    if (slider.responsive) {
      window.addEventListener('resize', updateResponsiveButtons);
      updateResponsiveButtons();
    }
  });
});

