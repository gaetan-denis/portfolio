const openMenu = () => {
    const menu = document.querySelector(".header-menu");
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
        document.querySelector("header .material-icons").innerHTML = "close";
    } else {
        document.querySelector("header .material-icons").innerHTML = "menu";
    }
};

// Ferme le menu après avoir cliqué sur un lien
document.querySelectorAll('.header-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.header-menu');
        menu.classList.remove('active');
        document.querySelector('header .material-icons').innerHTML = "menu";
    });
});


// Particules

document.querySelectorAll('.particles-js').forEach((element, index) => {
    const uniqueId = `particles-${index}`;
    element.setAttribute('id', uniqueId); // Attribuer un ID unique à chaque section

    particlesJS(uniqueId, {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: '#ffffff',
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000',
                },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab',
                },
                onclick: {
                    enable: true,
                    mode: 'push',
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
    });
});

//Dark Thème

// Basculer entre les thèmes clair et sombre
const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('dark-theme');

    // Changer l'icône du bouton de bascule
    const themeToggleBtnIcon = document.querySelector('.theme-toggle-btn span');
    if (body.classList.contains('dark-theme')) {
        themeToggleBtnIcon.innerHTML = 'dark_mode';
        themeToggleBtn.classList.add('dark-mode');
    } else {
        themeToggleBtnIcon.innerHTML = 'light_mode';
        themeToggleBtn.classList.remove('dark-mode');
    }

    // Changer la couleur des éléments spécifiques au thème
    document.querySelectorAll('header, .header-menu li a, .slider, .realisation h3, .skill, .contact, .contact a').forEach(el => {
        el.classList.toggle('dark-theme');
    });
}

// Ajouter un bouton de bascule dans le header
const themeToggleBtn = document.createElement('button');
themeToggleBtn.classList.add('theme-toggle-btn');
themeToggleBtn.innerHTML = '<span class="material-icons">light_mode</span>';
themeToggleBtn.onclick = toggleTheme;
document.querySelector('header .flex').appendChild(themeToggleBtn);