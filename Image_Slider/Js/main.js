/*jshint esversion: 6 */
// querySelectorAll allow you to select multiple elements
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

// Next slide function  
const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current sibling to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start 
    // Note: 0 is the start of the index of the array
    slides[0].classList.add('current');
  }
  // Remove class with delay
  setTimeout(()=>current.classList.remove('current'));
};

// Previous slide function  
const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for previous slide
  if (current.previousElementSibling) {
    // Add current class to previous sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Get the very last slide
    // Note: 0 is the start of the index of the array
    slide[slides.length-1].classList.add('current');
  }
  
  // Remove class with delay
  setTimeout(()=>current.classList.remove('current'),200);
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
});

prev.addEventListener('click', e => {
  prevSlide();
});