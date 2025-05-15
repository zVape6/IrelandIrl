document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById('translateButton');
    const about = document.getElementById('about');
    const desc = document.getElementById('desc');
    const surroundings = document.getElementById('surroundings');
    const surdesc = document.getElementById('surdesc');
    const mapt = document.getElementById('mapt');
    const tips = document.getElementById('tips');
    const text_part_1 = document.getElementById('text_part_1');
    const text_part_2 = document.getElementById('text_part_2');
    const text_part_3 = document.getElementById('text_part_3');
    const text_part_4 = document.getElementById('text_part_4');
    const text_part_5 = document.getElementById('text_part_5');

    
    const texts = {
        ru: {
            button: "Перевод",
            about: "О Дублинском замке",
            desc: "Средневековые башни, вырастающие из брусчатки, помнят больше, чем написано в учебниках. Дублинский замок, заложенный в 1204 году по приказу короля Иоанна Безземельного, восемь веков был символом британской власти в Ирландии. Его стены видели пышные балы вице-королей и мрачные допросы в подземельях, где пытали участников восстаний. Сегодня в Королевской часовне эхо шагов смешивается с тихим перезвоном старинных колоколов, а в бывших казематах выставлены сокровища Честер Битти. Особый трепет вызывает Бирмингемская башня — единственная сохранившаяся часть оригинального норманнского замка. Это место, где каждая трещина в камне — страница сложной ирландской истории, а роскошные интерьеры георгианской эпохи скрывают мрачные тайны подземелий.",
            surroundings: "Окрестности",
            surdesc: "Район вокруг Дублинского замка — отличное место для знакомства с историческим центром города. Рядом находятся оживлённые улицы с пабами, музеями и магазинами. В пешей доступности — знаменитая Grafton Street и собор Святого Патрика. Атмосфера здесь оживлённая и туристически насыщенная.",
            mapt: "Карта района",
            tips: "Советы",
            text_part_1: "1.Приходите к открытию (9:45) или после 15:00 — меньше групп.",
            text_part_2: "2.Возьмите аудиогид (€3) — там есть записи узников.",
            text_part_3: "3.Лучшие кадры: вид со двора на башню Рекордов.",
            text_part_4: "4.После посещения можно сходить кафе 'The Castle' в подвале",
            text_part_5: "5.Наденьте удобную обувь — старые лестницы скользкие! Если повезёт, попадёте на концерт органной музыки в часовне."
        },
        en: {
            button: "Translate",
            about: "About Dublin Castle",
            desc: "Medieval towers rising out of paving stones remember more than what is written in textbooks. Dublin Castle, founded in 1204 on the orders of King John Landless, has been a symbol of British power in Ireland for eight centuries. Its walls have seen the lavish balls of viceroys and the grim interrogation dungeons where rebels were tortured. Today, the echo of footsteps mingles with the quiet chime of ancient bells in the Chapel Royal, and Chester Beatty's treasures are on display in the former casemates. Birmingham Tower, the only surviving part of the original Norman castle, is particularly awe-inspiring. It's a place where every crack in the stone is a page of complex Irish history, and the sumptuous Georgian interiors hide the dark secrets of the dungeons.",
            surroundings: "Surroundings",
            surdesc: "The area around Dublin Castle is a great place to explore the historic city center. It is close to lively streets with pubs, museums and stores. The famous Grafton Street and St. Patrick's Cathedral are within walking distance. The atmosphere is lively and touristy.",
            mapt: "Map of the area",
            tips: "Tips",
            text_part_1: "1.Come by opening (9:45am) or after 3pm - smaller groups.",
            text_part_2: "2.Take an audio guide (€3) - there are recordings of the prisoners.",
            text_part_3: "3.Best shots: the view from the courtyard to the Tower of Records.",
            text_part_4: "4.After the visit you can go to 'The Castle' cafe in the basement",
            text_part_5: "5.Wear comfortable shoes - the old stairs are slippery! If you're lucky, you'll catch an organ concert in the chapel."
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
        text_part_1.textContent = texts[currentLanguage].text_part_1;
        text_part_2.textContent = texts[currentLanguage].text_part_2;
        text_part_3.textContent = texts[currentLanguage].text_part_3;
        text_part_4.textContent = texts[currentLanguage].text_part_4;
        text_part_5.textContent = texts[currentLanguage].text_part_5;

        localStorage.setItem('language', currentLanguage);
    }
    
    if (translateButton) {
        translateButton.addEventListener('click', () => {
            translate();
        });
    }
    });