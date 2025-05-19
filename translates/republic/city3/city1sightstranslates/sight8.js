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
            about: "О парке Мерлин Вудс",
            desc: "Дубы и ясени здесь шепчутся, как старые знакомые. Парк Мерлин Вудс — это лес в городе. Узкие тропы ведут к полянам с голубыми колокольчиками. Иногда можно встретить лису или оленёнка. А в одном из деревьев — вырезана тайная дверь. Кто её сделал — неизвестно, но дети оставляют у неё жёлуди и письма.",
            surroundings: "Окрестности",
            surdesc: "Рядом — район с фресками уличных художников. В трёх минутах — старинное кладбище и маленькое кафе с пирогами и книгами. На обратной дороге — сувенирная лавка с деревянными фигурками духов леса.",
            mapt: "Карта",
            text_part_1: "1. Утро — лучшее время для прогулок: птицы активны.",
            text_part_2: "2. Возьмите карту маршрутов на входе.",
            text_part_3: "3. Есть столы для пикника — и мусорные баки.",
            text_part_4: "4. Пройдитесь до заброшенного замка — он в центре парка.",
            tips: "Советы"
        },
        en: {
            button: "Translate",
            about: "About Merlin Woods",
            desc: "The oaks and ash trees here whisper like old friends. Merlin Woods is a forest in the city. Narrow paths lead to clearings with bluebells. Sometimes you might spot a fox or a fawn. And in one of the trees is carved a secret door. Who made it is unknown, but children leave acorns and letters by it.",
            surroundings: "Surroundings",
            surdesc: "Nearby is a district with street artists' murals. Three minutes away is an ancient cemetery and a small café with pies and books. On the way back is a souvenir shop with wooden figurines of forest spirits.",
            mapt: "Map",
            text_part_1: "1. Morning is the best time for walks: birds are active.",
            text_part_2: "2. Get a route map at the entrance.",
            text_part_3: "3. There are picnic tables - and trash bins.",
            text_part_4: "4. Walk to the abandoned castle - it's in the center of the park.",
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