const translations = {
    en: { "Register":"Register", "Login":"Login", "Blog":"Blog", "Contact Us":"Contact Us", "About Us":"About Us", "Welcome to PointVerite, it's under construction...":"Welcome to PointVerite, it's under construction..." },
    fr: { "Register":"S'inscrire", "Login":"Connexion", "Blog":"Blog", "Contact Us":"Contactez-nous", "About Us":"À propos", "Welcome to PointVerite, it's under construction...":"Bienvenue à PointVerite, en construction..." },
    geo: { "Register":"რეგისტრაცია", "Login":"შესვლა", "Blog":"ბლოგი", "Contact Us":"კონტაქტი", "About Us":"ჩვენს შესახებ", "Welcome to PointVerite, it's under construction...":"კეთილი იყოს თქვენი მობრძანება PointVerite-ში, მიმდინარე ეტაპზეა..." }
};

let currentLang = localStorage.getItem("siteLang") || "en";

function setLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    currentLang = lang;
    localStorage.setItem("siteLang", lang);
    highlightSelectedLang(lang);
}

function highlightSelectedLang(lang) {
    document.querySelectorAll(".img1").forEach(icon => {
        if (icon.getAttribute("data-lang") === lang) {
            icon.style.border = "2px solid #000";
            icon.style.borderRadius = "5px";
        } else {
            icon.style.border = "none";
        }
    });
}

document.querySelectorAll(".img1").forEach(icon => {
    icon.addEventListener("click", (e) => {
        e.preventDefault();
        const lang = icon.getAttribute("data-lang");
        setLanguage(lang);
    });
});

document.querySelectorAll(".li1 a").forEach(link => {
    link.addEventListener("click", e => e.preventDefault());
});

setLanguage(currentLang);
