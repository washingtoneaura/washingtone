function setActiveClass() {
    var path = window.location.pathname.replace(/\/$/, ''); // Get the current page path without trailing slash
    var normalizedPath = path.endsWith('.html') ? path : `${path}.html`; // Normalize path to include .html if not present
    var navItems = document.querySelectorAll('.navbar-nav .nav-link'); // Update selector to target .nav-link directly
  
    navItems.forEach(function(item) {
        var itemPath = item.getAttribute('href').replace(/^\/+/, '').replace(/\/+$/, ''); // Normalize href

        if (normalizedPath === itemPath) {
            item.classList.add('active');
            item.parentNode.classList.add('active'); // Optionally add active class to parent <li> for styling
        } else {
            item.classList.remove('active');
            item.parentNode.classList.remove('active'); // Ensure no other link has the active class
        }
    });
}

// Call the function to set active classes on page load
setActiveClass();
