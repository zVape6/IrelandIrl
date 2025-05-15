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
            about: "Об усадьбе Вестпорт",
            desc: "За изумрудными лужайками и вековыми дубами прячется белоснежный особняк, чьи стены помнят шепот заговоров и звон бокалов на балах. Westport House, построенный в XVIII веке на месте замка XVI столетия, — живая легенда Ирландии. Здесь жила Грейс О'Мэлли, «королева пиратов», чей призрак, говорят, до сих пор бродит по винтовой лестнице в башне. Бальные залы с хрустальными люстрами соседствуют с пиратскими артефактами — картами сокровищ, старинными мушкетами и даже деревянной ногой капитана. Дети обожают подземелья, где «пленники» в восковых фигурах жалобно стонут за решетками. Это не просто музей, а портал в прошлое, где каждый уголок шепчет: «Добро пожаловать в эпоху пиратов и аристократов».",
            surroundings: "Окрестности",
            surdesc: "Всего в пяти минутах ходьбы от парадных ворот усадьбы река Карроубег, обрамленная плакучими ивами, петляет мимо георгианских домиков The Mall — их пастельные фасады отражаются в воде, как акварельные мазки. Повернув за угол, вы попадете на Westport Quay — бывший торговый порт, где теперь швартуются яхты. Вечером стоит вернуться к реке — когда зажигаются фонари на The Mall, кажется, будто время повернуло вспять, и вот-вот из ворот усадьбы выедет карета с гербом клана О'Мэлли.",
            mapt: "Карта района",
            text_part_1: "1. Лучшее время: утро (10:00–12:00) или будние дни — меньше туристов.",
            text_part_2: "2. Посетите ночные экскурсии с фонарями (только летом, бронь заранее).",
            text_part_3: "3. После можно приобрести копии пиратских карт (от €10) и местный мед.",
            text_part_4: "4. В конце визита поднимитесь на холм за домом — оттуда лучший вид на особняк и залив Клю!",
            tips: "Советы"
        },
        en: {
            button: "Translate",
            about: "About Westport House",
            desc: "Behind emerald lawns and ancient oaks hides a snow-white mansion whose walls remember the whispers of conspiracies and the clinking of glasses at balls. Westport House, built in the 18th century on the site of a 16th-century castle, is a living legend of Ireland. It was home to Grace O'Malley, the 'Pirate Queen', whose ghost is said to still wander the spiral staircase in the tower. Ballrooms with crystal chandeliers coexist with pirate artifacts - treasure maps, antique muskets, and even a captain's wooden leg. Children love the dungeons where wax figure 'prisoners' moan pitifully behind bars. This is not just a museum, but a portal to the past where every corner whispers: 'Welcome to the era of pirates and aristocrats'.",
            surroundings: "Surroundings",
            surdesc: "Just a five-minute walk from the estate's front gates, the Carrowbeg River, framed by weeping willows, meanders past Georgian houses of The Mall - their pastel facades reflected in the water like watercolor strokes. Turning the corner, you'll find yourself at Westport Quay - a former trading port where yachts now moor. In the evening, it's worth returning to the river - when the lanterns on The Mall light up, it feels as if time has turned back, and a carriage with the O'Malley clan crest is about to emerge from the estate gates.",
            mapt: "Map of the area",
            text_part_1: "1. Best time: morning (10:00 AM–12:00 PM) or weekdays - fewer tourists.",
            text_part_2: "2. Take night lantern tours (summer only, book in advance).",
            text_part_3: "3. Afterwards, you can buy replica pirate maps (from €10) and local honey.",
            text_part_4: "4. At the end of your visit, climb the hill behind the house - the best view of the mansion and Clew Bay!",
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