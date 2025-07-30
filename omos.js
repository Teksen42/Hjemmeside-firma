document.addEventListener('DOMContentLoaded', () => {

    // ===== HER REDIGERER DU DINE MEDARBEJDERE =====
    const teamMembers = [
        {
             image: 'photo/IMG_0503.png',
            name: 'Mirsad kose',
            title: 'Ledende Udvikler',
            description: 'Lars har 20 års erfaring inden for branchen og leder firmaet med en klar vision for fremtiden.'
        },
        {
             image: 'photo/IMG_0504.png',
            name: 'Muhammed Celik',
            title: 'Marketingchef',
            description: 'Mette er en kreativ strateg, der brænder for at skabe kampagner, der engagerer og konverterer.'
        },
        {
             image: 'photo/IMG_0502.png',
            name: 'Yasir Teksen',
            title: 'Administrerende Direktør',
            description: 'Søren er hjernen bag vores tekniske løsninger og sikrer, at vores produkter altid er i topkvalitet.'
        },
        
    ];
    // ===============================================

    const teamGrid = document.getElementById('team-grid');

    // Funktion til at vise medarbejderne på siden
    function displayTeamMembers() {
        // Tømmer gridden, hvis der allerede er noget
        teamGrid.innerHTML = '';

        teamMembers.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('team-card');

            card.innerHTML = `
                <img src="${member.image}" alt="Billede af ${member.name}" class="team-card-img">
                <div class="team-card-content">
                    <h3>${member.name}</h3>
                    <span class="title">${member.title}</span>
                    <p class="description">${member.description}</p>
                </div>
            `;

            teamGrid.appendChild(card);
        });
    }

    // Kald funktionen for at bygge siden
    displayTeamMembers();
});

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
});

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
});

