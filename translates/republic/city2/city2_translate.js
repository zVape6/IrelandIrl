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
const aboutcity = document.getElementById('aboutcity');
const famous = document.getElementById('famous');
const translateButton = document.getElementById('translateButton');

const texts = {
    ru: {
        button: "Перевод",
        about: "Дублин",
        descabout: "Путешествия, развлечения и отдых в Дублине",
        aboutcity: "О Дублине",
        famous: "Дублин — город, где история и современность переплетаются на каждом углу. Прогуливаясь по мощёным улочкам, вы встретите старинные пабы, в которых когда-то сидели Джойс и Уайльд, и современные арт-пространства. Сердце города — река Лиффи, через которую перекинуты живописные мосты. Вечером район Темпл-Бар очарует живой музыкой и атмосферой настоящего ирландского веселья. Дублин — город, который запомнится надолго!",
        sights1: "Исторические и архитектурные достопримечательности",
        place1: "Дублинский замок",
        desc1: "Средневековая крепость, резиденция власти, сейчас — музей и культурный центр.",
        place2: "Тюрьма Килмэйнхем",
        desc2: "Тюрьма Килмэйнхем - мрачный символ ирландской истории, построенный в 1796 году.",
        place3: "Собор Христа",
        desc3: "Древний храм с потрясающей архитектурой и викторианскими сводами.",
        sights2: "Культурные и литературные места",
        place4: "Темпл-Бар",
        desc4: "Шумный район с пабами, музыкой и яркой ночной жизнью.",
        place5: "Библиотека Честера Битти",
        desc5: "Сокровищница редких книг и восточных манускриптов.",
        place6: "Музей Гиннесс",
        desc6: "Знаменитая пивоварня с дегустацией и панорамным видом.",
        sights3: "Парки и природа",
        place7: "Феникс-парк",
        desc7: "Огромный зелёный оазис с оленями и монументами.",
        place8: "Сад воспоминаний",
        desc8: "Тихий уголок, посвящённый жертвам борьбы за свободу.",
        place9: "Гранд Канал Док",
        desc9: "Элегантная гавань с кафе, мостами и современной архитектурой.",
    },
    en: {
        button: "Translate",
        about: "Dublin",
        descabout: "Travel, entertainment and recreation in Dublin",
        aboutcity: "About Dublin",
        famous: "Dublin is a city where history and modernity intertwine at every corner. Strolling along the cobbled streets, you'll find old pubs where Joyce and Wilde once sat, and modern art spaces. The heart of the city is the River Liffey, which is crossed by picturesque bridges. In the evening, the Temple Bar area will enchant with live music and an atmosphere of real Irish fun. Dublin is a city to remember for a long time!",
        sights1: "Historical and architectural sights",
        place1: "Dublin's castle",
        desc1: "Medieval fortress, seat of power, now a museum and cultural center.",
        place2: "Kilmainham Prison",
        desc2: "Kilmainham Prison is a grim symbol of Irish history, built in 1796.",
        place3: "Christ Church Cathedral",
        desc3: "An ancient temple with stunning architecture and Victorian vaults.",
        sights2: "Cultural and literary places",
        place4: "Temple Bar",
        desc4: "A bustling neighborhood with pubs, music and a vibrant nightlife.",
        place5: "Chester Beatty Library",
        desc5: "A treasure trove of rare books and oriental manuscripts.",
        place6: "Guinness Museum",
        desc6: "Famous brewery with tasting and panoramic views.",
        sights3: "Parks and nature",
        place7: "Phoenix Park",
        desc7: "A huge green oasis with deer and monuments.",
        place8: "Garden of Memories",
        desc8: "A quiet corner dedicated to the victims of the freedom struggle.",
        place9: "Grand Canal Dock",
        desc9: "An elegant harbor with cafes, bridges and modern architecture.",
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