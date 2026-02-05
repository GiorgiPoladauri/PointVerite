// index.js

// Translations for all three languages
const translations = {
    en: {
        "Register": "Register",
        "Login": "Login",
        "Blog": "Blog",
        "Contact Us": "Contact Us",
        "About Us": "About Us",
        "Welcome to PointVerite, it's under construction...": "Welcome to PointVerite, it's under construction..."
    },
    fr: {
        "Register": "S'inscrire",
        "Login": "Connexion",
        "Blog": "Blog",
        "Contact Us": "Contactez-nous",
        "About Us": "À propos",
        "Welcome to PointVerite, it's under construction...": "Bienvenue à PointVerite, en construction..."
    },
    geo: {
        "Register": "რეგისტრაცია",
        "Login": "შესვლა",
        "Blog": "ბლოგი",
        "Contact Us": "კონტაქტი",
        "About Us": "ჩვენს შესახებ",
        "Welcome to PointVerite, it's under construction...": "კეთილი იყოს თქვენი მობრძანება PointVerite-ში, მიმდინარე ეტაპზეა..."
    }
};

// Current language
let currentLang = "en";

// Update all elements with data-key
function setLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    currentLang = lang;
    highlightSelectedLang(lang);
}

// Add click listeners to all flag icons
document.querySelectorAll(".lang-icon").forEach(icon => {
    icon.addEventListener("click", () => {
        const lang = icon.getAttribute("data-lang");
        setLanguage(lang);
    });
});

// Optional: highlight selected language
function highlightSelectedLang(lang) {
    document.querySelectorAll(".lang-icon").forEach(icon => {
        if (icon.getAttribute("data-lang") === lang) {
            icon.style.border = "2px solid #000";
            icon.style.borderRadius = "5px";
        } else {
            icon.style.border = "none";
        }
    });
}

// Set initial highlight
highlightSelectedLang(currentLang);
