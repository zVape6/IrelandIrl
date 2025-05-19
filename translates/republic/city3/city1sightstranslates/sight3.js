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
            about: "О Церкви Святого Николая",
            desc: "Древние стены церкви Святого Николая хранят не только молитвы, но и шёпот легенд. Это самая старая действующая церковь Ирландии. Здесь, по слухам, молился сам Христофор Колумб. Каменные гаргульи на фасаде смотрят на улицу с мудрой усталостью, а внутри — деревянный потолок, как перевёрнутый корабль. Вечерами здесь репетируют хоры, и кажется, что время замирает.",
            surroundings: "Окрестности",
            surdesc: "Церковь находится в самом сердце Латинского квартала. Вокруг — антикварные лавки, букинистические магазинчики и уличные музыканты. А на углу — скульптура рыбака, глядящего на канал, как будто в ожидании чуда.",
            mapt: "Карта",
            text_part_1: "1. Приходите на службу — орган и хор звучат магически.",
            text_part_2: "2. Обратите внимание на барельефы и гербы на стенах.",
            text_part_3: "3. Узнайте у смотрителя про «проклятие торговцев».",
            text_part_4: "4. Утром — меньше людей и лучшая акустика.",
            tips: "Советы"
        },
        en: {
            button: "Translate",
            about: "About St. Nicholas' Collegiate Church",
            desc: "The ancient walls of St. Nicholas' Church hold not only prayers but also whispers of legends. It is the oldest functioning church in Ireland. Rumor has it that Christopher Columbus himself prayed here. The stone gargoyles on the facade look at the street with wise weariness, and inside there is a wooden ceiling like an upturned ship. In the evenings, choirs rehearse here, and time seems to stand still.",
            surroundings: "Surroundings",
            surdesc: "The church is located in the heart of the Latin Quarter. Around it are antique shops, second-hand bookstores, and street musicians. And on the corner is a sculpture of a fisherman looking at the canal as if waiting for a miracle.",
            mapt: "Map",
            text_part_1: "1. Attend a service - the organ and choir sound magical.",
            text_part_2: "2. Pay attention to the bas-reliefs and coats of arms on the walls.",
            text_part_3: "3. Ask the caretaker about the 'merchants' curse'.",
            text_part_4: "4. Mornings have fewer people and better acoustics.",
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