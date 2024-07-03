// Function to dynamically load scripts
function loadScripts() {
    // Define script sources
    const scriptSources = [
        //JavaScript Libraries
        "https://code.jquery.com/jquery-3.4.1.min.js",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js",
        "lib/wow/wow.min.js",
        "lib/easing/easing.min.js",
        "lib/waypoints/waypoints.min.js",
        "lib/counterup/counterup.min.js",
        "lib/owlcarousel/owl.carousel.min.js",
        "lib/parallax/parallax.min.js",
        "lib/lightbox/js/lightbox.min.js",

        // Template Javascript
        "main.js?v=1.0.0",

        //Footer Script 
        "footer.js?v=1.0.0",
    ];

    // Dynamically add each script tag
    scriptSources.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
    });
}

// Call the function to load scripts
loadScripts();
