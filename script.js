        document.getElementById('current-year').textContent = new Date().getFullYear();
        
// Opdaterer årstal i footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Initialiserer Particles.js med et futuristisk tema
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#00f7ff" }, // Partikelfarve (accent)
    shape: { type: "circle" },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00f7ff", // Linjefarve (accent)
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 140, line_opacity: 0.5 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});

// Mobilmenu funktionalitet
const menuToggle = document.getElementById('mobile-menu-toggle');
const navUl = document.querySelector('.main-nav ul');

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
});