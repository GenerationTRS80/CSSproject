/*jshint esversion: 6 */
const slides = document.querySelectorAll('.slide');
const next = document.querySelectorAll('#next');
const prev = document.querySelectorAll('#prev');
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
    slide[0].classList.add('current');
  }
  // Remove class with delay
  setTimeout(()=>current.classList.remove('current'));
};

// Previous slide function  
const previousSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for previous slide
  if (current.previousElementSibling) {
    // Add current sibling to previous sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Get the very last slide
    // Note: 0 is the start of the index of the array
    slide[slides.length-1].classList.add('current');
  }
  // Remove class with delay
  setTimeout(()=>current.classList.remove('current'));
};

