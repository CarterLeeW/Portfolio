// Portfolio JavaScript - Carter Wooton

document.addEventListener('DOMContentLoaded', function() {
    initSmoothScrolling();
    initTypingAnimation();
    console.log('Portfolio loaded successfully!');
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                const offset = 70; // Height of the navbar
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = targetElement.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}


// Typing animation for hero section
function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-animation');
    if (!typingElement) return;

    const text = "Software & Data Engineer";
    let index = 0;
    
    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 120);
        } else {
            // Optional: restart animation after a pause
            setTimeout(() => {
                typingElement.textContent = '';
                index = 0;
                type();
            }, 5000);
        }
    }
    
    typingElement.textContent = ''; // Clear initial text
    type(); // Start the animation
}
