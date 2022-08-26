// setting up my variables
const slide = document.querySelectorAll ('.slide');
const left = document.querySelector ('.left');
const right = document.querySelector ('.right');

// next method

function nextSlide () {
  // getting the element with the current class
  const current = document.querySelector ('.current');
  // removing the current class
  current.classList.remove ('current');
  // check for next sibling with this if function
  if (current.nextElementSibling) {
    // then add the current class to the next element sibling
    current.nextElementSibling.classList.add ('current');
  } else {
    slide[0].classList.add ('current');
    // setTimeout (() => current.classList.remove ('current'));
  }
}

// previous method

function prevSlide () {
  // getting the element with the current class
  const current = document.querySelector ('.current');
  // removing the current class
  current.classList.remove ('current');
  // check for next sibling with this if function
  if (current.previousElementSibling) {
    // then add the current class to the next element sibling
    current.previousElementSibling.classList.add ('current');
  } else {
    slide[slide.length - 1].classList.add ('current');
  }
}

right.addEventListener ('click', function () {
  nextSlide ();
});

left.addEventListener ('click', function () {
  prevSlide ();
});
