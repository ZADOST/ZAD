document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. SCROLL ANIMATION LOGIC (Intersection Observer) ---
    // This finds all elements with the class 'fade-in-section' and makes them visible as you scroll.
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once it has faded in
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(el => observer.observe(el));


    // --- 2. IMAGE MODAL LOGIC (Lightbox) ---
    // Grabs the modal elements
    const modal = document.getElementById("imageModal");
    const img = document.getElementById("heroImage");
    const modalImg = document.getElementById("fullScreenImg");
    const span = document.getElementsByClassName("close-modal")[0];

    // When the user clicks on the profile picture, open the modal
    if (img && modal) {
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src; // Uses the same image source
            // Prevent scrolling on the body while modal is open
            document.body.style.overflow = "hidden"; 
        }
    }

    // When the user clicks on <span> (x), close the modal
    if (span) {
        span.onclick = function() { 
            modal.style.display = "none";
            document.body.style.overflow = "auto"; // Restore scrolling
        }
    }

    // When the user clicks anywhere outside of the image, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
});