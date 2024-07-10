document.addEventListener('DOMContentLoaded', function() {    
    // Assuming you have a div with id 'navbar-container' in your HTML where the navbar will be injected
    var navbarContainer = document.getElementById('navbar-container');

    if (navbarContainer) {
        // Load the navigation HTML as a string
        var navbarHTML = `
        <div class="container-fluid position-relative p-0">
            <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                <a href="index.html" class="navbar-brand p-0">
                    <h1 class="m-0">
                        <!--<i class="fa fa-user-tie me-2"></i>AuraW.-->
                        <img src="img/logo1.png" alt="" style="width: 60px; height: 60px; margin-right: 8px;">AuraW.
                    </h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <a href="index.html" class="nav-item nav-link">Home</a>
                        <a href="about.html" class="nav-item nav-link">About</a>
                        <a href="services.html" class="nav-item nav-link">Services</a>
                        <a href="projects.html" class="nav-item nav-link">Projects</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                            <div class="dropdown-menu m-0">
                                <a href="blog.html" class="dropdown-item">Blog Grid</a>
                                <a href="detail.html" class="dropdown-item">Blog Detail</a>
                            </div>
                        </div>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu m-0">
                                <a href="price.html" class="dropdown-item">Pricing Plan</a>
                                <a href="feature.html" class="dropdown-item">My features</a>
                                <a href="team.html" class="dropdown-item">Team Members</a>
                                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                <a href="quote.html" class="dropdown-item">Free Quote</a>
                            </div>
                        </div>
                        <a href="contact.html" class="nav-item nav-link">Contact</a>
                    </div>
                    <button type="button" class="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></button>
                    <a href="https://docs.google.com/document/d/1ZoWwtnR24EFEeCwgSPUhHtVQRc66L-YsKykPo0vSm7o/edit?usp=sharing" class="btn btn-primary py-2 px-4 ms-3" target="_blank">My CV</a>
                </div>
            </nav>            
        </div>
        `;
        // Inject the HTML
        navbarContainer.innerHTML = navbarHTML;

        // Dynamically set the active class
        setActiveClass();

         // Function to handle click events on navigation links
         addClickEventListeners();
    }

    function setActiveClass() {
        var path = window.location.pathname.replace(/\/$/, ''); // Get the current page path without trailing slash
        var normalizedPath = path.endsWith('.html') ? path : `${path}.html`; // Normalize path to include .html if not present
        var navItems = document.querySelectorAll('.navbar-nav .nav-item .nav-link');
    
        navItems.forEach(function(item) {
            var itemPath = item.getAttribute('href').replace(/^\/+/, '').replace(/\/+$/, ''); // Normalize href
    
            if (normalizedPath === itemPath) {
                item.classList.add('active');
                item.parentNode.classList.add('active'); // Also add active class to the parent <li> element
            } else {
                item.classList.remove('active');
                item.parentNode.classList.remove('active'); // Ensure no other link has the active class
            }
        });
    }

    function addClickEventListeners() {
        var navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');

        navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent default action (page reload)

                // Remove active class from all links
                navLinks.forEach(function(l) {
                    l.classList.remove('active');
                    l.parentNode.classList.remove('active'); // Also remove from parent <li> elements
                });

                // Set active class to the clicked link
                this.classList.add('active');
                this.parentNode.classList.add('active'); // And its parent <li> element

                // Update the URL hash to reflect the clicked link
                window.history.pushState({}, '', this.getAttribute('href'));

                // Optionally, scroll to the top of the page after navigation
                window.scrollTo(0, 0);
            });
        });
    }
});