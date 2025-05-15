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
            about: "О Пляже Олд-Хед",
            desc: "Old Head Beach, спрятанный между черных скал, — это полтора километра белого песка, который в солнечный день светится, как сахарная пудра. Дети здесь строят крепости из ракушек, пока их родители разглядывают силуэт маяка на дальнем мысу — того самого, где в 1915 году услышали последний сигнал \"Лузитании\". Это место, где даже воздух кажется пропитанным солью и тайнами. Если прислушаться, в шуме прибоя можно различить эхо старых морских песен — будто сам океан напевает их под нос, перебирая гальку, как четки.",
            surroundings: "Окрестности",
            surdesc: "Тропинка, усыпанная ракушечным крошевом, ведет к маяку Old Head Signal Tower - его белая башня, словно часовой, наблюдает за океаном с наполеоновских времен. Чуть дальше, за полем колючего дрока, притаился The Speckled Door - крошечный паб, который местные называют \"последним домом перед Америкой\". Если свернуть на тропу к югу, выйдете к \"Поющему утесу\" - месту, где ветер играет в каменных расщелинах, как в гигантской флейте. Здесь в расцветающих трещинах растут дикие орхидеи.",
            mapt: "Карта района",
            text_part_1: "1.Лучшее время для визита:\nа)Раннее утро - весь пляж в вашем распоряжении\nб)Закат - для волшебных фото с биолюминесценцией (июль-август)",
            text_part_2: "2. Возьмите с собой бинокль для наблюдения за дельфинами у мыса",
            text_part_3: "3.Не купайтесь у скал - опасные течения",
            text_part_4: "4.Избегайте черных скал после дождя - они становятся скользкими",
            text_part_5: "5.На пляже нет кабинок для переодевания - приезжайте сразу в купальнике под одеждой.",
            tips: "Советы"
        },
        en: {
            button: "Translate",
            about: "About Old Head Beach",
            desc: "Old Head Beach, hidden between black cliffs, is a 1.5-kilometer stretch of white sand that glows like powdered sugar on a sunny day. Children build seashell forts while their parents gaze at the silhouette of the lighthouse on the distant headland — the very one that received the last signal from the 'Lusitania' in 1915. This is a place where even the air seems filled with salt and secrets. If you listen closely, you can hear echoes of old sea shanties in the surf — as if the ocean hums them quietly, sifting pebbles like prayer beads.",
            surroundings: "Surroundings",
            surdesc: "A path scattered with shell grit leads to the Old Head Signal Tower — its white tower stands watch over the sea since the Napoleonic era. A little further, beyond a field of spiny gorse, hides The Speckled Door — a tiny pub locals call 'the last house before America'. If you take the southern trail, you'll reach the 'Singing Cliff' — a place where the wind plays in stone fissures like a giant flute. Wild orchids bloom in the cracks there.",
            mapt: "Map of the area",
            text_part_1: "1. Best time to visit:\na) Early morning – the whole beach to yourself\nb) Sunset – magical photos with bioluminescence (July–August)",
            text_part_2: "2. Bring binoculars to spot dolphins near the headland",
            text_part_3: "3. Don't swim near the rocks — dangerous currents",
            text_part_4: "4. Avoid black rocks after rain — they become slippery",
            text_part_5: "5. No changing cabins on the beach — wear your swimsuit under clothes.",
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
