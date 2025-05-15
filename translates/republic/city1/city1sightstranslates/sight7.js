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
    const tips = document.getElementById('tips');

    const texts = {
        ru: {
            button: "Перевод",
            about: "О горе Кроу-Патрик",
            desc: "Камни здесь помнят босые ступни святого Патрика, который, по преданию, провел на вершине 40 дней, изгоняя змей из Ирландии. Подъем начинается в тишине, нарушаемой лишь звоном посохов о щебень. На отметке 300 метров появляется первый \"станционный камень\" — здесь верующие читают молитвы, обходя валун трижды. На последнем отрезке, где склон превращается в каменную реку, паломники ползут на коленях. Их ладони оставляют кровавые следы на острых камнях — добровольная жертва вере.",
            surroundings: "Окрестности",
            surdesc: "Дорога к началу тропы петляет мимо \"Поющего ручья\" — крохотного потока, чьи воды, по легенде, обретают целебную силу в день святого Патрика. Местные дети собирают здесь кварцевые камешки, называя их \"слезами горы\". На запад открывается вид на залив Клю с его 365 островами. В отлив обнажается \"Тропа великанов\" — цепь валунов, ведущая к заброшенной часовне на острове Коллин.",
            mapt: "Карта района",
            text_part_1: "1.Лучшее время: июль-август (погода стабильнее), но пик паломничества — Reek Sunday (последнее воскресенье июля).",
            text_part_2: "2.Обувь: треккинговые ботинки с жесткой подошвой (камни острые!). Босиком — только для опытных паломников.",
            text_part_3: "3.Основная тропа (7 км в оба конца, 4-6 часов)",
            tips: "Советы"
        },
        en: {
            button: "Translate",
            about: "About Croagh Patrick",
            desc: "The stones here remember the bare feet of Saint Patrick, who, according to legend, spent 40 days on the summit driving snakes out of Ireland. The ascent begins in silence, broken only by the tapping of staffs on gravel. At 300 meters, the first 'station stone' appears — here, pilgrims say prayers, circling the boulder three times. On the final stretch, where the slope turns into a river of rocks, pilgrims crawl on their knees. Their palms leave bloody marks on the sharp stones — a voluntary sacrifice of faith.",
            surroundings: "Surroundings",
            surdesc: "The road to the start of the trail winds past the 'Singing Stream' — a tiny brook whose waters, legend says, gain healing power on Saint Patrick's Day. Local children collect quartz pebbles here, calling them 'the mountain's tears'. To the west lies a view of Clew Bay with its 365 islands. At low tide, the 'Giant's Path' is revealed — a chain of boulders leading to an abandoned chapel on Collan Island.",
            mapt: "Map of the area",
            text_part_1: "1. Best time: July–August (more stable weather), but peak pilgrimage is Reek Sunday (last Sunday of July).",
            text_part_2: "2. Footwear: hiking boots with a stiff sole (the stones are sharp!). Barefoot — only for experienced pilgrims.",
            text_part_3: "3. Main trail (7 km round-trip, 4–6 hours)",
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
        tips.textContent = texts[currentLanguage].tips;

        localStorage.setItem('language', currentLanguage);
    }

    if (translateButton) {
        translateButton.addEventListener('click', () => {
            translate();
        });
    }
});
