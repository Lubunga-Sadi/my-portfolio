'use strict'

import * as utils from './utils.js';


window.addEventListener('load', () => {
  const sr = ScrollReveal();

  const revealOptions = {
    reset: true 
  };
  
  sr.reveal('.fade-one', revealOptions);
  sr.reveal('.fade-two', revealOptions);
  sr.reveal('.contact', revealOptions);
});

/*
const positionChange = utils.select('.shift')

window.addEventListener('load', () => {
  positionChange.style.position = 'relative';
  positionChange.style.top = '200px'; 

  setTimeout(() => {
    positionChange.classList.add('transition');
    positionChange.style.top = '0px'; 
  }, 100);
})*/



