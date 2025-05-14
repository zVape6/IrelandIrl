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
    const text_part_6 = document.getElementById('text_part_6');
    const tips = document.getElementById('tips');

    
    const texts = {
        ru: {
            button: "Перевод",
            about: "О Феникс-парке",
            desc: "Утро в Феникс-парке начинается с тумана, стелющегося между древними дубами, и тихого топота оленьих стад, бредущих к озеру. Эти 700 гектаров зелени — не просто парк, а целый мир, где время течёт по своим законам. Главные обитатели парка — не только олени. В тени Аштаунского замка резвятся лисицы, на озерах гнездятся зимородки, а по вечерам в зарослях слышны таинственные шорохи барсуков. Дети обожают зоопарк с рыжими пандами, а взрослые — бесконечные велодорожки, ведущие к секретным полянам. Особое очарование — паб 'Hole in the Wall' у главных ворот. С 1650 года здесь усталые путники отдыхают за пинтой под аккомпанемент скрипки. А если задержаться до заката, можно увидеть, как последние лучи солнца окрашивают луга в цвет тёмного эля. Это место, где Дублин сбрасывает городские оковы и становится частью древнего природного ритма.",
            surroundings: "Окрестности",
            surdesc: "В двух шагах от парка, на северной границе, притаился «Аштаунский замок» — бывший охотничий домик, где теперь учат искусству верховой езды. Чуть дальше, за тенистыми дубами, стоит скромный обелиск в честь Веллингтона — он родился буквально через дорогу от этих мест. С южной стороны парка начинается оживлённый район Чапелизайд: здесь в пабе «The Hole in the Wall» с 1650 года подают портеры для уставших путников. А если свернуть к реке Лиффи, можно обнаружить заброшенную пристань, откуда когда-то отправлялись гружёные ячменем баржи на пивоварни Гиннесса.",
            mapt: "Карта района",
            text_part_1: "1.Лучшее время для визита:",
            text_part_2: "а)Рассвет (5-7 утра) - шанс увидеть оленей в тумане без толп",
            text_part_3: "б)Передвигаться лучше на велосипедах, которые можно арендовать у главного входа (€5/час).",
            text_part_4: "3.Не подходите ближе 50 м к оленям в брачный период (сентябрь-октябрь)",
            text_part_5: "4.Велосипедистам - остерегаться внезапно выбегающих фазанов",
            text_part_6: "5.Выделите минимум 4 часа - парк огромен, а его магия раскрывается неспешно. Лучший маршрут: резиденция президента → олени → Аштаунский замок → паб Hole in the Wall.",
            tips: "Советы"
        },
        en: {
            button: "Translate",
            about: "About Phoenix Park",
            desc: "Mornings in Phoenix Park begin with the mist between the ancient oaks and the quiet stomping of deer herds wandering to the lake. These 700 hectares of greenery are not just a park, but a whole world where time flows according to its own laws. The main inhabitants of the park are not only deer. Foxes frolic in the shadow of Ashtown Castle, kingfishers nest in the lakes, and in the evenings you can hear the mysterious rustling of badgers in the thickets. Children love the zoo with red pandas, and adults love the endless bicycle paths leading to secret glades. A special charm is the ‘Hole in the Wall’ pub at the main gate. Since 1650 tired travelers have been relaxing here with a pint accompanied by a fiddle. And if you linger until sunset, you can see the last rays of the sun coloring the meadows with the color of dark ale. This is the place where Dublin throws off its urban shackles and becomes part of nature's ancient rhythm.",
            surroundings: "Surroundings",
            surdesc: "A stone's throw from the park, on the northern boundary, lurks Ashtown Castle, a former hunting lodge that now teaches the art of horseback riding. A little further on, behind shady oaks, stands a modest obelisk in honor of Wellington - he was born literally across the street from these places. On the south side of the park is the lively Chapelizide district, where The Hole in the Wall pub has been serving porter to weary travelers since 1650. If you turn towards the River Liffey, you'll find a disused wharf, where bargeloads of barley were once shipped to the Guinness breweries.",
            mapt: "Map of the area",
            text_part_1: "1.Best time to visit:",
            text_part_2: "a)Dawn (5-7 a.m.) - a chance to see deer in the fog without crowds",
            text_part_3: "b)The best way to get around is on bicycles, which can be rented at the main entrance (€5/hour).",
            text_part_4: "3.Do not go closer than 50 m to reindeer during mating season (September-October)",
            text_part_5: "4.Bicyclists - beware of pheasants running out of sight",
            text_part_6: "5.Allocate at least 4 hours - the park is huge and its magic unfolds at a leisurely pace. Best route: President's residence → deer → Ashtown Castle → Hole in the Wall pub.",
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
        text_part_6.textContent = texts[currentLanguage].text_part_6;
        tips.textContent = texts[currentLanguage].tips;

        localStorage.setItem('language', currentLanguage);
    }
    
    if (translateButton) {
        translateButton.addEventListener('click', () => {
            translate();
        });
    }
    });