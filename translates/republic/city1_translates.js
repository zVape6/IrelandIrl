document.addEventListener('DOMContentLoaded', () => {
const desc1 = document.getElementById('desc1');
const desc2 = document.getElementById('desc2');
const desc3 = document.getElementById('desc3');
const desc4 = document.getElementById('desc4');
const desc5 = document.getElementById('desc5');
const desc6 = document.getElementById('desc6');
const desc7 = document.getElementById('desc7');
const desc8 = document.getElementById('desc8');
const desc9 = document.getElementById('desc9');
const sights1 = document.getElementById('sights1');
const sights2 = document.getElementById('sights2');
const sights3 = document.getElementById('sights3');
const place1 = document.getElementById('place1');
const place2 = document.getElementById('place2');
const place3 = document.getElementById('place3');
const place4 = document.getElementById('place4');
const place5 = document.getElementById('place5');
const place6 = document.getElementById('place6');
const place7 = document.getElementById('place7');
const place8 = document.getElementById('place8');
const place9 = document.getElementById('place9');
const about = document.getElementById('about');
const descabout = document.getElementById('descabout');
const best_places = document.getElementById('best_places');
const aboutcity = document.getElementById('aboutcity');
const famous = document.getElementById('famous');
const translateButton = document.getElementById('translateButton');

const texts = {
    ru: {
        button: "Перевод",
        about: "Дублин",
        descabout: "Путешествия, развлечения и отдых в Дублине",
        aboutcity: "О Дублине",
        famous: "Тут должно быть пару слов про сам город + чем он славится",
        best_places: "Лучшие места для посещения",
        sights1: "Исторические и архитектурные достопримечательности",
        place1: "Дублинский замок",
        desc1: "Средневековая крепость, резиденция власти, сейчас — музей и культурный центр.",
        place2: "Тюрьма Килмэйнхем",
        desc2: "очень краткое описание",
        place3: "Собор Христа",
        desc3: "очень краткое описание",
        sights2: "Культурные и литературные места",
        place4: "Темпл-Бар",
        desc4: "очень краткое описание",
        place5: "Библиотека Честера Битти",
        desc5: "очень краткое описание",
        place6: "Музей Гиннесс",
        desc6: "очень краткое описание",
        sights3: "Парки и природа",
        place7: "Феникс-парк",
        desc7: "очень краткое описание",
        place8: "Сад воспоминаний",
        desc8: "очень краткое описание",
        place9: "Гранд Канал Док",
        desc9: "очень краткое описание",
    },
    en: {
        button: "Translate",
        about: "Dublin",
        descabout: "Travel, entertainment and recreation in Dublin",
        aboutcity: "About Dublin",
        famous: "There should be a word or two about the city itself + what it's famous for",
        best_places: "Best places to visit",
        sights1: "Historical and architectural sights",
        place1: "Dublin's castle",
        desc1: "Medieval fortress, seat of power, now a museum and cultural center.",
        place2: "Kilmainham Prison",
        desc2: "очень краткое описание",
        place3: "Christ Church Cathedral",
        desc3: "очень краткое описание",
        sights2: "Cultural and literary places",
        place4: "Temple Bar",
        desc4: "очень краткое описание",
        place5: "Chester Beatty Library",
        desc5: "очень краткое описание",
        place6: "Guinness Museum",
        desc6: "очень краткое описание",
        sights3: "Parks and nature",
        place7: "Phoenix Park",
        desc7: "очень краткое описание",
        place8: "Garden of Memories",
        desc8: "очень краткое описание",
        place9: "Grand Canal Dock",
        desc9: "очень краткое описание",
    },
};

let currentLanguage = localStorage.getItem('language') || 'ru';


function translate() {
    if (currentLanguage === 'ru') {
        currentLanguage = 'en';
    } else {
        currentLanguage = 'ru';
    }

    translateButton.textContent = texts[currentLanguage].button;
    about.textContent = texts[currentLanguage].about;
    aboutcity.textContent = texts[currentLanguage].aboutcity;
    descabout.textContent = texts[currentLanguage].descabout;
    famous.textContent = texts[currentLanguage].famous;
    best_places.textContent = texts[currentLanguage].best_places;
    sights1.textContent = texts[currentLanguage].sights1;
    sights2.textContent = texts[currentLanguage].sights2;
    sights3.textContent = texts[currentLanguage].sights3;
    place1.textContent = texts[currentLanguage].place1;
    place2.textContent = texts[currentLanguage].place2;
    place3.textContent = texts[currentLanguage].place3;
    place4.textContent = texts[currentLanguage].place4;
    place5.textContent = texts[currentLanguage].place5;
    place6.textContent = texts[currentLanguage].place6;
    place7.textContent = texts[currentLanguage].place7;
    place8.textContent = texts[currentLanguage].place8;
    place9.textContent = texts[currentLanguage].place9;
    desc1.textContent = texts[currentLanguage].desc1;
    desc2.textContent = texts[currentLanguage].desc2;
    desc3.textContent = texts[currentLanguage].desc3;
    desc4.textContent = texts[currentLanguage].desc4;
    desc5.textContent = texts[currentLanguage].desc5;
    desc6.textContent = texts[currentLanguage].desc6;
    desc7.textContent = texts[currentLanguage].desc7;
    desc8.textContent = texts[currentLanguage].desc8;
    desc9.textContent = texts[currentLanguage].desc9;


    localStorage.setItem('language', currentLanguage);
}

if (translateButton) {
    translateButton.addEventListener('click', () => {
        translate();
    });
}
});