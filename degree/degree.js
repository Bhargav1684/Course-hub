
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


// section 7
document.addEventListener('DOMContentLoaded', function () {
  const facultyCards = document.querySelectorAll('.faculty-card');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = Array.from(facultyCards).indexOf(entry.target);

        if (index < 3) {
          entry.target.classList.add('slide-left-to-right');
        } else {
          entry.target.classList.add('slide-right-to-left');
        }

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.7
  });

  facultyCards.forEach(card => {
    observer.observe(card);
  });
});

// section 9
const questions = document.querySelectorAll('.question h5');
questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

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

// section 1 // section 2 
const leftButtons = document.querySelectorAll('.left-1, .left-2');
const rightButtons = document.querySelectorAll('.right-1, .right-2');
const scrollContainers = document.querySelectorAll('.degree-certificate, .degree-certificate-1');

leftButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    scrollContainers[index].scrollBy({
      left: -320,
      behavior: 'smooth'
    });
  });
});

rightButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    scrollContainers[index].scrollBy({
      left: 320,
      behavior: 'smooth'
    });
  });
});

// section 4 // section 5 // section 6
const slider = document.getElementById('courseSlider');
const leftBtn = document.querySelector('.slider-btn.left');
const rightBtn = document.querySelector('.slider-btn.right');

leftBtn.addEventListener('click', () => {
  slider.scrollBy({ left: -300, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
  slider.scrollBy({ left: 300, behavior: 'smooth' });
});

// section 8

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".article-container");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  const scrollAmount = 320; 

  leftBtn.addEventListener("click", () => {
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});