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
            about: "О доме-музее Норы Барнкл",
            desc: "Дом с крошечными окнами и кривыми ступенями был когда-то местом, откуда девушка по имени Нора отправилась покорять Европу вместе с Джеймсом Джойсом. Здесь сохранились её письма, фотографии, кухня с чайником, будто она только что вышла. Этот музей — не о вещах, а о чувствах: юности, любви, тревоге и выборе.",
            surroundings: "Окрестности",
            surdesc: "Рядом — улочки, вдохновившие сцены из «Улисса». В переулке — кафе, где поэты читают свои стихи. В витринах — винтажные открытки с Галуэем прошлого.",
            mapt: "Карта",
            text_part_1: "1. Открыт летом — проверьте расписание.",
            text_part_2: "2. Запишитесь на экскурсию — гиды знают многое о Джойсе.",
            text_part_3: "3. Обратите внимание на записи писем в витринах.",
            text_part_4: "4. Дом очень маленький — приходите вне пиковых часов.",
            tips: "Советы"
        },
        en: {
            button: "Translate",
            about: "About Nora Barnacle House",
            desc: "The house with tiny windows and crooked steps was once the place from which a girl named Nora set out to conquer Europe with James Joyce. Her letters, photographs, and kitchen with a teapot remain here, as if she had just stepped out. This museum is not about things, but about feelings: youth, love, anxiety, and choice.",
            surroundings: "Surroundings",
            surdesc: "Nearby are the streets that inspired scenes from 'Ulysses'. In the alley is a café where poets read their poems. In the windows are vintage postcards of Galway from the past.",
            mapt: "Map",
            text_part_1: "1. Open in summer - check the schedule.",
            text_part_2: "2. Book a tour - guides know a lot about Joyce.",
            text_part_3: "3. Pay attention to the letter transcripts in the displays.",
            text_part_4: "4. The house is very small - come during off-peak hours.",
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