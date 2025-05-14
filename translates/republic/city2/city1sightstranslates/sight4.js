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
            about: "О Темпл-Баре",
            desc: "Кривые улочки с красными фасадами, золотыми вывесками и вечной музыкой - вот он, настоящий Темпл-Бар. Днём здесь бродят туристы, разглядывая витрины букинистов и галерей уличного искусства. К вечеру район оживает: из пабов 'The Temple Bar' и 'The Auld Dubliner' льются кельтские мелодии, смешиваясь со звоном бокалов. На брусчатке выступают уличные артисты, а воздух пахнет жареным хеком с чипсами. В переулках то и дело натыкаешься на скрытые бары, где местные пьют стаут под старые баллады. А на рыночной площади подают свежих устриц под аккомпанемент банджо. Темпл-Бар — это не просто район. Это место, где прошлое и настоящее сливаются в едином ритме ирландской души.",
            mapt: "Карта района",
            text_part_1: "1.а)Днём (12:00-17:00) - меньше толп, можно спокойно осмотреть галереи и книжные магазины",
            text_part_2: "б)Вечером (после 20:00) - настоящая атмосфера, но готовьтесь к толпам",
            text_part_3: "2. Отличные музыкальные пабы: The Temple Bar Pub, The Auld Dubliner, The Oliver St. John Gogarty",
            text_part_4: "3. Держите ценные вещи ближе к телу",
            text_part_5: "4. Лучше идти пешком - район полностью пешеходный, а также Такси до отеля заказывайте заранее вечером",
            tips: "Советы"
        },
        en: {
            button: "Translate",
            about: "About Temple Bar",
            desc: "Crooked streets with red facades, golden signs and perpetual music - this is the real Temple Bar. By day, tourists roam the neighborhood, browsing through the windows of booksellers and street art galleries. By evening, the neighborhood comes alive with Celtic tunes blaring from ‘The Temple Bar’ and ‘The Auld Dubliner’ and the clinking of glasses. Street performers perform on the paving stones and the air smells of fried hake and chips. In the alleyways, you'll come across hidden bars where locals drink stout to old ballads. And in the market square, fresh oysters are served to the accompaniment of a banjo. Temple Bar isn't just a neighborhood. It's a place where past and present merge in a single rhythm of the Irish soul.",
            mapt: "Map of the area",
            text_part_1: "1.a)Daytime (12:00-17:00) - less crowds, you can quietly browse the galleries and bookstores",
            text_part_2: "b)In the evening (after 20:00) - real atmosphere, but prepare for crowds",
            text_part_3: "2. great music pubs: The Temple Bar Pub, The Auld Dubliner, The Oliver St. John Gogarty.",
            text_part_4: "3. Keep valuables close to your body",
            text_part_5: "4. It is better to walk - the area is completely pedestrianized, as well as Taxi to the hotel book in advance in the evening",
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