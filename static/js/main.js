// Typed JS Animation
// https://github.com/mattboldman/typed.js
let typed = new Typed('#element', {
    strings: ['Software.', 'Dados.', 'IA.'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
});

// Navbar Background Change
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 1) {
        // Se estiver rolando para baixo e não tiver a classe, adiciona
        if (!navbar.classList.contains('scrolled', 'box-shadow-bottom')) {
            navbar.classList.add('scrolled', 'box-shadow-bottom');
        }
    } else {
        // Se estiver no topo e tiver a classe, remove
        if (navbar.classList.contains('scrolled', 'box-shadow-bottom')) {
            navbar.classList.remove('scrolled', 'box-shadow-bottom');
        }
    }
    
    lastScrollY = currentScrollY;
});

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Marquee
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

// Preloader
window.addEventListener('load',function(){
  document.querySelector('body').classList.add("loaded")  
});

// AOS
AOS.init();

// Projects Section Carousel
const arrowRight = document.querySelector('.projects-section .projects-carousel .slide-navigation .arrow-right');
const arrowLeft = document.querySelector('.projects-section .projects-carousel .slide-navigation .arrow-left');

let index = 0;

const activeProject = ()=> {
  const imgSlide = document.querySelector('.projects-section .projects-carousel .img-slide');
  const projectDetails = document.querySelectorAll('.projects-section .project-detail');

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 1.25}rem))`;

  projectDetails.forEach(detail => {
    detail.classList.remove('project-active');
  });

  projectDetails[index].classList.add('project-active');
}

arrowRight.addEventListener('click', () => {
  if (index < 4) {
    index++;
    arrowLeft.classList.remove('disabled');
  }
  else {
    index = 5;
    arrowRight.classList.add('disabled');
  }
  
  activeProject();
  
});

arrowLeft.addEventListener('click', () => {
  if (index > 1) {
    index--;
    arrowRight.classList.remove('disabled');
  }
  else {
    index = 0;
    arrowLeft.classList.add('disabled');
  }

  activeProject();

});