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
    const text_part_5 = document.getElementById('text_part_5');
    const tips = document.getElementById('tips');

    
    const texts = {
        ru: {
            button: "Перевод",
            about: "О Музее пива Гиннесс",
            desc: "Семь этажей ароматов солода и хмеля — Storehouse встречает гостей огромным стеклянным атриумом в форме гигантской пинты Гиннесса. Поднимаясь по спиральным лестницам, вы совершите путешествие сквозь 260 лет истории: от скромной пивоварни Артура Гиннесса до мирового бренда. В залах музея оживают старинные медные котлы, а интерактивные экраны рассказывают о секретах приготовления темного эля. Особый восторг вызывает 'Школа барменов' — здесь учат правильно наливать идеальную пинту с кремовой шапкой. Ваш шедевр можно будет тут же продегустировать.",
            surroundings: "Окрестности",
            surdesc: "Выйдя из Музея Гиннесса, вы оказываетесь в самом сердце дублинского района Liberties. Прямо напротив пивоварни раскинулся St. James's Gate Park — уютный сквер с неожиданным арт-объектом: гигантской медной кружкой Гиннесса, отражающей небо. Повернув на Thomas Street, вы попадёте в царство антикварных лавок и ремесленных мастерских. Закончить прогулку можно в старейшем пабе Дублина The Brazen Head (основан в 1198 году!), где за кружкой того самого стаута вы наверняка услышите живую ирландскую музыку и истории, которые не найдёте ни в одном путеводителе.",
            mapt: "Карта района",
            text_part_1: "1. Купите билеты онлайн заранее (€26 с бронированием временного слота)",
            text_part_2: "2. Лучшее время: открытие в 9:30 или после 15:00",
            text_part_3: "3. Лучший ракурс Gravity Bar - у угловых окон в 17:00",
            text_part_4: "4. После посещения можно купить фирменные бокалы в магазине",
            text_part_5: "5. Ваш билет включает бесплатную пинту - можно взять ее не только в Gravity Bar, но и в баре на 4 этаже, где обычно меньше очередь.",
            tips: "Советы"
        },
        en: {
            button: "Translate to Russian",
            about: "About Guinness Storehouse",
            desc: "Seven floors of malt and hop aromas - Storehouse welcomes guests with a huge glass atrium in the shape of a giant Guinness pint. Climbing up the spiral staircases, you will take a journey through 260 years of history: from a humble brewery of Arthur Guinness to a global brand. In the halls of the museum ancient copper cauldrons come to life, and interactive screens tell you about the secrets of brewing dark ale. The ‘Bartender's School’ is a particular delight, teaching you how to pour the perfect pint with a creamy cap. Your masterpiece can be tasted immediately.",
            surroundings: "Surroundings",
            surdesc: "When you leave the Guinness Museum, you find yourself in the heart of Dublin's Liberties district. Directly opposite the brewery is St. James's Gate Park, a cozy square with an unexpected art object: a giant copper Guinness cup reflecting the sky. Turning onto Thomas Street, you'll find yourself in a realm of antique shops and artisanal workshops. End your stroll in Dublin's oldest pub, The Brazen Head (founded in 1198!), where you're sure to hear live Irish music and stories you won't find in any guidebook over a mug of stout.",
            mapt: "Map of the area",
            text_part_1: "1. Buy your tickets online in advance (€26 with time slot reservation)",
            text_part_2: "2. best time: opening at 9:30 or after 15:00",
            text_part_3: "3. Best angle of Gravity Bar - by the corner windows at 17:00.",
            text_part_4: "4. After the visit you can buy branded glasses in the store",
            text_part_5: "5. Your ticket includes a free pint - you can grab one not only at Gravity Bar, but also at the 4th floor bar where there's usually less of a queue.",
            tips: "Tips"
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
        text_part_1.textContent = texts[currentLanguage].text_part_1;
        text_part_2.textContent = texts[currentLanguage].text_part_2;
        text_part_3.textContent = texts[currentLanguage].text_part_3;
        text_part_4.textContent = texts[currentLanguage].text_part_4;
        text_part_5.textContent = texts[currentLanguage].text_part_5;
        tips.textContent = texts[currentLanguage].tips;

        localStorage.setItem('language', currentLanguage);
    }
    
    if (translateButton) {
        translateButton.addEventListener('click', () => {
            translate();
        });
    }
    });