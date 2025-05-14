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
    const text_part_7 = document.getElementById('text_part_7');
    const text_part_8 = document.getElementById('text_part_8');
    const tips = document.getElementById('tips');

    
    const texts = {
        ru: {
            button: "Перевод",
            about: "О Соборе Христа",
            desc: "Собор Христа — древнее сердце Дублина, где камни помнят викингов и королей. Его история началась в 1030 году, когда король викингов Ситрик Шелкобородый построил здесь первую деревянную церковь. Норманны в XII веке перестроили её в каменную готическую крепость веры, которая и сегодня поражает массивными колоннами и стрельчатыми арками. Главное сокровище скрыто под землёй — крипта XI века, старейшая в Ирландии. В её полумраке хранятся удивительные реликвии: мумифицированные кошка и крыса, застывшие в вечной погоне, средневековые церковные сосуды и даже каменная табличка с проклятием ворам. Надгробие рыцаря Томаса Фицджеральда XIV века до сих пор будоражит воображение. Собор пережил века забвения — в XVII столетии рухнувшая крыша оставила его без кровли на 200 лет, пока виски-магнат Генри Роур не подарил храму нынешний неоготический облик. Сегодня под его сводами звучат не только молитвы, но и концерты органной музыки. Особый колорит придают курьёзы истории. В 1487 году здесь короновали 10-летнего самозванца Ламберта Симнела, разыгравшего фарс с престолонаследием. А в XIX веке реставраторы обнаружили, что пол собора на метр ниже улицы — теперь в него спускаются по лестнице.",
            surroundings: "Окрестности",
            surdesc: "Спускаясь по древним ступеням Собора Христа, словно перелистываешь страницы живой истории. Прямо у выхода вас встретит арочный мост, ведущий в Дублинию — музей. Повернув за угол, вы упрётесь в паб 'The Lord Edward' — здесь за дубовыми столами уже два века ведутся споры о политике под аккомпанемент банджо. А через дорогу, в узком переулке Winetavern Street, спряталась настоящая средневековая лестница XII века. Особую атмосферу создаёт контраст: ультрасовременные граффити на стенах георгианских особняков, уличные музыканты, исполняющие кельтские баллады у подножия памятника жертвам голода, модные бариста в старинных зданиях с витражами. Совет для атмосферной прогулки: Начните утром с собора, затем — кофе в «Queen of Tarts» (их лимонный тарт — легенда), после обеда исследуйте крипту, а к вечеру устройте «паб-кросс» по маршруту: The Lord Edward → The Norseman → The Brazen Head.",
            mapt: "Карта района",
            text_part_1: "1.а)Приходите к открытию (9:30-10:00) или после 15:00, чтобы избежать групп туристов",
            text_part_2: "б)Вечерние посещения (после 17:00) особенно атмосферны - мягкий свет через витражи создает волшебную атмосферу",
            text_part_3: "2. Лучшие ракурсы:",
            text_part_4: "а)Вид с моста на крышу собора",
            text_part_5: "б)Лестница в нефе при боковом освещении",
            text_part_6: "в)Отражение в окнах соседних зданий",
            text_part_7: "3. После посещения можно посетить Кафе 'Christ Church View' и сувенирный магазин.",
            text_part_8: "4.Собор остается действующим храмом - соблюдайте тишину во время служб. Лучшие впечатления получаются, если выделить на посещение не менее 1,5 часов.",
            tips: "Советы"
        },
        en: {
            button: "Translate",
            about: "About Christ Cathedral",
            desc: "Christ Church Cathedral is the ancient heart of Dublin, where the stones remember Vikings and kings. Its history began in 1030, when the Viking king Sitric the Silkbeard built the first wooden church here. The Normans rebuilt it in the 12th century into a stone Gothic fortress of faith, which still impresses today with its massive columns and lancet arches. The main treasure is hidden underground - the 11th century crypt, the oldest in Ireland. In its semi-darkness are kept amazing relics: a mummified cat and a rat, frozen in eternal pursuit, medieval church vessels and even a stone tablet with a curse to thieves. The 14th-century tombstone of the knight Thomas Fitzgerald still stirs the imagination. The cathedral has survived centuries of neglect - in the XVII century, a collapsed roof left it roofless for 200 years, until whisky magnate Henry Roar gave it its present neo-Gothic appearance. Today, not only prayers but also organ concerts are held under its arches. Curiosities of history give a special flavor. In 1487 the 10-year-old impostor Lambert Simnela, who played a farce with the succession to the throne, was crowned here. And in the XIX century restorers discovered that the floor of the cathedral is one meter lower than the street - now it is descended by stairs.",
            surroundings: "Surroundings",
            surdesc: "Walking down the ancient steps of Christ Church Cathedral is like turning the pages of living history. Right at the exit, you'll be greeted by an arched bridge leading to the Dublinia Museum. As you turn the corner, you'll come to The Lord Edward pub, where two centuries of banjo-led debates about politics have been taking place at oak tables. And across the street, in the narrow alley Winetavern Street, a real medieval staircase of XII century is hidden. The contrasts create a special atmosphere: ultra-modern graffiti on the walls of Georgian mansions, street musicians performing Celtic ballads at the foot of the monument to the victims of famine, trendy baristas in old buildings with stained glass windows. Tip for an atmospheric walk: Start at the cathedral in the morning, then have coffee at Queen of Tarts (their lemon tart is legendary), explore the crypt in the afternoon, and in the evening do a pub-cross along the route: The Lord Edward → The Norseman → The Brazen Head.",
            mapt: "Map of the area",
            text_part_1: "1.a)Come at opening time (9:30-10:00) or after 3:00 PM to avoid tourist groups",
            text_part_2: "b)Evening visits (after 5:00 PM) are especially atmospheric - the soft light through the stained glass creates a magical ambiance",
            text_part_3: "2. Best angles:",
            text_part_4: "a)View of the cathedral roof from the bridge",
            text_part_5: "b)The staircase in the nave with side lighting",
            text_part_6: "c)Reflection in neighboring buildings' windows",
            text_part_7: "3. After your visit, you can check out 'Christ Church View' Café and the gift shop",
            text_part_8: "4.The cathedral remains an active place of worship - maintain silence during services. For the best experience, allocate at least 1.5 hours for your visit.",
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
        text_part_7.textContent = texts[currentLanguage].text_part_7;
        text_part_8.textContent = texts[currentLanguage].text_part_8;
        tips.textContent = texts[currentLanguage].tips;
        localStorage.setItem('language', currentLanguage);
    }
    
    if (translateButton) {
        translateButton.addEventListener('click', () => {
            translate();
        });
    }
    });