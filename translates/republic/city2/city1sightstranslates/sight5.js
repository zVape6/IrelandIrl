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
    const tips = document.getElementById('tips');

    
    const texts = {
        ru: {
            button: "Перевеод",
            about: "О Библиотеке Честера Битти",
            desc: "В тени Дублинского замка скрыта скромная дверь, ведущая в сокровищницу манускриптов. Здесь собраны шедевры, которые американский коллекционер Честер Битти завещал Ирландии. В тихих залах хранятся древние папирусы с египетскими любовными стихами, средневековые европейские часословы и изящные исламские миниатюры. Особое место занимает одна из первых Библий - хрупкие страницы возрастом 1600 лет. Секретное очарование библиотеки - её интимная атмосфера. Нет толп туристов, только шелест страниц и мягкий свет, выхватывающий золото миниатюр. На верхнем этаже - тихий сад с видом на замок, где можно осмыслить увиденное. Это место для тех, кто верит, что настоящие чудеса скрыты не в громких музеях, а в тихих комнатах с древними книгами.",
            surroundings: "Окрестности",
            surdesc: "Выйдя из тихих залов библиотеки, вы сразу попадаете в водоворот городской жизни.  Прямо за дверями раскинулись сады Дублинского замка. Повернув налево, вы окажетесь на улице Дейм-стрит — одной из старейших в городе. Здесь в антикварной лавке 'Рукописи' можно найти винтажные открытки XIX века, а в крошечной кофейне 'Брюстер' подают тот самый кофе, который любил Честер Битти. Если пройти дальше, откроется вид на собор Христа. А в переулке Уэрхаус-ярд спрятался необычный музей полиции с коллекцией конфискованных артефактов — от средневековых подделок до оружия ирландских повстанцев.",
            mapt: "Карта района",
            text_part_1: "1. Лучше приходить к открытию (10:00) или после 14:00",
            text_part_2: "2. Бесплатные аудиогиды на 8 языках, а также каждую субботу в 13:00 - бесплатная экскурсия от куратора.",
            text_part_3: "3. После посещения можно Купите репродукции миниатюр в магазине (от €5)",
            tips: "Советы"
        },
        en: {
            button: "Translate",
            about: "About Chester Beatty Library",
            desc: "Hidden in the shadow of Dublin Castle is a modest door leading to a treasure trove of manuscripts. Here are the masterpieces that American collector Chester Beatty bequeathed to Ireland. Ancient papyri with Egyptian love poems, medieval European hour books and elegant Islamic miniatures are kept in the quiet halls. A special place is occupied by one of the first Bibles - fragile pages 1,600 years old. The secret charm of the library is its intimate atmosphere. There are no crowds of tourists, just the rustling of pages and soft light that brings out the gold of the miniatures. On the top floor is a quiet garden overlooking the castle, where you can reflect on what you've seen. This is a place for those who believe that the real wonders are hidden not in loud museums, but in quiet rooms with ancient books.",
            surroundings: "Surroundings",
            surdesc: "Stepping out of the quiet halls of the library, you are immediately caught up in the whirlwind of city life.  Just outside the doors are the gardens of Dublin Castle. Turn left and you'll find yourself on Dame Street, one of the oldest streets in the city. Here you'll find vintage postcards from the 19th century in the antique shop ‘Manuscripts’, and the tiny Brewster coffee shop serves the coffee that Chester Beatty loved. If you walk further along, you'll get a view of Christ Church Cathedral. And hidden away in Warehouse Yard Lane is an unusual police museum with a collection of confiscated artifacts ranging from medieval forgeries to Irish rebel weapons.",
            mapt: "Map of the area",
            text_part_1: "1. it is better to come at the opening (10:00) or after 14:00.",
            text_part_2: "2. Free audio guides in 8 languages, and every Saturday at 1:00 p.m., a free tour from the curator.",
            text_part_3: "3. After the visit you can Buy reproductions of the miniatures in the store (from €5)",
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
        tips.textContent = texts[currentLanguage].tips;

        localStorage.setItem('language', currentLanguage);
    }
    
    if (translateButton) {
        translateButton.addEventListener('click', () => {
            translate();
        });
    }
    });