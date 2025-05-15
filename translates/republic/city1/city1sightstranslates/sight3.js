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
            button: 'Перевод',
            about: 'О Вестпортской набережной',
            desc: 'Утренний туман еще цепляется за мачты рыбацких лодок, когда Westport Quay просыпается под крики чаек. Бывший торговый порт, где когда-то грузили зерно и шерсть на корабли, теперь дышит неспешной современной жизнью. Краснокирпичные склады XIX века превратились в уютные кафе, где подают кофе с ирландским виски-кремом и свежие устрицы — их только что выловили в заливе Клю. Westport Quay — место, где прошлое и настоящее сливаются, как пресная вода реки с соленым дыханием океана.',
            surroundings: 'Окрестности',
            surdesc: 'От старых доков Westport Quay узкая тропинка ведет к полуразрушенной каменной пристани — здесь когда-то швартовались корабли с грузом ирландской шерсти. Повернув за угол склада с выцветшей надписью "Customs", попадаешь в крошечный дворик, где пахнет свежеиспеченным содовым хлебом из пекарни "The Grainne". Если пройти дальше по извилистой улочке, откроется неожиданный вид: заросший травой сухой док, где стоит на ремонте деревянная шхуна "Айрин". Ее 90-летний капитан Патрик охотно рассказывает, как в 60-х перевозил уголь в Голуэй, пока не застрял здесь навсегда — "из-за женщины с глазами цвета залива Клю".',
            mapt: 'Карта района',
            text_part_1: '1. а)Утро (8:00–10:00) – идеально для фото с пустынными доками и рыболовными лодками. б)Закат – огни ресторанов отражаются в воде, создавая волшебную атмосферу.',
            text_part_2: '2. Рынок по субботам (9:00–14:00) – handmade-сувениры и свежие морепродукты.',
            text_part_3: '3. Наденьте ветровку – у воды всегда ветрено.',
            text_part_4: '4. Задержитесь до темноты – когда зажигаются фонари, Quay выглядит как декорация к фильму!',
            tips: 'Советы'
        },
        en: {
            button: 'Translate',
            about: 'About Westport Quay',
            desc: 'Morning fog still clings to the masts of fishing boats as Westport Quay awakens to the cries of seagulls. This former trading port, where grain and wool were once loaded onto ships, now breathes with a leisurely modern life. The red-brick 19th-century warehouses have been transformed into cozy cafes serving coffee with Irish whiskey cream and fresh oysters - just caught in Clew Bay. Westport Quay is a place where past and present merge, like fresh river water with the salty breath of the ocean.',
            surroundings: 'Surroundings',
            surdesc: 'From the old docks of Westport Quay, a narrow path leads to a half-ruined stone pier - where ships once moored with cargoes of Irish wool. Turning the corner of a warehouse with a faded "Customs" sign, you enter a tiny courtyard smelling of freshly baked soda bread from "The Grainne" bakery. If you walk further along the winding street, an unexpected view opens up: a grass-covered dry dock where the wooden schooner "Airen" is under repair. Her 90-year-old captain Patrick is happy to tell how in the 60s he transported coal to Galway until he got stuck here forever - "because of a woman with eyes the color of Clew Bay".',
            mapt: 'Map of the area',
            text_part_1: '1. a) Morning (8:00–10:00 AM) - perfect for photos with empty docks and fishing boats. b) Sunset - restaurant lights reflected in the water create a magical atmosphere.',
            text_part_2: '2. Saturday market (9:00 AM–2:00 PM) - handmade souvenirs and fresh seafood.',
            text_part_3: '3. Wear a windbreaker - it\'s always windy by the water.',
            text_part_4: '4. Stay until dark - when the lanterns light up, the Quay looks like a movie set!',
            tips: 'Tips'
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