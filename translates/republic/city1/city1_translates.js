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
        about: "Вестпорт",
        descabout: "Путешествия, развлечения и отдых в Дублине",
        aboutcity: "О Вестпорте",
        famous: "Вестпорт — очаровательный городок, где старинная архитектура гармонично сочетается с современной жизнью. Прогуливаясь по его цветным улочкам, вы увидите уютные пабы, в которых когда-то бывали известные писатели и музыканты, и модные кафе с местным колоритом. Сердце города — река Карроубег, через которую перекинуты изящные мосты, отражающиеся в её спокойных водах. Вечером район Бридж-стрит оживает под звуки традиционной ирландской музыки, создавая атмосферу настоящего веселья. Вестпорт — город, который покорит вас своим уютом и останется в памяти навсегда!",
        best_places: "Лучшие места для посещения",
        sights1: "Исторические и архитектурные достопримечательности",
        place1: "Усадьба Вестпорт",
        desc1: "Средневековая крепость, резиденция власти, сейчас — музей и культурный центр.",
        place2: "Молл",
        desc2: "Живописная улица с деревьями и старинными зданиями.",
        place3: "Вестпортская набережна",
        desc3: "Очаровательная гавань с ресторанами и видами на воду.",
        sights2: "Культурные и литературные места",
        place4: "Паб Мэтта Моллоя",
        desc4: "Знаменитый паб с традиционной ирландской музыкой.",
        place5: "Фестиваль искусств Вестпорта",
        desc5: "Ежегодный фестиваль искусства, музыки и театра.",
        place6: "Святой источник Кэрроухолли",
        desc6: "Древний святой источник с духовной историей.",
        sights3: "Парки и природа",
        place7: "Гора Крох Патрик",
        desc7: "Святая гора для паломников и любителей природы.",
        place8: "Великая западная зелёная тропа",
        desc8: "Живописная велодорожка через природу.",
        place9: "Пляж Олд-Хед",
        desc9: "Песчаный пляж с чистой водой и дюнами.",
    },
    en: {
        button: "Translate",
        about: "Westport",
        descabout: "Travel, entertainment and recreation in Westport",
        aboutcity: "About Westport",
        famous: "Westport is a charming town where historic architecture harmoniously blends with modern life. Strolling along its colorful streets, you'll see cozy pubs once frequented by famous writers and musicians, and trendy cafes with local flair. The heart of the town is the Carrowbeg River, crossed by elegant bridges reflecting in its calm waters. In the evening, Bridge Street comes alive with traditional Irish music, creating a festive atmosphere. Westport is a town that will captivate you with its charm and stay in your memory forever!",
        best_places: "Best places to visit",
        sights1: "Historical and architectural sights",
        place1: "Westport House",
        desc1: "Medieval fortress, seat of power, now a museum and cultural center.",
        place2: "The Mall",
        desc2: "Picturesque street with trees and historic buildings.",
        place3: "Westport Quay",
        desc3: "Charming harbor with restaurants and waterfront views.",
        sights2: "Cultural and literary places",
        place4: "Matt Molloy’s Pub",
        desc4: "Famous pub with traditional Irish music.",
        place5: "Westport Arts Festival",
        desc5: "Annual festival of art, music, and theater.",
        place6: "Carrowholly Holy Well",
        desc6: "Ancient holy well with spiritual history.",
        sights3: "Parks and nature",
        place7: "Croagh Patrick",
        desc7: "Sacred mountain for pilgrims and nature lovers.",
        place8: "Great Western Greenway",
        desc8: "Scenic cycling trail through nature.",
        place9: "Old Head Beach",
        desc9: "Sandy beach with clear water and dunes.",
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