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


// section 3
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".career-section");
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

// section 4
document.addEventListener('DOMContentLoaded', function () {
    const facultyCards = document.querySelectorAll('.success-stories-card');

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
        threshold: 0.8
    });

    facultyCards.forEach(card => {
        observer.observe(card);
    });
});

// section 5 
const slider = document.getElementById('careerSlider');
const leftBtn = document.querySelector('.slider-btn.left');
const rightBtn = document.querySelector('.slider-btn.right');

leftBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -slider.clientWidth * 0.8, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
    slider.scrollBy({ left: slider.clientWidth * 0.8, behavior: 'smooth' });
});