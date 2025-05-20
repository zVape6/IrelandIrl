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
            about: "Дерри",
            descabout: "Город-крепость с богатой историей и культурным наследием",
            aboutcity: "О Дерри",
            famous: "Дерри (или Лондондерри) — единственный полностью сохранившийся укреплённый город в Ирландии, окружённый впечатляющими стенами XVII века. Город известен своей сложной историей, включая осаду 1689 года и события 'Кровавого воскресенья'. Сегодня Дерри — это оживлённый культурный центр с яркой художественной сценой и музыкальной традицией. Мост Мира через реку Фойл стал символом примирения, а район Богсайд с его политическими муралами рассказывает историю конфликта. Дерри — город, где прошлое и настоящее переплетаются, создавая уникальную атмосферу.",
            best_places: "Лучшие места для посещения",
            sights1: "Исторические и архитектурные достопримечательности",
            place1: "Стены Дерри",
            desc1: "Лучше всего сохранившиеся городские стены в Европе длиной 1.5 км с бастионами.",
            place2: "Гилдхолл",
            desc2: "Величественное неоготическое здание с витражами, рассказывающими историю города.",
            place3: "Мост Мира",
            desc3: "Современный пешеходный мост, символ примирения между общинами.",
            sights2: "Культурные и исторические места",
            place4: "Богсайд",
            desc4: "Район с известными муралами и памятниками, связанными с конфликтом.",
            place5: "Музей Тауэр",
            desc5: "Музей с экспозициями по истории Дерри и испанской армады.",
            place6: "Центр Verbal Arts",
            desc6: "Центр литературного искусства с программами для писателей и читателей.",
            sights3: "Парки и природа",
            place7: "Собор Святого Колумба",
            desc7: "Величественный англиканский собор с богатой историей.",
            place8: "Парк Брук",
            desc8: "Живописный парк с садами, фонтанами и детскими площадками.",
            place9: "Железнодорожный музей Фойла",
            desc9: "Музей, посвящённый истории железных дорог в регионе.",
        },
        en: {
            button: "Translate",
            about: "Derry",
            descabout: "Walled city with rich history and cultural heritage",
            aboutcity: "About Derry",
            famous: "Derry (or Londonderry) is the only completely walled city in Ireland, surrounded by impressive 17th-century fortifications. The city is known for its complex history, including the 1689 Siege and Bloody Sunday events. Today Derry is a vibrant cultural hub with a thriving arts scene and musical tradition. The Peace Bridge across the River Foyle has become a symbol of reconciliation, while the Bogside area with its political murals tells the story of the conflict. Derry is a city where past and present intertwine, creating a unique atmosphere.",
            best_places: "Best places to visit",
            sights1: "Historical and architectural sights",
            place1: "Derry Walls",
            desc1: "The best preserved city walls in Europe, 1.5 km long with bastions.",
            place2: "Guildhall",
            desc2: "Majestic neo-Gothic building with stained glass telling the city's story.",
            place3: "Peace Bridge",
            desc3: "Modern pedestrian bridge, a symbol of reconciliation between communities.",
            sights2: "Cultural and historical places",
            place4: "Bogside",
            desc4: "Area with famous murals and monuments related to the conflict.",
            place5: "Tower Museum",
            desc5: "Museum with exhibitions on Derry's history and the Spanish Armada.",
            place6: "Verbal Arts Centre",
            desc6: "Literary arts center with programs for writers and readers.",
            sights3: "Parks and nature",
            place7: "St Columb's Cathedral",
            desc7: "Majestic Anglican cathedral with rich history.",
            place8: "Brooke Park",
            desc8: "Picturesque park with gardens, fountains and playgrounds.",
            place9: "Foyle Railway Museum",
            desc9: "Museum dedicated to the history of railways in the region.",
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