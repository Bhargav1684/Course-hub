    // Toggle the visibility of courses based on the clicked category
    function toggleCourses(categoryId) {
        const allCourses = document.querySelectorAll('.course-list');
        allCourses.forEach(course => {
            if (course.id === categoryId) {
                course.style.display = course.style.display === 'none' ? 'block' : 'none'; // Toggle display
            } else {
                course.style.display = 'none'; // Hide other categories
            }
        });
    }

    // Show the certificate info when the "What is Certificate" button is clicked
    function showCertificateInfo() {
        const infoDiv = document.getElementById('certificate-info');
        infoDiv.style.display = 'block'; // Show certificate info
        infoDiv.innerHTML = '<h3>What is a Course Certificate?</h3><p>A course certificate is a document issued by an educational institution or platform to verify the completion of a course. It serves as proof that you have successfully completed the course and often includes details such as the course name, your name, and the completion date.</p>';
    }