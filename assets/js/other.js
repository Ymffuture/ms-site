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


function removeHtmlExtension(url) {
    return url.replace(/\.html$/, ``);
}

const url = "https://example.com/page.html";
const cleanUrl = removeHtmlExtension(url);
console.log(cleanUrl); 

const characters = "abcdefghijklmnopqrstuvwxyz0123456789"; 
const length = 80;  
let randomString = "";


for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
}

const newrandomString = randomString.replace(/0/gi, '-');
console.log(newrandomString);


const currentUrl = window.location.href;
const newUrl = currentUrl.replace(/\.html$/, `/future/ms/${newrandomString}`);
// window.history.replaceState(null, '', newUrl);

