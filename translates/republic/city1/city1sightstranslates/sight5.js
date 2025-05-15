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
            button: 'Перевод',
            about: 'О Фестивале искусств Вестпорта',
            desc: 'Уличные фонари на The Mall обрастают бумажными гирляндами, витрины магазинов превращаются в мини-галереи, а в воздухе витает предвкушение волшебства. Главная сцена вырастает прямо на площади перед церковью Святой Марии.Особое безумие царит в старом здании льнозавода. В его цехах, пахнущих пенькой и краской, современные танцоры разыгрывают спектакли среди прядильных машин, а видеоарт проецируют на кирпичные стены. Кульминация наступает в последний вечер, когда сотни бумажных фонариков запускают с моста в реку Карроубег.',
            surroundings: 'Окрестности',
            surdesc: 'На мостовой у Quay Lane появляются меловые шедевры: местные дети под руководством уличного художника рисуют трехметрового лосося, который к вечеру \'уплывает\' в реку Карроубег вместе с дождем. Чуть дальше, в крошечном дворике за пекарней, обнаруживается \'секретный сад\' — здесь среди кадок с геранью показывают немое кино на простыне, натянутой между двумя яблонями. Особое волшебство ждет у старых доков: там на бетонных стенах проецируют анимацию под аккомпанемент волынок, а отражение в воде создает эффект двойного экрана. К полуночи толпа перемещается к пабу \'The Clock\', где официанты в беретах разливают вино в бумажные стаканчики, а на стенах висят картины, которые можно купить за цену пива.',
            mapt: 'Карта района',
            text_part_1: '1.Фестиваль проходит конец сентября – начало октября',
            text_part_2: '2.Большинство уличных мероприятий бесплатные, но на концерты и спектакли лучше бронировать места заранее.',
            text_part_3: '3.Возьмите складной стульчик – на уличные спектакли садиться некуда.',
            text_part_4: '4.Транспорт:велосипед – идеальный вариант (аренда от €10/день).',
            text_part_5: '5.Найдите карту событий в инфо-палатке (отмечены secret gigs в двориках)',
            tips: 'Советы'
        },
        en: {
            button: 'Translate',
            about: 'About Westport Arts Festival',
            desc: 'Street lamps on The Mall become covered with paper garlands, shop windows turn into mini-galleries, and the air is filled with anticipation of magic. The main stage appears right on the square in front of St. Mary\'s Church. Special madness reigns in the old flax mill building. In its workshops, smelling of hemp and paint, modern dancers perform among spinning machines, and video art is projected onto brick walls. The culmination comes on the final evening when hundreds of paper lanterns are released from the bridge into the Carrowbeg River.',
            surroundings: 'Surroundings',
            surdesc: 'Masterpieces in chalk appear on the pavement of Quay Lane: local children, guided by a street artist, draw a three-meter salmon that by evening \'swims away\' into the Carrowbeg River with the rain. A bit further, in a tiny courtyard behind the bakery, a \'secret garden\' is discovered - here among geranium pots, silent films are shown on a sheet stretched between two apple trees. Special magic awaits at the old docks: there, animation is projected onto concrete walls accompanied by bagpipes, and the reflection in the water creates a double-screen effect. By midnight, the crowd moves to \'The Clock\' pub, where beret-wearing waiters pour wine into paper cups, and paintings hang on the walls that can be bought for the price of a beer.',
            mapt: 'Map of the area',
            text_part_1: '1.The festival takes place late September - early October',
            text_part_2: '2.Most street events are free, but it\'s better to book seats for concerts and performances in advance.',
            text_part_3: '3.Bring a folding chair - there\'s nowhere to sit during street performances.',
            text_part_4: '4.Transport: bicycle is the ideal option (rental from €10/day).',
            text_part_5: '5.Find an event map at the info booth (secret gigs in courtyards are marked)',
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