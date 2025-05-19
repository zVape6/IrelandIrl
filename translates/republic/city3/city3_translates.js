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
        about: "Голуэй",
        descabout: "Путешествия, развлечения и отдых в Голуэе",
        aboutcity: "О Голуэе",
        famous: "Голуэй — город с очаровательной атмосферой и богатым культурным наследием. Он славится своими уличными музыкантами, фестивалями, уютными пабами и прибрежными пейзажами. Здесь легко почувствовать дух настоящей Ирландии — в средневековых улочках, набережной Салтай и на островах Аран. Голуэй вдохновляет художников и путешественников со всего мира.",
        sights1: "Исторические и архитектурные достопримечательности",
        place1: "Испанская арка",
        desc1: "Остаток старых городских укреплений на набережной Голуэя.",
        place2: "Собор Вознесения Пресвятой Девы Марии",
        desc2: "Величественный собор с куполом и витражами, построен в XX веке.",
        place3: "Церковь Святого Николая",
        desc3: "Самая старая действующая церковь Ирландии с готической архитектурой.",
    
        sights2: "Культурные и литературные места",
        place4: "Голуэйский городской музей",
        desc4: "Экспозиции об истории города, культуре и археологических находках.",
        place5: "Театр \"Друид\"",
        desc5: "Известная труппа, специализирующаяся на современной ирландской драме.",
        place6: "Дом-музей Норы Барнкл",
        desc6: "Дом жены Джеймса Джойса, посвящённый её жизни и эпохе.",
    
        sights3: "Парки и природа",
        place7: "Променад Салтай-Хилл",
        desc7: "Прогулочная набережная с видом на Атлантику и галечный пляж.",
        place8: "Парк Мерлин Вудс",
        desc8: "Зелёная зона с лесными тропами, пикниками и дикой природой.",
        place9: "Острова Аран",
        desc9: "Три живописных острова с кельтскими руинами и каменными фермами."
    },
    en: {
        button: "Translate",
        about: "Golway",
        descabout: "Travel, entertainment and recreation in Golway",
        aboutcity: "About Golway",
        famous: "Galway is a city full of charm and rich cultural heritage. It's known for its street performers, festivals, cozy pubs, and scenic coastline. You can feel the spirit of real Ireland in its medieval lanes, Salthill Promenade, and the Aran Islands. Galway inspires artists and travelers from around the world.",
        sights1: "Historical and architectural sights",
        place1: "Spanish Arch",
        desc1: "Remains of old city walls along Galway’s waterfront.",
        place2: "Galway Cathedral",
        desc2: "Majestic cathedral with dome and stained glass, built in 20th century.",
        place3: "St. Nicholas' Collegiate Church",
        desc3: "Ireland’s oldest functioning church with Gothic architectural features.",
    
        sights2: "Cultural and literary places",
        place4: "Galway City Museum",
        desc4: "Exhibitions on local history, culture and archaeological finds.",
        place5: "Druid Theatre",
        desc5: "Renowned troupe specializing in contemporary Irish drama.",
        place6: "Nora Barnacle House",
        desc6: "Home of Joyce’s wife, dedicated to her life and era.",
    
        sights3: "Parks and nature",
        place7: "Salthill Promenade",
        desc7: "Seaside walkway with Atlantic views and a pebble beach.",
        place8: "Merlin Woods Park",
        desc8: "Green area with forest trails, picnics and wildlife.",
        place9: "Aran Islands",
        desc9: "Three scenic islands with Celtic ruins and stone farms.",
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