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
            about: "О променаде Салтай-Хилл",
            desc: "Ветер несёт запах соли, чайки кричат о свободе, а под ногами — шум гальки. Променад в Салтайле — это не просто дорожка у моря. Это утренние пробежки, вечерние поцелуи, детские велосипеды и старики на лавках. Здесь люди «бьют стену» — удар по бетонному выступу на конце на удачу. И, кажется, это действительно работает.",
            surroundings: "Окрестности",
            surdesc: "За променадом — каменистый пляж. Поодаль — аквариум и аренда каяков. В паре минут — кафе с видом на воду, где подают лучший лимонный пирог в Галуэе.",
            mapt: "Карта",
            text_part_1: "1. Приходите на закате — вид на закат над заливом не забудется.",
            text_part_2: "2. У стены на краю променада — сделайте фото.",
            text_part_3: "3. По пути есть палатки с чипсами и мороженым.",
            text_part_4: "4. Идеально для пикника или утренней пробежки.",
            tips: "Советы"
        },
        en: {
            button: "Translate",
            about: "About Salthill Promenade",
            desc: "The wind carries the smell of salt, seagulls cry about freedom, and underfoot is the sound of pebbles. The promenade in Salthill is not just a path by the sea. It's morning runs, evening kisses, children's bicycles and old people on benches. Here people 'hit the wall' - a tap on the concrete ledge at the end for good luck. And it seems to really work.",
            surroundings: "Surroundings",
            surdesc: "Behind the promenade is a rocky beach. Nearby are an aquarium and kayak rentals. A couple of minutes away is a café with a water view that serves the best lemon pie in Galway.",
            mapt: "Map",
            text_part_1: "1. Come at sunset - the view of the sunset over the bay will be unforgettable.",
            text_part_2: "2. At the wall at the end of the promenade - take a photo.",
            text_part_3: "3. Along the way there are stalls with chips and ice cream.",
            text_part_4: "4. Perfect for a picnic or morning run.",
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