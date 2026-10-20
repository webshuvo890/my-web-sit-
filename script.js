/**
 * BEright Automations - Configuration & Interactive Logic
 * Portfolio Owner: Subrata Mondal
 */

// ==========================================
// 1. CONFIGURABLE URLS & DATA SECTION
// ==========================================
const SITE_CONFIG = {
    // Quick Links URLs (Replace with your actual URLs)
    githubProfileUrl: "YOUR_GITHUB_PROFILE_URL",
    hostedWebsiteUrl: "YOUR_HOSTED_WEBSITE_URL",
    chatbotUrl: "YOUR_CHATBOT_URL",

    // Floating Action Buttons URLs
    whatsappUrl: "YOUR_WHATSAPP_URL",
    emailAddress: "YOUR_EMAIL_ADDRESS", // e.g. mailto:your-email@example.com
    registrationFormUrl: "YOUR_REGISTRATION_FORM_URL"
};

// Eight Colorful Service Cards Data
const SERVICES_DATA = [
    {
        title: "Google Sheets & Apps Script",
        description: "Workflow automation, data synchronization, reports, forms, and spreadsheet-based business tools.",
        icon: "📊",
        accentColor: "var(--neon-cyan)",
        glowColor: "rgba(0, 243, 255, 0.3)",
        url: "" // Leave empty for "Coming Soon" or add your service URL
    },
    {
        title: "Webhook Integration",
        description: "Connect applications, APIs, and automated workflows seamlessly in real time.",
        icon: "🔗",
        accentColor: "var(--neon-blue)",
        glowColor: "rgba(0, 102, 255, 0.3)",
        url: ""
    },
    {
        title: "CRM & Customer Management",
        description: "Customer records, lead tracking, employee information, and interactive business dashboards.",
        icon: "👥",
        accentColor: "var(--neon-purple)",
        glowColor: "rgba(157, 0, 255, 0.3)",
        url: ""
    },
    {
        title: "AI Chatbot Development",
        description: "Intelligent chatbots for customer support, FAQs, lead collection, and business workflows.",
        icon: "🤖",
        accentColor: "var(--neon-magenta)",
        glowColor: "rgba(255, 0, 127, 0.3)",
        url: ""
    },
    {
        title: "Website Development",
        description: "Modern, responsive, high-performance websites for businesses and personal brands.",
        icon: "💻",
        accentColor: "var(--neon-green)",
        glowColor: "rgba(0, 255, 102, 0.3)",
        url: ""
    },
    {
        title: "AI-Assisted Coding",
        description: "Build, debug, and improve digital solutions efficiently with AI-assisted coding tools.",
        icon: "⚡",
        accentColor: "var(--neon-gold)",
        glowColor: "rgba(255, 183, 0, 0.3)",
        url: ""
    },
    {
        title: "Web Application Development",
        description: "Interactive, scalable web applications tailored for practical business needs.",
        icon: "🚀",
        accentColor: "var(--neon-cyan)",
        glowColor: "rgba(0, 243, 255, 0.3)",
        url: ""
    },
    {
        title: "Integration Solutions",
        description: "Connect websites, forms, spreadsheets, APIs, and third-party services into a unified system.",
        icon: "⚙️",
        accentColor: "var(--neon-blue)",
        glowColor: "rgba(0, 102, 255, 0.3)",
        url: ""
    }
];

// Technical Skills List
const SKILLS_DATA = [
    "Google Sheets",
    "Google Apps Script",
    "HTML5",
    "CSS3",
    "JavaScript",
    "REST APIs",
    "Webhooks",
    "CRM Workflows",
    "AI-Assisted Development",
    "Responsive Web Design",
    "Third-Party Integrations"
];

// Projects Data (10 Editable Sample Projects)
const PROJECTS_DATA = [
    {
        title: "Automated Lead CRM & Sheet Sync",
        description: "A Google Sheets and Apps Script automation tool that captures web form entries, verifies emails, and updates CRM logs automatically.",
        tech: ["Google Sheets", "Apps Script", "JavaScript"],
        githubUrl: "#",
        liveUrl: "#",
        imageText: "CRM & Apps Script"
    },
    {
        title: "Webhook Event Relay System",
        description: "Lightweight middleware service to route incoming webhook payloads from payment gateways to custom notification channels.",
        tech: ["Node.js", "Webhooks", "REST APIs"],
        githubUrl: "#",
        liveUrl: "#",
        imageText: "Webhook Integration"
    },
    {
        title: "AI Customer Support Chatbot",
        description: "Conversational assistant configured to answer FAQs, log support tickets, and collect qualified leads 24/7.",
        tech: ["AI Solutions", "JavaScript", "Chatbot API"],
        githubUrl: "#",
        liveUrl: "#",
        imageText: "AI Chatbot"
    },
    {
        title: "Business Dashboard Web App",
        description: "Interactive analytics dashboard displaying real-time business metrics pulled directly from connected spreadsheets and APIs.",
        tech: ["HTML5", "CSS3", "JavaScript", "APIs"],
        githubUrl: "#",
        liveUrl: "#",
        imageText: "Web Dashboard"
    },
    {
        title: "Automated Invoice Generator",
        description: "Google Sheets tool that auto-generates professional PDF invoices and emails them to clients upon status update.",
        tech: ["Google Apps Script", "PDF API", "Gmail API"],
        githubUrl: "#",
        liveUrl: "#",
        imageText: "Invoice Automation"
    },
    {
        title: "Multi-Platform Form Connector",
        description: "Universal form handler connecting third-party contact forms with Slack, Telegram, and Google Sheets simultaneously.",
        tech: ["Webhooks", "REST APIs", "JavaScript"],
        githubUrl: "#",
        liveUrl: "#",
        imageText: "Form Connector"
    },
    {
        title: "Inventory & Stock Tracker",
        description: "Dynamic inventory management system with low-stock email alerts and automated reordering workflows.",
        tech: ["Google Sheets", "Apps Script", "Automation"],
        githubUrl: "#",
        liveUrl: "#",
        imageText: "Inventory Tracker"
    },
    {
        title: "Portfolio & Brand Website",
        description: "Modern, responsive portfolio website built with futuristic cyberpunk aesthetics and optimized performance.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        githubUrl: "#",
        liveUrl: "#",
        imageText: "Web Development"
    },
    {
        title: "API Data Synchronizer",
        description: "Scheduled script that fetches data from external REST APIs, processes records, and updates master databases cleanly.",
        tech: ["JavaScript", "REST APIs", "JSON"],
        githubUrl: "#",
        liveUrl: "#",
        imageText: "API Integrations"
    },
    {
        title: "Task Reminder Automation",
        description: "Automated notification bot that scans project deadlines in spreadsheets and sends timely reminders via messaging apps.",
        tech: ["Apps Script", "Chat Integration"],
        githubUrl: "#",
        liveUrl: "#",
        imageText: "Task Automation"
    }
];

// ==========================================
// 2. DOM RENDERING & INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    renderQuickLinks();
    renderServices();
    renderSkills();
    renderProjects();
    initContactForm();
    initFooterYear();
    initFloatingButtons();
});

// Mobile Navigation Toggle
function initNavigation() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
}

// Render Quick Links Panel
function renderQuickLinks() {
    const grid = document.getElementById("quickLinksGrid");
    const links = [
        {
            title: "My GitHub Portfolio",
            icon: "📂",
            url: SITE_CONFIG.githubProfileUrl
        },
        {
            title: "My Website",
            icon: "🌐",
            url: SITE_CONFIG.hostedWebsiteUrl
        },
        {
            title: "My Chatbot",
            icon: "🤖",
            url: SITE_CONFIG.chatbotUrl
        }
    ];

    grid.innerHTML = links.map(item => {
        const isConfigured = item.url && !item.url.startsWith("YOUR_");
        const href = isConfigured ? item.url : "#";
        const target = isConfigured ? 'target="_blank" rel="noopener noreferrer"' : '';
        const statusClass = isConfigured ? "configured" : "";
        const statusText = isConfigured ? "Connected" : "Project Coming Soon";

        return `
            <a href="${href}" ${target} class="quick-link-card" onclick="${!isConfigured ? "alert('This link URL has not been configured yet.'); return false;" : ""}">
                <div class="quick-link-info">
                    <span class="quick-link-icon">${item.icon}</span>
                    <span class="quick-link-title">${item.title}</span>
                </div>
                <span class="quick-link-status ${statusClass}">${statusText}</span>
            </a>
        `;
    }).join("");
}

// Render 8 Service Cards
function renderServices() {
    const grid = document.getElementById("servicesGrid");

    grid.innerHTML = SERVICES_DATA.map(service => {
        const isConfigured = service.url && !service.url.startsWith("YOUR_");
        const actionHtml = isConfigured 
            ? `<a href="${service.url}" target="_blank" rel="noopener noreferrer" class="service-btn">Explore ➔</a>` 
            : `<span class="service-coming-soon">Project Coming Soon</span>`;

        return `
            <div class="service-card" style="--card-accent: ${service.accentColor}; --card-glow: ${service.glowColor};">
                <div>
                    <div class="service-icon-wrap">${service.icon}</div>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>
                <div class="service-footer">
                    ${actionHtml}
                </div>
            </div>
        `;
    }).join("");
}

// Render Skills
function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    grid.innerHTML = SKILLS_DATA.map(skill => `
        <span class="skill-tag">${skill}</span>
    `).join("");
}

// Render Projects
function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    grid.innerHTML = PROJECTS_DATA.map(project => `
        <div class="project-card">
            <div class="project-image-placeholder">
                <span>${project.imageText}</span>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}
                </div>
                <div class="project-links">
                    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">GitHub ↗</a>
                    <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">Live Demo ↗</a>
                </div>
            </div>
        </div>
    `).join("");
}

// Contact Form Handler
function initContactForm() {
    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            feedback.className = "form-feedback error";
            feedback.textContent = "Please fill in all required fields.";
            return;
        }

        // Note: Frontend form simulation. To send real messages, connect a backend or Google Apps Script Web App endpoint.
        feedback.className = "form-feedback success";
        feedback.textContent = "Thank you! Your message has been prepared. (Note: Connect a backend endpoint or Google Apps Script to deliver messages automatically).";
        form.reset();
    });
}

// Footer Copyright Year
function initFooterYear() {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
}

// Floating Action Buttons Config
function initFloatingButtons() {
    const wa = document.getElementById("fabWhatsApp");
    const gm = document.getElementById("fabGmail");
    const reg = document.getElementById("fabReg");

    // WhatsApp
    if (SITE_CONFIG.whatsappUrl && !SITE_CONFIG.whatsappUrl.startsWith("YOUR_")) {
        wa.href = SITE_CONFIG.whatsappUrl;
    } else {
        wa.addEventListener("click", (e) => {
            e.preventDefault();
            alert("WhatsApp URL has not been configured yet.");
        });
    }

    // Gmail
    if (SITE_CONFIG.emailAddress && !SITE_CONFIG.emailAddress.startsWith("YOUR_")) {
        gm.href = SITE_CONFIG.emailAddress.startsWith("mailto:") ? SITE_CONFIG.emailAddress : `mailto:${SITE_CONFIG.emailAddress}`;
    } else {
        gm.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Email address has not been configured yet.");
        });
    }

    // Registration Form
    if (SITE_CONFIG.registrationFormUrl && !SITE_CONFIG.registrationFormUrl.startsWith("YOUR_")) {
        reg.href = SITE_CONFIG.registrationFormUrl;
    } else {
        reg.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Registration form URL has not been configured yet.");
        });
    }
}