import * as utils from './utils.js';

const reveal = utils.select('button');
const sections = utils.select('section');
const aboutMe = utils.select('.about-me');

reveal.addEventListener('click', () => {
  sections.classList.toggle("active");
  aboutMe.classList.toggle("active");
})

const fade = document.querySelector('.fade');
const test = document.querySelector('.test');


window.addEventListener('load', function() {
  fade.classList.add("active");
  test.classList.add("active");
});