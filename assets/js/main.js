(function() {
  "use strict";

  // Function to apply .scrolled class to the body as the page is scrolled down
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    
    if (!selectHeader.classList.contains('scroll-up-sticky') &&
        !selectHeader.classList.contains('sticky-top') &&
        !selectHeader.classList.contains('fixed-top')) return;
    
    window.scrollY > 100 
      ? selectBody.classList.add('scrolled') 
      : selectBody.classList.remove('scrolled');
  }

  // Function to toggle mobile navigation
  function mobileNavToggle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }

  // Function to initialize Swiper sliders
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      const config = JSON.parse(swiperElement.querySelector(".swiper-config").innerHTML.trim());

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  // Event listeners
  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', () => {
    toggleScrolled();
    initSwiper();
    aosInit();
    toggleScrollTop();
  });

  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  mobileNavToggleBtn.addEventListener('click', mobileNavToggle);

  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToggle();
      }
    });
  });

  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => preloader.classList.add('loaded'), 1000);
      setTimeout(() => preloader.remove(), 2000);
    });
  }

  const scrollTop = document.querySelector('.scroll-top');
  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 
        ? scrollTop.classList.add('active') 
        : scrollTop.classList.remove('active');
    }
  }

  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Function to initialize animations on scroll
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  // Initialize GLightbox
  const glightbox = GLightbox({ selector: '.glightbox' });

})();

//=============================================================

// Gallery section
const galleryItems = [
  { src: "assets/img/gallery/gallery-1.jpg", title: "Gallery 1" },
  { src: "assets/img/gallery/gallery-2.jpg", title: "Gallery 2" },
  { src: "assets/img/gallery/gallery-3.jpg", title: "Gallery 3" },
  { src: "assets/img/gallery/gallery-4.jpg", title: "Gallery 4" },
  { src: "assets/img/gallery/gallery-5.jpg", title: "Gallery 5" },
  { src: "assets/img/gallery/gallery-6.jpg", title: "Gallery 6" },
  { src: "assets/img/gallery/gallery-7.jpg", title: "Gallery 7" },
  { src: "assets/img/gallery/gallery-8.jpg", title: "Gallery 8" }
];

const galleryContainer = document.getElementById('gallery-items');

galleryItems.forEach(item => {
  const galleryItemHTML = `
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="gallery-item h-100">
        <img src="${item.src}" class="img-fluid" alt="${item.title}">
        <div class="gallery-links d-flex align-items-center justify-content-center">
          <a href="${item.src}" title="${item.title}" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
          <a href="gallery-single.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
        </div>
      </div>
    </div>
  `;
  galleryContainer.insertAdjacentHTML('beforeend', galleryItemHTML);
});

console.log(galleryItems);
