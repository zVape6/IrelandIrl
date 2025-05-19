// republic_translates.js
document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById('translateButton');
    const title = document.getElementById('title');
    const intro = document.getElementById('intro');
    const loc1 = document.getElementById('loc1');
    const best_time1 = document.getElementById('best_time1');
    const best_places1 = document.getElementById('best_places1');
    const loc2 = document.getElementById('loc2');
    const best_time2 = document.getElementById('best_time2');
    const best_places2 = document.getElementById('best_places2');
    const loc3 = document.getElementById('loc3');
        const best_time3 = document.getElementById('best_time3');
    const best_places3 = document.getElementById('best_places3');
    const learnMoreButtons = document.querySelectorAll('.btn[id="learn_more"]');

    const texts = {
        ru: {
            button: "Перевод",
            title: "Республика Ирландия",
            intro: "Республика Ирландия — изумрудный остров с богатой историей и живой культурой. Эта страна покоряет контрастами: древние замки соседствуют с небоскрёбами Дублина, а пабы с традиционной музыкой — с высокотехнологичными корпорациями. Главное сокровище Республики Ирландии — её природа. Климат переменчив, но именно дожди делают пейзажи такими зелёными. Столица, Дублин, — город парадоксов. Ирландцы — народ с горячим сердцем и острым языком. Они обожают рассказывать байки о лепреконах, гордятся своими нобелевскими лауреатами и безумно любят спорт — особенно гэльский футбол, где можно и мяч пинать, и руками играть. Поездка в Ирландию — это путешествие во времени. Главное — общаться с местными: их истории сделают поездку незабываемой. И помните: в Республике Ирландии нет плохой погоды — только неподходящая одежда!",
            loc1: "Вестпорт",
            best_time1: "Лучшее время для посещения: Май–сентябрь",
            best_places1: "Лучшие места: ярмарки, пляжи, водоёмы",
            loc2: "Дублин",
            best_time2: "Лучшее время для посещения: Июнь–август",
            best_places2: "Лучшие места: музеи, кафе, парки",
            loc3: "Голуэй",
            best_time3: "Лучшее время для посещения: Июнь–сентябрь",
            best_places3: "Лучшие места: парки, театры, выставки",
            learn_more: "Узнать больше"
        },
        en: {
            button: "Translate",
            title: "Republic of Ireland",
            intro: "The Republic of Ireland is an emerald island with a rich history and vibrant culture. This country captivates with its contrasts: ancient castles stand alongside Dublin's skyscrapers, and pubs with traditional music coexist with high-tech corporations. Ireland's greatest treasure is its nature. The climate is changeable, but it's the rains that make the landscapes so green. The capital, Dublin, is a city of paradoxes. The Irish are a people with warm hearts and sharp wit. They love telling tales about leprechauns, take pride in their Nobel laureates, and are passionate about sports—especially Gaelic football, where you can both kick the ball and use your hands. A trip to Ireland is a journey through time. The key is to talk to the locals—their stories will make your trip unforgettable. And remember: there's no bad weather in Ireland—only unsuitable clothing!",
            loc1: "Westport",
            best_time1: "Best time to visit: May–September",
            best_places1: "Top attractions: festivals, beaches, lakes",
            loc2: "Dublin",
            best_time2: "Best time to visit: June–August",
            best_places2: "Top attractions: museums, cafés, parks",
            loc3: "Galway",
            best_time3: "Best time to visit: June–September",
            best_places3: "Top attractions: parks, theaters, exhibitions",
            learn_more: "Learn more"
        }
    };

    let currentLanguage = localStorage.getItem('language') || 'ru';

    function translate() {
        if (currentLanguage === 'ru') {
            currentLanguage = 'en';
        } else {
            currentLanguage = 'ru';
        }

        translateButton.textContent = texts[currentLanguage].button;
        title.textContent = texts[currentLanguage].title;
        intro.textContent = texts[currentLanguage].intro;
        loc1.textContent = texts[currentLanguage].loc1;
        best_time1.textContent = texts[currentLanguage].best_time1;
        best_places1.textContent = texts[currentLanguage].best_places1;
        loc2.textContent = texts[currentLanguage].loc2;
        best_time2.textContent = texts[currentLanguage].best_time2;
        best_places2.textContent = texts[currentLanguage].best_places2;
        loc3.textContent = texts[currentLanguage].loc3;
        best_time3.textContent = texts[currentLanguage].best_time3;
        best_places3.textContent = texts[currentLanguage].best_places3;
        learnMoreButtons.forEach(button => {
            button.textContent = texts[currentLanguage].learn_more;
        });

        localStorage.setItem('language', currentLanguage);
    }

    if (translateButton) {
        translateButton.addEventListener('click', () => {
            translate();
        });
    }

    translateButton.textContent = texts[currentLanguage].button;
    title.textContent = texts[currentLanguage].title;
    intro.textContent = texts[currentLanguage].intro;
    loc1.textContent = texts[currentLanguage].loc1;
    best_time1.textContent = texts[currentLanguage].best_time1;
    best_places1.textContent = texts[currentLanguage].best_places1;
    loc2.textContent = texts[currentLanguage].loc2;
    best_time2.textContent = texts[currentLanguage].best_time2;
    best_places2.textContent = texts[currentLanguage].best_places2;
    loc3.textContent = texts[currentLanguage].loc3;
    best_time3.textContent = texts[currentLanguage].best_time3;
    best_places3.textContent = texts[currentLanguage].best_places3;
    learnMoreButtons.forEach(button => {
        button.textContent = texts[currentLanguage].learn_more;
    });
});