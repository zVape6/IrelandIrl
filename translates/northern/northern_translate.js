document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById('translateButton');
    const title = document.getElementById('title');
    const intro = document.getElementById('intro');
    const loc1 = document.getElementById('loc1');
    const best_time1 = document.getElementById('best_time1');
    const best_places1 = document.getElementById('best_places1');
    const loc2 = document.getElementById('loc2');
    const best_time2 = document.getElementById('best_time2');
    const best_places2 = document.getElementById('best_places2');
    const loc3 = document.getElementById('loc3');
    const best_time3 = document.getElementById('best_time3');
    const best_places3 = document.getElementById('best_places3');
    const learnMoreButtons = document.querySelectorAll('.btn[id="learn_more"]');

    const texts = {
        ru: {
            button: "Перевод",
            title: "Северная Ирландия",
            intro: "Северная Ирландия — край легенд и контрастов. Здесь древние стены Дерри хранят многовековые истории, а в Белфасте, где строили 'Титаник', кипит современная жизнь. Это земля, где каждая тропа ведёт к мифам — как Тропа Великана, а каждый замок, будь то Данлюс или Каррикфергус, дышит стариной. Капризный климат создаёт изумрудные пейзажи, а в пабах Белфаста и Дерри до утра звучат волынки и скрипки. Это место, где политические муралы соседствуют с современным искусством, а местные жители с радостью угостят вас 'Гиннессом' и расскажут байки о лепреконах. Путешествие сюда — погружение в живую историю. Разговоры с местными, их искромётный юмор и страсть к жизни сделают вашу поездку незабываемой. И помните: в Северной Ирландии нет плохой погоды — только недостаточно тёплая куртка!",
            loc1: "Белфаст",
            best_time1: "Лучшее время для посещения: Июнь-август",
            best_places1: "Лучшие места: крепости, выставки, парки",
            loc2: "Дерри",
            best_time2: "Лучшее время для посещения: Июль–август",
            best_places2: "Лучшие места: соборы, театры, музеи",
            loc3: "Арма",
            best_time3: "Лучшее время для посещения: Май–июнь",
            best_places3: "Лучшие места: зоопарки, площади, соборы",
            learn_more: "Узнать больше"
        },
        en: {
            button: "Translate",
            title: "Northern Ireland",
            intro: "Northern Ireland is a land of legends and contrasts. Here, the ancient walls of Derry hold centuries-old stories, while in Belfast, where the Titanic was built, modern life thrives. This is a land where every path leads to myths—like the Giant's Causeway—and every castle, whether Dunluce or Carrickfergus, breathes with antiquity. The capricious climate creates emerald landscapes, while in the pubs of Belfast and Derry, bagpipes and fiddles play until dawn. It's a place where political murals coexist with contemporary art, and locals will gladly treat you to Guinness and tell tales of leprechauns. A journey here is an immersion in living history. Conversations with locals, their sparkling humor and passion for life will make your trip unforgettable. And remember: there's no bad weather in Northern Ireland—just insufficiently warm jackets!",
            loc1: "Belfast",
            best_time1: "Best time to visit: June-August",
            best_places1: "Top attractions: fortresses, exhibitions, parks",
            loc2: "Derry",
            best_time2: "Best time to visit: July–August",
            best_places2: "Top attractions: cathedrals, theaters, museums",
            loc3: "Armagh",
            best_time3: "Best time to visit: May–June",
            best_places3: "Top attractions: zoos, squares, cathedrals",
            learn_more: "Learn more"
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
        title.textContent = texts[currentLanguage].title;
        intro.textContent = texts[currentLanguage].intro;
        loc1.textContent = texts[currentLanguage].loc1;
        best_time1.textContent = texts[currentLanguage].best_time1;
        best_places1.textContent = texts[currentLanguage].best_places1;
        loc2.textContent = texts[currentLanguage].loc2;
        best_time2.textContent = texts[currentLanguage].best_time2;
        best_places2.textContent = texts[currentLanguage].best_places2;
        loc3.textContent = texts[currentLanguage].loc3;
        best_time3.textContent = texts[currentLanguage].best_time3;
        best_places3.textContent = texts[currentLanguage].best_places3;
        learnMoreButtons.forEach(button => {
            button.textContent = texts[currentLanguage].learn_more;
        });

        localStorage.setItem('language', currentLanguage);
    }

    if (translateButton) {
        translateButton.addEventListener('click', () => {
            translate();
        });
    }

    translateButton.textContent = texts[currentLanguage].button;
    title.textContent = texts[currentLanguage].title;
    intro.textContent = texts[currentLanguage].intro;
    loc1.textContent = texts[currentLanguage].loc1;
    best_time1.textContent = texts[currentLanguage].best_time1;
    best_places1.textContent = texts[currentLanguage].best_places1;
    loc2.textContent = texts[currentLanguage].loc2;
    best_time2.textContent = texts[currentLanguage].best_time2;
    best_places2.textContent = texts[currentLanguage].best_places2;
    loc3.textContent = texts[currentLanguage].loc3;
    best_time3.textContent = texts[currentLanguage].best_time3;
    best_places3.textContent = texts[currentLanguage].best_places3;
    learnMoreButtons.forEach(button => {
        button.textContent = texts[currentLanguage].learn_more;
    });
});