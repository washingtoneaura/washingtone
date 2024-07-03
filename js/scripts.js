// Footer Script
document.write('<script src="js/footer.js?v=1.0.0"></script>');

// JavaScript Libraries
document.write('<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>');
document.write('<script src="lib/wow/wow.min.js"></script>');
document.write('<script src="lib/easing/easing.min.js"></script>');
document.write('<script src="lib/waypoints/waypoints.min.js"></script>');
document.write('<script src="lib/counterup/counterup.min.js"></script>');
document.write('<script src="lib/owlcarousel/owl.carousel.min.js"></script>');
document.write('<script src="lib/parallax/parallax.min.js"></script>');
document.write('<script src="lib/lightbox/js/lightbox.min.js"></script>');

// Template Javascript
document.write('<script src="js/main.js?v=1.0.0"></script>');




/* METHOD 2 */
// Function to dynamically load scripts
/*function loadScripts() {
    // Define script sources
    const scriptSources = [
        "https://code.jquery.com/jquery-3.4.1.min.js",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js",
        "lib/wow/wow.min.js",
        "lib/easing/easing.min.js",
        "lib/waypoints/waypoints.min.js",
        "lib/counterup/counterup.min.js",
        "lib/owlcarousel/owl.carousel.min.js",
        "lib/parallax/parallax.min.js",
        "lib/lightbox/js/lightbox.min.js",
        "js/main.js?v=1.0.0",
        "js/footer.js?v=1.0.0"
    ];

    // Dynamically add each script tag
    scriptSources.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
    });
}

// Call the function to load scripts
loadScripts(); */
