document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Handle Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop page from refreshing
            
            // Get the name for the alert
            const name = contactForm.querySelector('input[type="text"]').value;
            
            // Show a professional confirmation
            alert(`Thanks for reaching out, ${name}! Your message has been simulated. In a real-world scenario, we would connect this to AWS SES via a Lambda function.`);
            
            // Clear the form
            contactForm.reset();
        });
    }

    // 2. Navbar Scroll Effect (Adds slight transparency when scrolling)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
            navbar.style.opacity = '0.98';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.opacity = '1';
        }
    });

    // 3. Dynamic Console Message (Great for tech recruiters!)
    console.log("Welcome to Hans Davidson's Portfolio! Built with HTML, CSS, and JS, hosted on AWS.");
});