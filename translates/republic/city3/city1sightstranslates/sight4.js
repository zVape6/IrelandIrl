document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById('translateButton');
    const about = document.getElementById('about');
    const desc = document.getElementById('desc');
    const surroundings = document.getElementById('surroundings');
    const surdesc = document.getElementById('surdesc');
    const mapt = document.getElementById('mapt');
    const text_part_1 = document.getElementById('text_part_1');
    const text_part_2 = document.getElementById('text_part_2');
    const text_part_3 = document.getElementById('text_part_3');
    const text_part_4 = document.getElementById('text_part_4');
    const tips = document.getElementById('tips');

    const texts = {
        ru: {
            button: "Перевод",
            about: "О Голуэйском городском музее",
            desc: "Белоснежный фасад у берега скрывает целый мир — от древней истории до поп-культуры. Здесь — кельтские мечи, модели кораблей, афиши уличных фестивалей. Музей живёт: дети ищут экспонаты по карте, взрослые замирают у выставки о «Лузитании». Панорамное окно на верхнем этаже будто сливает город и море в одну картину.",
            surroundings: "Окрестности",
            surdesc: "Музей выходит прямо к Spanish Arch. Рядом — лавки с ремесленными изделиями, уличные художники, Nimmo's Pier. На закате — идеально для фото с аркой и чайками.",
            mapt: "Карта",
            text_part_1: "1. Вход бесплатный — приходите в будни утром.",
            text_part_2: "2. Не пропустите зал об испанской арке и торговле.",
            text_part_3: "3. Обязательно — экспозиция с музыкальными инструментами.",
            text_part_4: "4. После — кофе в кафе на первом этаже с видом на набережную.",
            tips: "Советы"
        },
        en: {
            button: "Translate",
            about: "About Galway City Museum",
            desc: "The white facade by the shore hides an entire world - from ancient history to pop culture. Here are Celtic swords, ship models, posters of street festivals. The museum is alive: children search for exhibits using a map, adults pause at the exhibition about the 'Lusitania'. The panoramic window on the top floor seems to blend the city and the sea into one picture.",
            surroundings: "Surroundings",
            surdesc: "The museum faces directly onto the Spanish Arch. Nearby are craft shops, street artists, Nimmo's Pier. At sunset - perfect for photos with the arch and seagulls.",
            mapt: "Map",
            text_part_1: "1. Free admission - come on weekday mornings.",
            text_part_2: "2. Don't miss the hall about the Spanish Arch and trade.",
            text_part_3: "3. Be sure to see the exhibition with musical instruments.",
            text_part_4: "4. Afterwards - coffee in the ground floor café with a view of the promenade.",
            tips: "Tips"
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
        about.textContent = texts[currentLanguage].about;
        desc.textContent = texts[currentLanguage].desc;
        surroundings.textContent = texts[currentLanguage].surroundings;
        surdesc.textContent = texts[currentLanguage].surdesc;
        mapt.textContent = texts[currentLanguage].mapt;
        text_part_1.textContent = texts[currentLanguage].text_part_1;
        text_part_2.textContent = texts[currentLanguage].text_part_2;
        text_part_3.textContent = texts[currentLanguage].text_part_3;
        text_part_4.textContent = texts[currentLanguage].text_part_4;
        tips.textContent = texts[currentLanguage].tips;
        localStorage.setItem('language', currentLanguage);
    }
    
    if (translateButton) {
        translateButton.addEventListener('click', () => {
            translate();
        });
    }
});