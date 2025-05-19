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
            about: "О Испанской Арке",
            desc: "Массивная арка у кромки воды — всё, что осталось от старой городской стены. Spanish Arch стоит, как страж времён, наблюдая, как в реке Корриб отражаются не паруса галеонов, а вспышки туристических камер. В XVIII веке сюда причаливали торговые суда из Испании, отсюда и название. Здесь разгружали вино, маслины, ткани, а теперь — воспоминания. Под каменными сводами играют уличные музыканты, а местные художники пишут акварели, ловя переменчивый свет Атлантики. Это место, где прошлое и настоящее идут под руку, будто старые друзья, встретившиеся у реки.",
            surroundings: "Окрестности",
            surdesc: "Сразу за аркой — Galway City Museum: три этажа истории, от кельтов до современных уличных артистов. Пройдитесь по Nimmo’s Pier — на горизонте мелькают лодки и чайки, как живые мазки на морской картине. В тёплые дни сюда приходят художники с мольбертами и студенты с книжками, а зимой арка становится укрытием для любителей поэзии и дождя. Всего в двух минутах — оживлённая улица Quay Street с её пабами, уличными скрипачами и запахом жареных мидий.",
            mapt: "Карта района",
            text_part_1: "1. Приходите на закате — отблески на реке делают арку особенно живописной.",
            text_part_2: "2. Сядьте на камни у воды — здесь устраивают импровизированные концерты.",
            text_part_3: "3. Рядом можно купить горячий сидр или мороженое — в зависимости от погоды.",
            text_part_4: "4. Не торопитесь: послушайте, как ветер играет в щелях кладки — это голос Галуэя.",
            tips: "Советы"
        },
        en: {
            button: "Translate",
            about: "About Spanish Arch",
            desc: "A massive arch by the water’s edge — all that remains of the old city wall. Spanish Arch stands as a sentinel of time, watching not the sails of galleons, but the flashes of tourist cameras reflected in the River Corrib. In the 18th century, Spanish trading ships docked here — hence the name. Wine, olives, fabrics were once unloaded here. Now — memories. Under the stone vaults, street musicians perform, and local artists paint watercolors, capturing the Atlantic’s shifting light. It’s a place where past and present walk hand in hand like old friends reunited by the river.",
            surroundings: "Surroundings",
            surdesc: "Just behind the arch is Galway City Museum — three floors of history, from Celts to street performers. Walk along Nimmo’s Pier — boats and gulls flicker on the horizon like brushstrokes in a sea painting. On warm days, artists and students gather here; in winter, the arch shelters poetry lovers and the rain. Two minutes away is bustling Quay Street with pubs, violinists, and the scent of fried mussels.",
            mapt: "Map of the area",
            text_part_1: "1. Come at sunset — the river’s reflections make the arch glow.",
            text_part_2: "2. Sit on the stones by the water — street concerts often pop up.",
            text_part_3: "3. Grab hot cider or ice cream nearby — depending on the season.",
            text_part_4: "4. Don’t rush: listen to the wind in the cracks — it’s Galway’s voice.",
            tips: "Tips"
        },
    };

    let currentLanguage = localStorage.getItem('language') || 'ru';

    function translate() {
        currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';

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
