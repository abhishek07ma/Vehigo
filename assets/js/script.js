'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}



/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});

/**
 * Triggering navigation buttons scroll
 */

document.addEventListener("DOMContentLoaded", function () {
    const blogList = document.querySelector(".blog-list");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    const scrollAmount = 340; 

    rightArrow.addEventListener("click", () => {
      blogList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    leftArrow.addEventListener("click", () => {
      blogList.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
  });

  // Back to Top Button
document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.querySelector('.back-to-top');
  let isScrolling;
  
  window.addEventListener('scroll', function() {
    window.clearTimeout(isScrolling);
    
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
    
    isScrolling = setTimeout(function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('pulse-effect');
        setTimeout(() => {
          backToTopButton.classList.remove('pulse-effect');
        }, 1000);
      }
    }, 100);
  });
  
  backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.add('clicked');
    setTimeout(() => {
      this.classList.remove('clicked');
    }, 300);
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});