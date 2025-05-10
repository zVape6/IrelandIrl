document.addEventListener('DOMContentLoaded', () => {
const title = document.getElementById('top');
const country = document.getElementById('country');
const desc1 = document.getElementById('desc1');
const translateButton = document.getElementById('translateButton');

const texts = {
    ru: {
        top: "Добро пожаловать в путеводитель по Ирландии!",
        country: "Ирландия",
        desc1: "описание1",
        button: "Перевести на английский"
    },
    en: {
        top: "Welcome to the guide to Ireland!",
        country: "Ireland",
        desc1: "description1",
        button: "Translate to Russian"
    },
};

let currentLanguage = localStorage.getItem('language') || 'ru';


function translate() {
    if (currentLanguage === 'ru') {
        currentLanguage = 'en';
    } else {
        currentLanguage = 'ru';
    }

    title.textContent = texts[currentLanguage].top;
    country.textContent = texts[currentLanguage].country;
    desc1.textContent = texts[currentLanguage].desc1;
    translateButton.textContent = texts[currentLanguage].button;
    localStorage.setItem('language', currentLanguage);
}

if (translateButton) {
    translateButton.addEventListener('click', () => {
        translate();
    });
}
});