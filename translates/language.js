document.addEventListener('DOMContentLoaded', () => {
const title = document.getElementById('top');
const country = document.getElementById('country');
const desc1 = document.getElementById('desc1');
const translateButton = document.getElementById('translateButton');
const northern = document.getElementById('northern');
const republic = document.getElementById('republic');
const topmest = document.getElementById('topmest');

const texts = {
    ru: {
        top: "Добро пожаловать в путеводитель по Ирландии!",
        country: "Ирландия",
        desc1: "Ирландия — страна, где древние легенды оживают среди изумрудных холмов. Её берега омывает свинцовый Атлантический океан, а в туманных долинах прячутся руины кельтских монастырей. В пабах Дублина под звуки скрипки рассказывают истории о феях и воинах, а на скалах Мохер ветер поёт песни времён викингов. Здесь каждый камень помнит бурную историю: кельтские короли, английские завоеватели, мятежи и возрождение. Но главное в Ирландии — её дух: тёплый, как стакан виски, и стойкий, как тысячелетние кресты на кладбищах.",
        button: "Перевод",
        northern: "Северная Ирландия",
        republic: "Республика Ирландия",
        topmest: "Топ мест, которые вам надо посетить"
    },
    en: {
        top: "Welcome to the guide to Ireland!",
        country: "Ireland",
        desc1: "Ireland is a country where ancient legends come to life among emerald hills. Its shores are washed by the leaden Atlantic Ocean, and in the misty valleys hide the ruins of Celtic monasteries. In Dublin's pubs, fiddle tales of fairies and warriors are told, and on the cliffs of Moher the wind sings songs from Viking times. Here every stone remembers a turbulent history: Celtic kings, English conquerors, rebellions and rebirth. But the main thing about Ireland is its spirit: as warm as a glass of whisky and as enduring as the thousand-year-old crosses in the cemeteries.",
        button: "Translate",
        northern: "Northern Ireland",
        republic: "Republic of Ireland",
        topmest: "Top places you need to visit"
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
    northern.textContent = texts[currentLanguage].northern;
    republic.textContent = texts[currentLanguage].republic;
    topmest.textContent = texts[currentLanguage].topmest;
    localStorage.setItem('language', currentLanguage);
}

if (translateButton) {
    translateButton.addEventListener('click', () => {
        translate();
    });
}
});