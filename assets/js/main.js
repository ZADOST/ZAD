document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. SCROLL ANIMATION LOGIC (Intersection Observer) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(el => observer.observe(el));


    // --- 2. DYNAMIC MULTI-IMAGE MODAL LOGIC (Lightbox) ---
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullScreenImg");
    const captionText = document.getElementById("modalCaption");
    const span = document.getElementsByClassName("close-modal")[0];

    // Select the hero image AND all images inside the certificate grid
    const clickableImages = document.querySelectorAll("#heroImage, .cert-img-container img");

    if (modal) {
        // Loop through every clickable image and attach the modal logic
        clickableImages.forEach(img => {
            img.style.cursor = "pointer"; // Make it look clickable
            
            img.onclick = function() {
                modal.style.display = "block";
                modalImg.src = this.src; 
                // Dynamically pull the caption from the image's alt text
                captionText.innerHTML = this.alt || "Shazad Hassan Babakr"; 
                document.body.style.overflow = "hidden"; 
            }
        });

        // Close the modal when clicking the 'X'
        if (span) {
            span.onclick = function() { 
                modal.style.display = "none";
                document.body.style.overflow = "auto"; 
            }
        }

        // Close the modal when clicking anywhere in the black background area
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        }
    }
});