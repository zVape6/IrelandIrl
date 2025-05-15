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
            about: "О Великой западной зелёной тропе",
            desc: "Старые рельсы давно исчезли, но дух железной дороги XIX века витает над Great Western Greenway. Эта 44-километровая велодорожка, проложенная по бывшей линии Westport-Achill, словно машина времени — от буковых туннелей до открытых ветрам болот. В Mulranny парк становится театром: рыжие лисы перебегают тропу, не обращая внимания на велосипедистов, а в заболоченных местах трясогузки танцуют на тростинках.",
            surroundings: "Окрестности",
            surdesc: "В двух километрах от Вестпорта тропа проходит мимо полузабытой станции, где ржавые рельсы все еще торчат из земли, а в бывшем станционном доме теперь живет художник, выставляющий картины на старых дверях вагонов. Возле Ньюпорта дорогу пересекает \"виадук шепота\" — каменный мост, где эхо повторяет слова семь раз. Местные мальчишки уверяют, что если крикнуть здесь имя возлюбленной, брак будет крепким. Эти места не указаны на картах, но именно они делают Greenway не просто маршрутом, а путешествием во времени, где каждый камень рассказывает историю.",
            mapt: "Карта района",
            text_part_1: "1. Берите гибридные или gravel-велосипеды — дорога гравийная",
            text_part_2: "2. Время года: май-сентябрь (меньше дождей). Избегайте августа — много туристов.",
            text_part_3: "3. В Visitor Centre (Westport) возьмите бесплатный буклет с историями о старой железной дороге — они сделают поездку в разы интереснее!",
            text_part_4: "4. Если устали — можно уехать обратно на автобусе 450 (перевозит велосипеды).",
            tips: "Советы"
        },
        en: {
            button: "Translate",
            about: "About the Great Western Greenway",
            desc: "The old rails are long gone, but the spirit of the 19th-century railway lingers over the Great Western Greenway. This 44-kilometer bike trail, laid out along the former Westport-Achill line, feels like a time machine — from beech tunnels to wind-swept bogs. In Mulranny, the park becomes a theater: red foxes cross the trail ignoring cyclists, while wagtails dance on reeds in the marshes.",
            surroundings: "Surroundings",
            surdesc: "Two kilometers from Westport, the trail passes a half-forgotten station where rusty rails still protrude from the ground, and an artist now lives in the old station house, displaying paintings on old carriage doors. Near Newport, the path crosses the 'Whispering Viaduct' — a stone bridge where echoes repeat words seven times. Local boys claim that if you shout your beloved’s name here, your marriage will be strong. These spots are not on the map, but they make the Greenway more than just a route — a journey through time where every stone tells a story.",
            mapt: "Map of the area",
            text_part_1: "1. Use hybrid or gravel bikes — the road is gravel.",
            text_part_2: "2. Best time: May to September (less rain). Avoid August — too many tourists.",
            text_part_3: "3. At the Visitor Centre (Westport), grab a free booklet with stories about the old railway — it’ll make your ride much more engaging!",
            text_part_4: "4. If tired — take bus 450 back (it carries bikes).",
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
