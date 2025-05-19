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
            about: "О театре 'Друид'",
            desc: "Небольшое здание, спрятанное между пабами и галереями, — сердце ирландской драмы. Здесь начались карьеры лучших актёров, здесь слышали первые строки пьес Макдоны. Интимный зал вмещает сотню зрителей, но энергия спектаклей ломает стены. Театр 'Друид' — это алхимия: между тьмой и светом рождаются ирландские мифы, слёзы, смех.",
            surroundings: "Окрестности",
            surdesc: "На соседней улице — книжный с театральными пьесами. В двух шагах — арт-кафе с выставками студентов. А за углом — тату-салон, где делают портреты ирландских писателей.",
            mapt: "Карта",
            text_part_1: "1. Бронируйте билеты заранее — особенно на классику.",
            text_part_2: "2. Возьмите программку — часто бывают фразы на гэльском.",
            text_part_3: "3. Приходите за 30 минут — бар открыт до начала.",
            text_part_4: "4. После спектакля обсудите увиденное в пабе через дорогу.",
            tips: "Советы"
        },
        en: {
            button: "Translate",
            about: "About Druid Theatre",
            desc: "A small building hidden between pubs and galleries is the heart of Irish drama. This is where the careers of the best actors began, where the first lines of McDonagh's plays were heard. The intimate hall seats a hundred spectators, but the energy of the performances breaks down walls. Druid Theatre is alchemy: between darkness and light, Irish myths, tears, and laughter are born.",
            surroundings: "Surroundings",
            surdesc: "On the next street is a bookstore with plays. Two steps away is an art café with student exhibitions. And around the corner is a tattoo parlor that does portraits of Irish writers.",
            mapt: "Map",
            text_part_1: "1. Book tickets in advance - especially for classics.",
            text_part_2: "2. Get a program - often has phrases in Gaelic.",
            text_part_3: "3. Come 30 minutes early - the bar is open before the show.",
            text_part_4: "4. After the performance, discuss what you saw in the pub across the street.",
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