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
            about: "Арма",
            descabout: "Духовная столица Ирландии с древней историей",
            aboutcity: "Об Арме",
            famous: "Арма — один из древнейших городов Ирландии, известный как духовная столица страны. Основанный святым Патриком в V веке, город стал важным религиозным и образовательным центром. Сегодня Арма — это город двух соборов (католического и протестантского), носящих имя святого Патрика, и место, где история ощущается на каждом шагу. Уютные улицы города украшены георгианской архитектурой, а в окрестностях можно найти древние монастырские руины и святые источники. Арма сочетает в себе спокойствие провинциального городка с богатым культурным наследием, делая его уникальным местом для посещения.",
            best_places: "Лучшие места для посещения",
            sights1: "Исторические и религиозные достопримечательности",
            place1: "Кафедральный собор Армы",
            desc1: "Главный католический собор города, построенный в XIX веке в неоготическом стиле.",
            place2: "Собор Святого Патрика",
            desc2: "Англиканский собор, стоящий на месте основанной святым Патриком церкви.",
            place3: "Крепость Наван",
            desc3: "Древнее культовое место, связанное с мифами и легендами Ирландии.",
            sights2: "Культурные и образовательные места",
            place4: "Армагская обсерватория",
            desc4: "Одна из старейших обсерваторий в мире с планетарием.",
            place5: "Музей округа Арма",
            desc5: "Музей с коллекциями по истории, археологии и искусству региона.",
            place6: "Библиотека Робинсона",
            desc6: "Историческая библиотека с редкими книгами и рукописями.",
            sights3: "Парки и природа",
            place7: "Парк Palace Demesne",
            desc7: "Живописный парк с озёрами, садами и резиденцией архиепископа.",
            place8: "Лес Госфорд",
            desc8: "Красивый лесной парк с пешеходными маршрутами и замком.",
            place9: "Народный парк",
            desc9: "Уютный городской парк с детскими площадками и зонами отдыха.",
        },
        en: {
            button: "Translate",
            about: "Armagh",
            descabout: "Spiritual capital of Ireland with ancient history",
            aboutcity: "About Armagh",
            famous: "Armagh is one of Ireland's oldest cities, known as the spiritual capital of the country. Founded by St. Patrick in the 5th century, the city became an important religious and educational center. Today Armagh is a city of two cathedrals (Catholic and Protestant) both named after St. Patrick, and a place where history is felt at every step. The cozy streets are adorned with Georgian architecture, while ancient monastic ruins and holy wells can be found in the surrounding area. Armagh combines the tranquility of a provincial town with rich cultural heritage, making it a unique place to visit.",
            best_places: "Best places to visit",
            sights1: "Historical and religious sights",
            place1: "Armagh Cathedral",
            desc1: "The city's main Catholic cathedral, built in the 19th century in neo-Gothic style.",
            place2: "St Patrick's Cathedral",
            desc2: "Anglican cathedral standing on the site of a church founded by St. Patrick.",
            place3: "Navan Fort",
            desc3: "Ancient ceremonial site associated with Irish myths and legends.",
            sights2: "Cultural and educational places",
            place4: "Armagh Observatory",
            desc4: "One of the world's oldest observatories with a planetarium.",
            place5: "Armagh County Museum",
            desc5: "Museum with collections on regional history, archaeology and art.",
            place6: "Robinson Library",
            desc6: "Historic library with rare books and manuscripts.",
            sights3: "Parks and nature",
            place7: "Palace Demesne Park",
            desc7: "Picturesque park with lakes, gardens and the Archbishop's residence.",
            place8: "Gosford Forest Park",
            desc8: "Beautiful forest park with walking trails and a castle.",
            place9: "People's Park",
            desc9: "Cozy city park with playgrounds and relaxation areas.",
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