document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNavUl = document.querySelector('.main-nav ul');
    const currentYearSpan = document.getElementById('current-year');

    // Mobilmenu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNavUl.classList.toggle('active');
        });
    }
    
    // Opdater årstal i footer
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Particles.js konfiguration (valgfri, men cool effekt)
    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area": 700
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                },
                "size": {
                    "value": 3,
                    "random": true,
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                 "modes": {
                    "repulse": {
                        "distance": 100,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // --- Mobilmenu Toggle ---
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav'); // Vi arbejder på hele nav-elementet

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            // Tilføj/fjern en klasse på selve <nav> elementet
            mainNav.classList.toggle('is-active');
        });
    }
    
    // --- Opdater årstal i footer ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Particles.js konfiguration ---
    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 100, "density": { "enable": true, "value_area": 700 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
                "move": { "enable": true, "speed": 2, "direction": "none", "out_mode": "out" }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "repulse" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "repulse": { "distance": 100, "duration": 0.4 },
                    "push": { "particles_nb": 4 }
                }
            },
            "retina_detect": true
        });
    }
});

    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('is-open');
        });
    }

    // Vent på at hele HTML-dokumentet er indlæst
document.addEventListener('DOMContentLoaded', function () {

    // Find knappen og menuen via deres ID og klasse
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    // Tjek om både knap og menu findes på siden
    if (menuToggle && mainNav) {
        // Lyt efter et klik på knappen
        menuToggle.addEventListener('click', function () {
            // Tilføj eller fjern klassen 'menu-open' på nav-elementet
            mainNav.classList.toggle('menu-open');
        });
    }

});


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const dropdowns = document.querySelectorAll('.main-nav .dropdown > a');

    // Funktion til at åbne/lukke hovedmenuen
    menuToggle.addEventListener('click', function() {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('nav-open');
    });

    // Funktion til at åbne/lukke undermenuer på mobil
    dropdowns.forEach(dropdown => {
        // Tjek om linket rent faktisk har en undermenu
        if (dropdown.nextElementSibling && dropdown.nextElementSibling.classList.contains('dropdown-menu')) {
            dropdown.addEventListener('click', function(event) {
                // Kør kun denne logik på mobil-skærmstørrelser
                if (window.innerWidth <= 992) { 
                    // Forhindrer linket i at navigere, så vi kan åbne undermenuen
                    event.preventDefault(); 
                    
                    // Luk andre åbne undermenuer for en renere brugeroplevelse
                    const currentDropdown = this.parentElement;
                    if (!currentDropdown.classList.contains('open')) {
                        closeAllDropdowns();
                    }
                    
                    // Åben/luk den klikkede undermenu
                    currentDropdown.classList.toggle('open');
                }
            });
        }
    });
    
    // Funktion til at lukke alle åbne dropdowns
    function closeAllDropdowns() {
        document.querySelectorAll('.main-nav .dropdown.open').forEach(openDropdown => {
            openDropdown.classList.remove('open');
        });
    }
});

