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
            about: "О Саде воспоминаний",
            desc: "Сад воспоминаний — это не просто парк, а живой памятник тем, кто отдал жизнь за свободу Ирландии. Войдя, вы оказываетесь перед мозаичным бассейном в форме кельтского креста. Вода здесь всегда неподвижна, как застывшие слезы. Над ним возвышается бронзовая скульптура «Дети Лира» — печальные фигуры, превращающиеся в лебедей, символ страдания и возрождения. Особенно трогательно здесь весной, когда первые цветы появляются у подножия памятника. Местные приносят сюда не букеты, а одиночные цветы — скромные, как память, не требующая пафоса. Это место не для торопливых туристов. Здесь нужно сесть на одну из каменных скамеек, вглядеться в воду и почувствовать, как история оживает в тишине между прошлым и настоящим.",
            surroundings: "Окрестности",
            surdesc: "Прямо напротив — величественное здание Театра Аббатства, где в 1916 году ставили пьесы, вдохновлявшие повстанцев. Сегодня здесь всё так же звучат строки Йейтса, а на стене висит афиша новой постановки. Перейдя через дорогу, окажетесь у Дублинской писательской музеи — в её витринах хранятся перьевые ручки Джойса и потрёпанный блокнот Беккета. Чуть дальше, за поворотом, начинается знаменитая О'Коннелл-стрит с её бронзовыми памятниками и уличными музыкантами. Но самый неожиданный сюрприз — крошечный книжный магазинчик «Ulysses Rare Books», спрятавшийся в арке. Здесь за стеклом лежит первое издание «Улисса» за 25 000 евро.",
            mapt: "Карта района",
            text_part_1: "1. Лучшее время: раннее утро (8-9 часов), когда первые лучи солнца освещают мозаичный бассейн",
            text_part_2: "2. Посидите 5 минут у «Детей Лира», чтобы заметить, как меняется их выражение при разном освещении",
            text_part_3: "3. Сохраняйте тишину - это место памяти",
            text_part_4: "4. Сад особенно красив в апреле (к годовщине восстания), когда ирландцы оставляют здесь живые цветы национальных цветов - зеленые, белые и оранжевые.",
            tips: "Советы"
        },
        en: {
            button: "Translate",
            about: "About Garden of Remembrance",
            desc: "The Garden of Remembrance is not just a park, but a living memorial to those who gave their lives for Ireland's freedom. Upon entering, you find yourself in front of a mosaic pool in the shape of a Celtic cross. The water here is always still, like frozen tears. Above it rises the bronze sculpture 'Children of Lir' - sad figures turning into swans, a symbol of suffering and rebirth. It's especially touching in spring when the first flowers appear at the foot of the monument. Locals bring not bouquets but single flowers here - modest, like memory that requires no pomp. This is not a place for hurried tourists. Here you need to sit on one of the stone benches, gaze into the water, and feel how history comes alive in the silence between past and present.",
            surroundings: "Surroundings",
            surdesc: "Directly opposite is the majestic Abbey Theatre building, where in 1916 plays were staged that inspired the rebels. Today, Yeats' lines still resonate here, and a poster for a new production hangs on the wall. Crossing the road, you'll find yourself at the Dublin Writers Museum - its display cases contain Joyce's fountain pens and Beckett's worn notebook. A little further, around the corner, begins the famous O'Connell Street with its bronze monuments and street musicians. But the most unexpected surprise is the tiny bookshop 'Ulysses Rare Books', hidden in an archway. Here behind glass lies a first edition of 'Ulysses' priced at €25,000.",
            mapt: "Map of the area",
            text_part_1: "1. Best time: early morning (8-9 AM), when the first rays of sun illuminate the mosaic pool",
            text_part_2: "2. Spend 5 minutes by the 'Children of Lir' to notice how their expression changes in different light",
            text_part_3: "3. Maintain silence - this is a memorial place",
            text_part_4: "4. The garden is especially beautiful in April (around the anniversary of the uprising), when Irish people leave living flowers in national colors - green, white and orange.",
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
        tips.textContent = texts[currentLanguage].tips;
        localStorage.setItem('language', currentLanguage);
    }
    
    if (translateButton) {
        translateButton.addEventListener('click', () => {
            translate();
        });
    }
});