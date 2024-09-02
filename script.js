document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const projectBtns = document.querySelectorAll('.project-btn');
    const closeBtns = document.querySelectorAll('.close-btn');
    const projectDetails = document.querySelectorAll('.project-details');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

           
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });

            targetSection.style.opacity = '0';
            targetSection.style.transform = 'translateY(20px)';

            setTimeout(() => {
                targetSection.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
                targetSection.style.opacity = '1';
                targetSection.style.transform = 'translateY(0)';
            }, 100); 
        });
    });

    projectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            document.getElementById(projectId).style.display = 'flex';
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.project-details').style.display = 'none';
        });
    });

    // Close the project details when clicking outside
    document.querySelectorAll('.overlay').forEach(overlay => {
        overlay.addEventListener('click', function() {
            this.closest('.project-details').style.display = 'none';
        });
    });
});
