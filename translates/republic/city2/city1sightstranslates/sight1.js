document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById('translateButton');
    const about = document.getElementById('about');
    const desc = document.getElementById('desc');
    const surroundings = document.getElementById('surroundings');
    const surdesc = document.getElementById('surdesc');
    const mapt = document.getElementById('mapt');

    
    const texts = {
        ru: {
            button: "Перевод",
            about: "О Дублинском замке",
            desc: "Дублин — город, где история и современность переплетаются на каждом углу. Прогуливаясь по мощёным улочкам, вы встретите старинные пабы, в которых когда-то сидели Джойс и Уайльд, и современные арт-пространства. Сердце города — река Лиффи, через которую перекинуты живописные мосты. Вечером район Темпл-Бар очарует живой музыкой и атмосферой настоящего ирландского веселья. Дублин — город, который запомнится надолго!",
            surroundings: "Окрестности",
            surdesc: "Район вокруг Дублинского замка — отличное место для знакомства с историческим центром города. Рядом находятся оживлённые улицы с пабами, музеями и магазинами. В пешей доступности — знаменитая Grafton Street и собор Святого Патрика. Атмосфера здесь оживлённая и туристически насыщенная.",
            mapt: "Карта района"
        },
        en: {
            button: "Translate",
            about: "About Dublin Castle",
            desc: "Dublin is a city where history and modernity intertwine at every corner. Strolling along the cobbled streets, you'll find old pubs where Joyce and Wilde once sat, and modern art spaces. The heart of the city is the River Liffey, which is crossed by picturesque bridges. In the evening, the Temple Bar area will enchant with live music and an atmosphere of real Irish fun. Dublin is a city to remember for a long time!",
            surroundings: "Surroundings",
            surdesc: "The area around Dublin Castle is a great place to explore the historic city center. It is close to lively streets with pubs, museums and stores. The famous Grafton Street and St. Patrick's Cathedral are within walking distance. The atmosphere is lively and touristy.",
            mapt: "Map of the area"
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
        localStorage.setItem('language', currentLanguage);
    }
    
    if (translateButton) {
        translateButton.addEventListener('click', () => {
            translate();
        });
    }
    });