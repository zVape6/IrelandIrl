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
            about: "Белфаст",
            descabout: "Столица Северной Ирландии: история, культура и современность",
            aboutcity: "О Белфасте",
            famous: "Белфаст — столица Северной Ирландии, город с богатым промышленным наследием и бурной историей. Здесь был построен легендарный 'Титаник', а сегодня город превратился в современный культурный центр. Архитектура Белфаста сочетает викторианскую элегантность с современными постройками. Город известен своими политическими муралами, рассказывающими сложную историю региона, и оживлённой атмосферой в районе площади Донегалл. Белфаст — это город контрастов, где прошлое встречается с настоящим, создавая уникальную городскую ткань.",
            best_places: "Лучшие места для посещения",
            sights1: "Исторические и архитектурные достопримечательности",
            place1: "Белфастский замок",
            desc1: "Величественный замок XIX века в шотландском баронском стиле с прекрасными видами на город.",
            place2: "Ратуша Белфаста",
            desc2: "Великолепное здание в стиле необарокко с богато украшенными интерьерами.",
            place3: "Титаник Белфаст",
            desc3: "Интерактивный музей, посвящённый истории строительства и гибели 'Титаника'.",
            sights2: "Культурные и исторические места",
            place4: "Политические муралы",
            desc4: "Уникальные уличные росписи, отражающие сложную историю Северной Ирландии.",
            place5: "Ольстерский музей",
            desc5: "Крупнейший музей Северной Ирландии с коллекциями искусства, истории и природы.",
            place6: "Паб Crown Liquor Saloon",
            desc6: "Легендарный викторианский паб с богатой историей и уникальными интерьерами.",
            sights3: "Парки и природа",
            place7: "Пещерный холм",
            desc7: "Живописный холм с пещерами и потрясающими видами на Белфаст.",
            place8: "Ботанические сады",
            desc8: "Прекрасные сады с пальмовой оранжереей и разнообразными растениями.",
            place9: "Набережная Лаган",
            desc9: "Популярное место для прогулок вдоль реки с современной архитектурой.",
        },
        en: {
            button: "Translate",
            about: "Belfast",
            descabout: "Capital of Northern Ireland: history, culture and modernity",
            aboutcity: "About Belfast",
            famous: "Belfast is the capital of Northern Ireland, a city with rich industrial heritage and turbulent history. The legendary Titanic was built here, and today the city has transformed into a modern cultural hub. Belfast's architecture combines Victorian elegance with contemporary buildings. The city is known for its political murals that tell the complex story of the region, and the lively atmosphere around Donegall Square. Belfast is a city of contrasts where past meets present, creating a unique urban fabric.",
            best_places: "Best places to visit",
            sights1: "Historical and architectural sights",
            place1: "Belfast Castle",
            desc1: "Majestic 19th century castle in Scottish baronial style with splendid city views.",
            place2: "Belfast City Hall",
            desc2: "Magnificent neo-baroque building with lavishly decorated interiors.",
            place3: "Titanic Belfast",
            desc3: "Interactive museum dedicated to the history of Titanic's construction and sinking.",
            sights2: "Cultural and historical places",
            place4: "Political Murals",
            desc4: "Unique street paintings reflecting Northern Ireland's complex history.",
            place5: "Ulster Museum",
            desc5: "Northern Ireland's largest museum with art, history and nature collections.",
            place6: "Crown Liquor Saloon",
            desc6: "Legendary Victorian pub with rich history and unique interiors.",
            sights3: "Parks and nature",
            place7: "Cave Hill",
            desc7: "Picturesque hill with caves and stunning views over Belfast.",
            place8: "Botanic Gardens",
            desc8: "Beautiful gardens with a palm house and diverse plant collections.",
            place9: "Lagan Towpath",
            desc9: "Popular riverside walk with contemporary architecture.",
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