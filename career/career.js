// navbar sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("mobileSidebar");
    sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
  }
  
  // Close sidebar when clicking outside navbar 
  document.addEventListener("click", function (event) {
    const sidebar = document.getElementById("mobileSidebar");
    const hamburger = document.querySelector(".hamburger");
  
    // If sidebar is open and click is outside sidebar and hamburger
    if (sidebar.style.width === "250px" &&
      !sidebar.contains(event.target) &&
      !hamburger.contains(event.target)) {
      sidebar.style.width = "0";
    }
  });

// section 4

document.addEventListener('DOMContentLoaded', function () {
    const facultyCards = document.querySelectorAll('.success-stories-card');

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
        threshold: 0.8 // Trigger when 50% of the element is in view
    });

    // Observe each faculty card
    facultyCards.forEach(card => {
        observer.observe(card);
    });
});
