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
            about: "Об островах Аран",
            desc: "Каменные стены, безмолвные скалы и грохот прибоя. Aran Islands — это Ирландия без фильтров. Здесь люди говорят на гэльском, сушат водоросли на верёвках и приветствуют друг друга, как старых друзей. На вершине Иннишмора — форт Дун Энгус, висящий над обрывом. А внизу — серые домики с крышами из сланца и коровы, гуляющие между велосипедами.",
            surroundings: "Окрестности",
            surdesc: "Острова сами по себе — как отдельный мир. У причала — магазин вязанных свитеров и кафе с лучшим рыбным супом. А вечером, если повезёт, можно услышать песни на гэльском у костра.",
            mapt: "Карта",
            text_part_1: "1. Берите тёплую одежду — даже летом ветер крепкий.",
            text_part_2: "2. Лучше велосипед, чем автобус — свобода.",
            text_part_3: "3. Привезите наличные — не везде есть терминалы.",
            text_part_4: "4. Не уходите с троп — можно потеряться среди камней.",
            tips: "Советы"
        },
        en: {
            button: "Translate",
            about: "About Aran Islands",
            desc: "Stone walls, silent cliffs, and the roar of the surf. Aran Islands are Ireland without filters. Here people speak Gaelic, dry seaweed on ropes, and greet each other like old friends. At the top of Inishmore is Dun Aengus fort, hanging over a cliff. And below are gray houses with slate roofs and cows wandering between bicycles.",
            surroundings: "Surroundings",
            surdesc: "The islands themselves are like a separate world. At the pier is a shop with knitted sweaters and a café with the best fish soup. And in the evening, if you're lucky, you might hear Gaelic songs by the fire.",
            mapt: "Map",
            text_part_1: "1. Bring warm clothes - even in summer the wind is strong.",
            text_part_2: "2. Better a bicycle than a bus - freedom.",
            text_part_3: "3. Bring cash - not everywhere has terminals.",
            text_part_4: "4. Don't leave the paths - you can get lost among the stones.",
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