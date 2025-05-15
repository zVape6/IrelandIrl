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
            about: "О бульваре The Mall",
            desc: "Утро на The Mall начинается с шелеста листьев плакучих ив, склоняющихся к зеркальной глади реки Карроубег. Этот элегантный бульвар, построенный в XVIII веке, — сердце Вестпорта, где время течет медленнее, а каждый камень дышит историей. По утрам здесь открывается антикварная лавка, где среди старинных карт можно найти потрепанный томик Йейтса за пару евро. Днем на мостах собираются художники, пытаясь поймать игру света на воде. К вечеру The Mall преображается: газовые фонари зажигают золотистый свет, отбрасывая романтичные тени на брусчатку. The Mall - не просто улица, а живая история.",
            surroundings: "Окрестности",
            surdesc: "Пройдя два квартала на запад, выходишь к речному причалу. Здесь рыбаки разгружают улов, а в кафе 'The Quay Cottage' подают устриц с видом на залив Клю. По утрам от сюда отходят лодки к островам — если повезёт, капитан расскажет легенду о 365 островах, по одному на каждый день года. А если подняться по извилистой тропке за последним фонарём The Mall, откроется неожиданный вид: весь город как на ладони, с дымком из труб и золотыми куполами церквей.",
            mapt: "Карта района",
            text_part_1: "1. Время для идеальных фото: а) Раннее утро (7-8 часов) - мягкий свет и минимум людей б) Золотой час перед закатом - теплые оттенки на георгианских фасадах",
            text_part_2: "2. Во время прогулки обязательно посетите уютное кафе с видом на реку The Quay Cottage",
            text_part_3: "3. В мае красиво цветет вишни вдоль набережной",
            text_part_4: "4. Присядьте на одну из чугунных скамеек у воды, закройте глаза и просто слушайте - журчание реки, крики чаек, смех детей и далекие аккорды скрипки создадут настоящую ирландскую симфонию.",
            tips: "Советы"
        },
        en: {
            button: "Translate",
            about: "About The Mall",
            desc: "Morning on The Mall begins with the rustle of weeping willow leaves bending over the mirror-like surface of the Carrowbeg River. This elegant boulevard, built in the 18th century, is the heart of Westport where time flows slower and every stone breathes history. In the mornings, an antique shop opens here where among old maps you can find a worn volume of Yeats for a couple of euros. During the day, artists gather on the bridges trying to capture the play of light on water. By evening, The Mall transforms: gas lamps cast golden light, throwing romantic shadows on the cobblestones. The Mall is not just a street, but living history.",
            surroundings: "Surroundings",
            surdesc: "Walking two blocks west brings you to the river pier. Here fishermen unload their catch, and the café 'The Quay Cottage' serves oysters with views of Clew Bay. In the mornings, boats depart from here to the islands - if you're lucky, the captain will tell the legend of 365 islands, one for each day of the year. And if you climb the winding path beyond the last lamp of The Mall, an unexpected view opens up: the whole town spread out below, with chimney smoke and golden church domes.",
            mapt: "Map of the area",
            text_part_1: "1. Best times for photos: a) Early morning (7-8 AM) - soft light and few people b) Golden hour before sunset - warm hues on Georgian facades",
            text_part_2: "2. During your walk, be sure to visit the cozy riverside café The Quay Cottage",
            text_part_3: "3. In May, the cherry blossoms along the embankment are beautiful",
            text_part_4: "4. Sit on one of the cast-iron benches by the water, close your eyes and just listen - the babbling river, seagull cries, children's laughter and distant violin chords create a true Irish symphony.",
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