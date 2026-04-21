// script.js

// Language translations
const translations = {
    pt: {
        nav_home: "<span class='nav-index'>[0]</span> Início",
        nav_trajectory: "<span class='nav-index'>[1]</span> Trajetória",
        nav_courses: "<span class='nav-index'>[2]</span> Cursos",
        nav_projects: "<span class='nav-index'>[3]</span> Projetos",
        nav_contact: "<span class='nav-index'>[4]</span> Contato",
        hero_subtitle: "Bem-vindo ao meu portfólio",
        hero_greeting: "Olá, eu sou",
        hero_role: "Desenvolvedor <span class='highlight'>Backend</span> · Especialista em <span class='highlight'>Python</span> & <span class='highlight'>Django</span>",
        btn_cv: "Baixar CV",
        btn_projects: "Ver Projetos",
        scroll_down: "Role para baixo",
        section_trajectory: "Minha",
        section_trajectory_span: "Trajetória",
        role_jr: "Desenvolvedor Júnior",
        role_jr_desc: "[Descrição das atividades a preencher...]",
        role_intern: "Estagiário em Desenvolvimento",
        role_intern_desc: "Manutenção do sistema, correção de bugs e auxílio no desenvolvimento.",
        role_grad: "Graduando em Análise e Desenvolvimento de Sistemas",
        role_grad_desc: "Foco em engenharia de software, banco de dados relacionais e não-relacionais, e arquitetura de sistemas web.",
        badge_current: "Atual",
        section_courses: "Cursos e",
        section_courses_span: "Certificações",
        course_1_desc: "Certificação reconhecida internacionalmente em fundamentos e orientação a objetos com Python.",
        course_2_desc: "Especialização na construção de APIs seguras, autenticação JWT e arquitetura avançada.",
        course_3_title: "Banco de Dados SQL",
        course_3_desc: "Modelagem de dados e otimização de queries em PostgreSQL e MySQL.",
        course_4_title: "Docker & Containerização",
        course_4_desc: "Empacotamento de aplicações web e criação de ambientes isolados para deploy ágil.",
        course_5_title: "Arquitetura de Software",
        course_5_desc: "Princípios SOLID, Clean Code, Design Patterns e arquitetura orientada a serviços (SOA).",
        course_6_title: "Git & Fluxos Ágeis",
        course_6_desc: "Controle de versionamento colaborativo e atuação em times sob o framework Scrum.",
        section_projects: "Meus",
        section_projects_span: "Projetos",
        btn_github: "Ver Todos no GitHub &rarr;",
        proj_1_desc: "API robusta construída com Django REST Framework contendo carrinho de compras, checkout, autenticação JWT, Celery para tarefas assíncronas e Redis.",
        proj_1_link: "Ver Repositório",
        proj_2_title: "Web Scraper de Preços",
        proj_2_desc: "Ferramenta automatizada em Python (BeautifulSoup e Selenium) para extrair e monitorar variações de preços de e-commerces gerando alertas por e-mail.",
        proj_3_title: "Sistema de Gestão Interna",
        proj_3_desc: "Plataforma para gestão de estoque e fluxo de caixa utilizando o core do Django no backend e templates integrados com Bootstrap no frontend.",
        proj_4_desc: "Bot de atendimento inteligente em Python usando a biblioteca python-telegram-bot integrado a APIs externas para busca de informações rápidas.",
        proj_5_title: "Gateway de Pagamentos",
        proj_5_desc: "Microserviço em Python focado exclusivamente em integrar gateways de pagamento (Stripe e Mercado Pago) processando webhooks com segurança.",
        footer_title: "Vamos",
        footer_title_span: "conversar!",
        footer_desc: "Estou sempre aberto a novas oportunidades e desafios profissionais na área de desenvolvimento.",
        footer_rights: "&copy; 2026 Luiz Eduardo Vieira. Todos os direitos reservados."
    },
    en: {
        nav_home: "<span class='nav-index'>[0]</span> Home",
        nav_trajectory: "<span class='nav-index'>[1]</span> Journey",
        nav_courses: "<span class='nav-index'>[2]</span> Courses",
        nav_projects: "<span class='nav-index'>[3]</span> Projects",
        nav_contact: "<span class='nav-index'>[4]</span> Contact",
        hero_subtitle: "Welcome to my portfolio",
        hero_greeting: "Hello, I am",
        hero_role: "<span class='highlight'>Backend</span> Developer · <span class='highlight'>Python</span> & <span class='highlight'>Django</span> Specialist",
        btn_cv: "Download CV",
        btn_projects: "View Projects",
        scroll_down: "Scroll down",
        section_trajectory: "My",
        section_trajectory_span: "Journey",
        role_jr: "Junior Developer",
        role_jr_desc: "[Activity description to be filled...]",
        role_intern: "Development Intern",
        role_intern_desc: "System maintenance, bug fixing, and development support.",
        role_grad: "BSc in Systems Analysis and Development",
        role_grad_desc: "Focus on software engineering, relational and non-relational databases, and web systems architecture.",
        badge_current: "Current",
        section_courses: "Courses &",
        section_courses_span: "Certifications",
        course_1_desc: "Internationally recognized certification in Python fundamentals and object-oriented programming.",
        course_2_desc: "Specialization in building secure APIs, JWT authentication, and advanced architecture.",
        course_3_title: "SQL Databases",
        course_3_desc: "Data modeling and query optimization in PostgreSQL and MySQL.",
        course_4_title: "Docker & Containerization",
        course_4_desc: "Packaging web applications and creating isolated environments for agile deployment.",
        course_5_title: "Software Architecture",
        course_5_desc: "SOLID principles, Clean Code, Design Patterns, and Service-Oriented Architecture (SOA).",
        course_6_title: "Git & Agile Workflows",
        course_6_desc: "Collaborative version control and team performance under the Scrum framework.",
        section_projects: "My",
        section_projects_span: "Projects",
        btn_github: "See All on GitHub &rarr;",
        proj_1_desc: "Robust API built with Django REST Framework featuring a shopping cart, checkout, JWT authentication, Celery for async tasks, and Redis.",
        proj_1_link: "View Repository",
        proj_2_title: "Price Web Scraper",
        proj_2_desc: "Automated Python tool (BeautifulSoup and Selenium) to extract and monitor e-commerce price variations, generating email alerts.",
        proj_3_title: "Internal Management System",
        proj_3_desc: "Platform for inventory and cash flow management using Django core on the backend and Bootstrap-integrated templates on the frontend.",
        proj_4_desc: "Smart customer service bot in Python using the python-telegram-bot library integrated with external APIs for quick information retrieval.",
        proj_5_title: "Payment Gateway",
        proj_5_desc: "Python microservice focused exclusively on integrating payment gateways (Stripe and Mercado Pago), processing webhooks securely.",
        footer_title: "Let's",
        footer_title_span: "talk!",
        footer_desc: "I am always open to new opportunities and professional challenges in software development.",
        footer_rights: "&copy; 2026 Luiz Eduardo Vieira. All rights reserved."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    
    // Translation Logic
    const langPtBtn = document.getElementById('lang-pt');
    const langEnBtn = document.getElementById('lang-en');

    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        if (lang === 'en') {
            langEnBtn.classList.remove('dimmed');
            langPtBtn.classList.add('dimmed');
            document.documentElement.lang = "en";
        } else {
            langPtBtn.classList.remove('dimmed');
            langEnBtn.classList.add('dimmed');
            document.documentElement.lang = "pt-BR";
        }
    }

    if(langPtBtn && langEnBtn) {
        langPtBtn.addEventListener('click', () => setLanguage('pt'));
        langEnBtn.addEventListener('click', () => setLanguage('en'));
    }

    // Header Scroll Effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            
            // Adjust offset for fixed header
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Smooth Scrolling with Offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
                
                // Close mobile menu if open
                if(navList && navList.classList.contains('active')) {
                    navList.classList.remove('active');
                }
            }
        });
    });

    // Scroll Reveal Animations
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-up');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            }
        });
    };

    // Initial check and event listener
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
    
    // Mobile Menu Toggle (Basic implementation)
    const mobileToggle = document.getElementById('mobile-toggle');
    const navList = document.querySelector('.nav-list');
    
    if(mobileToggle && navList) {
        mobileToggle.addEventListener('click', () => {
            navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
            navList.style.flexDirection = 'column';
            navList.style.position = 'absolute';
            navList.style.top = '70px';
            navList.style.right = '20px';
            navList.style.background = 'rgba(10, 10, 14, 0.95)';
            navList.style.padding = '20px';
            navList.style.borderRadius = '12px';
            navList.style.border = '1px solid rgba(255, 255, 255, 0.1)';
            navList.style.backdropFilter = 'blur(10px)';
            navList.style.minWidth = '200px';
        });
        
        // Reset styles on resize
        window.addEventListener('resize', () => {
            if(window.innerWidth > 768) {
                navList.style.display = 'flex';
                navList.style.flexDirection = 'row';
                navList.style.position = 'static';
                navList.style.background = 'none';
                navList.style.border = 'none';
                navList.style.padding = '0';
            } else {
                navList.style.display = 'none';
            }
        });
    }

});
