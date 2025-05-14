document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById('translateButton');
    const about = document.getElementById('about');
    const desc = document.getElementById('desc');
    const surroundings = document.getElementById('surroundings');
    const surdesc = document.getElementById('surdesc');
    const mapt = document.getElementById('mapt');
    const tips = document.getElementById('tips');
    const tipsi = document.getElementById('tipsi');

    
    const texts = {
        ru: {
            button: "Перевести на английский",
            about: "О Дублинском замке",
            desc: "Дублинский замок — историческое сердце ирландской столицы. Построенный в XIII веке на месте древнего викингского укрепления, он служил резиденцией британской власти в Ирландии. Сегодня замок — популярная достопримечательность с великолепными залами, музеями и садами, отражающими богатое прошлое страны.",
            surroundings: "Окрестности",
            surdesc: "Район вокруг Дублинского замка — отличное место для знакомства с историческим центром города. Рядом находятся оживлённые улицы с пабами, музеями и магазинами. В пешей доступности — знаменитая Grafton Street и собор Святого Патрика. Атмосфера здесь оживлённая и туристически насыщенная.",
            mapt: "Карта района",
            tips:"Советы",
            tipsi: "тут советы"
        },
        en: {
            button: "Translate to Russian",
            about: "About Dublin Castle",
            desc: "Dublin Castle is the historic heart of the Irish capital. Built in the 13th century on the site of an ancient Viking fortification, it served as the seat of British power in Ireland. Today, the castle is a popular attraction with magnificent halls, museums and gardens reflecting the country's rich past.",
            surroundings: "Surroundings",
            surdesc: "The area around Dublin Castle is a great place to explore the historic city center. It is close to lively streets with pubs, museums and stores. The famous Grafton Street and St. Patrick's Cathedral are within walking distance. The atmosphere is lively and touristy.",
            mapt: "Map of the area",
            tips:"Tips",
            tipsi: "tyt tips"
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
        desc.textContent = texts[currentLanguage].desc;
        surroundings.textContent = texts[currentLanguage].surroundings;
        surdesc.textContent = texts[currentLanguage].surdesc;
        mapt.textContent = texts[currentLanguage].mapt;
        tips.textContent = texts[currentLanguage].tips;
        tipsi.textContent = texts[currentLanguage].tipsi;
        localStorage.setItem('language', currentLanguage);
    }
    
    if (translateButton) {
        translateButton.addEventListener('click', () => {
            translate();
        });
    }
    });