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
