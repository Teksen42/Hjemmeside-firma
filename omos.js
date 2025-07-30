document.addEventListener('DOMContentLoaded', () => {

    // ===== HER REDIGERER DU DINE MEDARBEJDERE =====
    const teamMembers = [
        {
            image: 'photo/IMG_0503.png',
            name: 'Mirsad Kose',
            title: 'Ledende Udvikler',
            description: 'Mirsad har erfaring inden for branchen og leder firmaet med en klar vision for fremtiden.',
            email: 'Mucco2635@gmail.com',
            phone: '+4593832610' // Erstat med rigtigt telefonnummer
        },
        {
            image: 'photo/IMG_0504.png',
            name: 'Muhammed Celik',
            title: 'Marketingchef',
            description: 'Muhammed er en kreativ strateg, der brænder for at skabe kampagner, der engagerer og konverterer.',
            email: 'muhammedclk2635@gmail.com',
            phone: '+4542372113' // Erstat med rigtigt telefonnummer
        },
        {
            image: 'photo/IMG_0502.png',
            name: 'Yasir Teksen',
            title: 'Administrerende Direktør',
            description: 'Yasir er hjernen bag vores tekniske løsninger og sikrer, at vores produkter altid er i topkvalitet.',
            email: 'yasirteksen@hotmail.com ',
            phone: '+4561708150' // Erstat med rigtigt telefonnummer
        },
    ];
    // ===============================================

    const teamGrid = document.getElementById('team-grid');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNavUl = document.querySelector('.main-nav ul');
    const currentYearSpan = document.getElementById('current-year');

    // Funktion til at vise medarbejderne på siden
    function displayTeamMembers() {
        if (!teamGrid) return; // Stop hvis team-grid ikke findes
        
        teamGrid.innerHTML = ''; // Tømmer gridden

        teamMembers.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('team-card');

            card.innerHTML = `
                <img src="${member.image}" alt="Billede af ${member.name}" class="team-card-img">
                <div class="team-card-content">
                    <h3>${member.name}</h3>
                    <span class="title">${member.title}</span>
                    <p class="description">${member.description}</p>
                    
                    <div class="team-card-contact">
                        <a href="mailto:${member.email}" class="contact-link"><i class="fas fa-envelope"></i> Email</a>
                        <a href="tel:${member.phone}" class="contact-link"><i class="fas fa-phone"></i> Ring</a>
                    </div>
                </div>
            `;

            teamGrid.appendChild(card);
        });
    }

    // Kald funktionen for at bygge team-sektionen
    displayTeamMembers();

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