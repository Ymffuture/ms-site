document.addEventListener('DOMContentLoaded', function() {
    const badge = document.querySelector('.badge');
    const image = document.getElementById('galleryImage');
  
    if (badge) {
        image.classList.add('blur');
    }
  });


  // script.js
document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check if a theme is already set in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        body.classList.add("light-theme");
    }

    themeToggle.addEventListener("click", function() {
        if (body.classList.contains("light-theme")) {
            body.classList.replace("light-theme", "dark-theme");
            localStorage.setItem("theme", "dark-theme");
        } else {
            body.classList.replace("dark-theme", "light-theme");
            localStorage.setItem("theme", "light-theme");
        }
    });
});


// script.js
window.addEventListener('load', function() {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.getAttribute('href');
            history.pushState(null, '', url);
            // Load content dynamically here, if needed
        });
    });
});

window.addEventListener('popstate', function() {
    // Handle the browser back button
    const url = window.location.pathname;
    // Load content based on the URL, if needed
});

document.addEventListener('contextmenu', event => event.preventDefault());
