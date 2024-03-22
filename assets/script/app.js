'use strict'

window.addEventListener('load', () => {
  const sr = ScrollReveal();

  const revealOptions = {
    reset: true 
  };
  
  sr.reveal('.fade-one', revealOptions);
  sr.reveal('.fade-two', revealOptions);
  sr.reveal('.contact', revealOptions);
});

const aboutMeSection = document.querySelector('.about-me');
const contactSection = document.querySelector('.contact');
const aboutMeLink = document.querySelector('.about-sec');
const contactLink = document.querySelector('.con-sec');

const body = document.querySelector('body');

aboutMeLink.addEventListener('click', () => {
  aboutMeSection.scrollIntoView({ behavior: 'smooth' });
})

contactLink.addEventListener('click', () => {
  contactSection.scrollIntoView({ behavior: 'smooth' });
})

const projects = document.querySelectorAll('.projects a');
const videos = document.querySelectorAll('.projects a .link-pic');

projects.forEach((box, index) => {
  box.addEventListener('mouseenter', () => {
    videos[index].play();
  });

  box.addEventListener('mouseleave', () => {
    videos[index].pause();
    videos[index].currentTime = 0;
  });
});
