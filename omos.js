document.addEventListener('DOMContentLoaded', () => {

    // ===== HER REDIGERER DU DINE MEDARBEJDERE =====
    const teamMembers = [
        {
            image: 'photo/IMG_0503.png',
            name: 'Mirsad Kose',
            title: 'Ledende Udvikler',
            description: 'Mirsad har erfaring inden for branchen og leder firmaet med en klar vision for fremtiden.',
            email: 'Mucco2635@gmail.com',
            phone: '+4593832610'
        },
        {
            image: 'photo/IMG_0502.png',
            name: 'Yasir Teksen',
            title: 'Administrerende Direktør',
            description: 'Yasir er hjernen bag vores tekniske løsninger og sikrer, at vores produkter altid er i topkvalitet.',
            email: 'yasirteksen@hotmail.com',
            phone: '+4561708150'
        },
    ];
    // ===============================================

    const teamGrid = document.getElementById('team-grid');

    function displayTeamMembers() {
        if (!teamGrid) return;
        
        teamGrid.innerHTML = ''; // Tømmer gridden

        teamMembers.forEach(member => {
            const card = document.createElement('div');
            // Vi bruger stadig 'team-card-new' som container, men indholdet er nyt
            card.classList.add('team-card-new'); 

            // HELT NY STRUKTUR for et design med rundt billede
            card.innerHTML = `
                <div class="team-card-avatar">
                    <img src="${member.image}" alt="Portræt af ${member.name}">
                </div>
                <div class="team-card-content">
                    <h3 class="team-card-name">${member.name}</h3>
                    <p class="team-card-title">${member.title}</p>
                    <p class="team-card-description">${member.description}</p>
                </div>
                <div class="team-card-contact">
                    <a href="mailto:${member.email}" class="contact-icon" aria-label="Send email til ${member.name}">
                        <i class="fas fa-envelope"></i>
                    </a>
                    <a href="tel:${member.phone}" class="contact-icon" aria-label="Ring til ${member.name}">
                        <i class="fas fa-phone"></i>
                    </a>
                </div>
            `;

            teamGrid.appendChild(card);
        });
    }

    displayTeamMembers();

    // Mobilmenu og andre scripts...
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('is-active');
        });
    }

    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});