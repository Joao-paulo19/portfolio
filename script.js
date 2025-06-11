const translations = {
    'pt': {
        // Navbar
        'inicio': 'Início',
        'sobre': 'Sobre',
        'habilidades': 'Habilidades',
        'projetos': 'Projetos',
        'contato': 'Contato',

        // Hero Section
        'hero_greeting': 'Olá, eu sou',
        'hero_subtitle': 'Desenvolvedor Full Stack com foco em Python',
        'hero_description': 'Estudante de Sistemas para Internet, desenvolvendo soluções práticas com Python e tecnologias modernas.',
        'ver_projetos': 'Ver Projetos',
        'contato_btn': 'Contato',

        // About Section
        'sobre_titulo': 'Sobre Mim',
        'sobre_texto1': 'Tenho 20 anos e atualmente curso Sistemas para Internet. Trabalho com desenvolvimento desde 2021, com foco em projetos práticos usando Python.',
        'sobre_texto2': 'Atuo como estagiário de T.I na prefeitura de Fernandópolis, criando relatórios e mantendo bancos de dados. Já participei de freelas e projetos pessoais que ampliaram minha experiência.',
        'formacao': 'Formação',
        'formacao1_titulo': 'Tecnólogo em Sistemas para Internet',
        'formacao1_desc': 'Fatec Jales - 2023-2025',
        'formacao2_titulo': 'Técnico em Informática p/ Internet',
        'formacao2_desc': 'Etec Prof. Armando José Farinazzo - 2021-2022',
        'formacao3_titulo': 'Técnico em Administração',
        'formacao3_desc': 'Etec Prof. Armando José Farinazzo - 2021-2022',

        // Skills Section
        'habilidades_titulo': 'Habilidades',
        'linguagens': 'Linguagens',
        'frameworks': 'Frameworks & Bibliotecas',
        'ferramentas': 'Ferramentas & Tecnologias',

        // Projects Section
        'projetos_titulo': 'Projetos',
        'projeto1_titulo': 'Sistema Financeiro',
        'projeto1_desc': 'Controle financeiro em HTML que salva os dados no próprio arquivo. Registros por mês e ano.',
        'projeto2_titulo': 'YouTube Downloader',
        'projeto2_desc': 'App para baixar vídeos e áudios do YouTube, com opções de conversão embutidas.',
        'projeto3_titulo': 'UbeProf',
        'projeto3_desc': 'Plataforma para conectar professores e alunos via geolocalização. Foco em aulas práticas.',
        'codigo': 'Código',

        // Contact Section
        'contato_titulo': 'Contato',
        'email': 'Email',
        'telefone': 'Telefone',
        'localizacao': 'Localização',
        'localizacao_desc': 'Fernandópolis, SP - Brasil',
        'conecte_se': 'Conecte-se comigo',

        // Footer
        'footer_text': '© 2025 João Paulo Maria de Alvarenga. Todos os direitos reservados.'
    },

    'en': {
        // Navbar
        'inicio': 'Home',
        'sobre': 'About',
        'habilidades': 'Skills',
        'projetos': 'Projects',
        'contato': 'Contact',

        // Hero Section
        'hero_greeting': 'Hello, I’m',
        'hero_subtitle': 'Full Stack Developer with focus on Python',
        'hero_description': 'Internet Systems Technology student building practical solutions with Python and modern tools.',
        'ver_projetos': 'View Projects',
        'contato_btn': 'Contact',

        // About Section
        'sobre_titulo': 'About Me',
        'sobre_texto1': 'I’m 20 years old and currently studying Internet Systems Technology. I’ve worked with various languages and tools, mainly using Python.',
        'sobre_texto2': 'Currently interning in IT at Fernandópolis city hall, developing reports and maintaining databases. I’ve also done freelance and personal projects to gain real-world experience.',
        'formacao': 'Education',
        'formacao1_titulo': 'Technology in Internet Systems',
        'formacao1_desc': 'Fatec Jales - 2023-2025',
        'formacao2_titulo': 'Technical in Internet Computing',
        'formacao2_desc': 'Etec Prof. Armando José Farinazzo - 2021-2022',
        'formacao3_titulo': 'Technical in Administration',
        'formacao3_desc': 'Etec Prof. Armando José Farinazzo - 2021-2022',

        // Skills Section
        'habilidades_titulo': 'Skills',
        'linguagens': 'Languages',
        'frameworks': 'Frameworks & Libraries',
        'ferramentas': 'Tools & Technologies',

        // Projects Section
        'projetos_titulo': 'Projects',
        'projeto1_titulo': 'Financial System',
        'projeto1_desc': 'Standalone HTML tool to track income and expenses by month/year. Saves data in the file itself.',
        'projeto2_titulo': 'YouTube Downloader',
        'projeto2_desc': 'App to download YouTube videos and audio with built-in format conversion.',
        'projeto3_titulo': 'UbeProf',
        'projeto3_desc': 'Platform that connects teachers and students using geolocation. Focused on practical learning.',
        'codigo': 'Code',

        // Contact Section
        'contato_titulo': 'Contact',
        'email': 'Email',
        'telefone': 'Phone',
        'localizacao': 'Location',
        'localizacao_desc': 'Fernandópolis, SP - Brazil',
        'conecte_se': 'Connect with me',

        // Footer
        'footer_text': '© 2025 João Paulo Maria de Alvarenga. All rights reserved.'
    }
};

// Estado atual
let currentLang = 'pt';
let currentTheme = 'light';

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Verificar preferências salvas
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLang = localStorage.getItem('language') || 'pt';
    
    currentTheme = savedTheme;
    currentLang = savedLang;
    
    // Aplicar tema e idioma salvos
    applyTheme(currentTheme);
    applyLanguage(currentLang);
    
    // Event listeners
    setupEventListeners();
    
    // Smooth scroll para navegação
    setupSmoothScroll();
    
    // Animações no scroll
    setupScrollAnimations();
});

function setupEventListeners() {
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
    
    themeToggle.addEventListener('click', toggleTheme);
    langToggle.addEventListener('click', toggleLanguage);
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
}

function applyTheme(theme) {
    const body = document.body;
    const themeIcon = document.querySelector('#theme-toggle i');
    
    if (theme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
    } else {
        body.removeAttribute('data-theme');
        themeIcon.className = 'fas fa-moon';
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    applyLanguage(currentLang);
    localStorage.setItem('language', currentLang);
}

function applyLanguage(lang) {
    const langButton = document.getElementById('lang-toggle');
    const htmlLang = document.documentElement;
    
    // Atualizar botão de idioma
    langButton.textContent = lang === 'pt' ? 'EN' : 'PT';
    
    // Atualizar atributo lang do HTML
    htmlLang.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
    
    // Atualizar textos da página
    updatePageTexts(lang);
}

function updatePageTexts(lang) {
    const texts = translations[lang];
    
    // Navbar
    document.querySelector('a[href="#home"]').textContent = texts.inicio;
    document.querySelector('a[href="#about"]').textContent = texts.sobre;
    document.querySelector('a[href="#skills"]').textContent = texts.habilidades;
    document.querySelector('a[href="#projects"]').textContent = texts.projetos;
    document.querySelector('a[href="#contact"]').textContent = texts.contato;
    
    // Hero Section
    document.querySelector('.hero-title').innerHTML = `${texts.hero_greeting} <span class="highlight">João Paulo</span>`;
    document.querySelector('.hero-subtitle').textContent = texts.hero_subtitle;
    document.querySelector('.hero-description').textContent = texts.hero_description;
    document.querySelector('.btn-primary').textContent = texts.ver_projetos;
    document.querySelector('.btn-secondary').textContent = texts.contato_btn;
    
    // About Section
    document.querySelector('#about .section-title').textContent = texts.sobre_titulo;
    const aboutTexts = document.querySelectorAll('.about-text p');
    aboutTexts[0].textContent = texts.sobre_texto1;
    aboutTexts[1].textContent = texts.sobre_texto2;
    
    document.querySelector('.about-education h3').textContent = texts.formacao;
    const educationItems = document.querySelectorAll('.education-item');
    educationItems[0].querySelector('h4').textContent = texts.formacao1_titulo;
    educationItems[0].querySelector('p').textContent = texts.formacao1_desc;
    educationItems[1].querySelector('h4').textContent = texts.formacao2_titulo;
    educationItems[1].querySelector('p').textContent = texts.formacao2_desc;
    educationItems[2].querySelector('h4').textContent = texts.formacao3_titulo;
    educationItems[2].querySelector('p').textContent = texts.formacao3_desc;
    
    // Skills Section
    document.querySelector('#skills .section-title').textContent = texts.habilidades_titulo;
    const skillCategories = document.querySelectorAll('.skill-category h3');
    skillCategories[0].textContent = texts.linguagens;
    skillCategories[1].textContent = texts.frameworks;
    skillCategories[2].textContent = texts.ferramentas;
    
    // Projects Section
    document.querySelector('#projects .section-title').textContent = texts.projetos_titulo;
    const projectTitles = document.querySelectorAll('.project-content h3');
    const projectDescs = document.querySelectorAll('.project-content p');
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectTitles[0].textContent = texts.projeto1_titulo;
    projectDescs[0].textContent = texts.projeto1_desc;
    projectTitles[1].textContent = texts.projeto2_titulo;
    projectDescs[1].textContent = texts.projeto2_desc;
    projectTitles[2].textContent = texts.projeto3_titulo;
    projectDescs[2].textContent = texts.projeto3_desc;
    
    projectLinks.forEach(link => {
        link.innerHTML = `<i class="fab fa-github"></i> ${texts.codigo}`;
    });
    
    // Contact Section
    document.querySelector('#contact .section-title').textContent = texts.contato_titulo;
    const contactItems = document.querySelectorAll('.contact-item h4');
    contactItems[0].textContent = texts.email;
    contactItems[1].textContent = texts.telefone;
    contactItems[2].textContent = texts.localizacao;
    
    document.querySelector('.contact-item:nth-child(3) p').textContent = texts.localizacao_desc;
    document.querySelector('.contact-social h3').textContent = texts.conecte_se;
    
    // Footer
    document.querySelector('.footer p').textContent = texts.footer_text;
}

function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Compensar altura da navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .education-item, .contact-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Destacar link ativo na navegação
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Adicionar classe active ao CSS
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--accent-primary) !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);