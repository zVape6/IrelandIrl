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

    
    const texts = {
        ru: {
            button: "Перевод",
            about: "О Дублинском замке",
            desc: "Собор Христа — древнее сердце Дублина, где камни помнят викингов и королей. Его история началась в 1030 году, когда король викингов Ситрик Шелкобородый построил здесь первую деревянную церковь. Норманны в XII веке перестроили её в каменную готическую крепость веры, которая и сегодня поражает массивными колоннами и стрельчатыми арками. Главное сокровище скрыто под землёй — крипта XI века, старейшая в Ирландии. В её полумраке хранятся удивительные реликвии: мумифицированные кошка и крыса, застывшие в вечной погоне, средневековые церковные сосуды и даже каменная табличка с проклятием ворам. Надгробие рыцаря Томаса Фицджеральда XIV века до сих пор будоражит воображение. Собор пережил века забвения — в XVII столетии рухнувшая крыша оставила его без кровли на 200 лет, пока виски-магнат Генри Роур не подарил храму нынешний неоготический облик. Сегодня под его сводами звучат не только молитвы, но и концерты органной музыки. Особый колорит придают курьёзы истории. В 1487 году здесь короновали 10-летнего самозванца Ламберта Симнела, разыгравшего фарс с престолонаследием. А в XIX веке реставраторы обнаружили, что пол собора на метр ниже улицы — теперь в него спускаются по лестнице.",
            surroundings: "Окрестности",
            surdesc: "Район вокруг Дублинского замка — отличное место для знакомства с историческим центром города. Рядом находятся оживлённые улицы с пабами, музеями и магазинами. В пешей доступности — знаменитая Grafton Street и собор Святого Патрика. Атмосфера здесь оживлённая и туристически насыщенная.",
            mapt: "Карта района",
            text_part_1: "1.а)Приходите к открытию (9:30-10:00) или после 15:00, чтобы избежать групп туристов",
            text_part_2: "б)Вечерние посещения (после 17:00) особенно атмосферны - мягкий свет через витражи создает волшебную атмосферу",
            text_part_3: "2. Лучшие ракурсы:",
            text_part_4: "а)Вид с моста на крышу собора",
            text_part_5: "б)Лестница в нефе при боковом освещении",
            text_part_6: "в)Отражение в окнах соседних зданий",
            text_part_7: "3. После посещения можно посетить Кафе 'Christ Church View' и сувенирный магазин.",
            text_part_8: "4.Собор остается действующим храмом - соблюдайте тишину во время служб. Лучшие впечатления получаются, если выделить на посещение не менее 1,5 часов."
        },
        en: {
            button: "Translate to Russian",
            about: "About Dublin Castle",
            desc: "Dublin Castle is the historic heart of the Irish capital. Built in the 13th century on the site of an ancient Viking fortification, it served as the seat of British power in Ireland. Today, the castle is a popular attraction with magnificent halls, museums and gardens reflecting the country's rich past.",
            surroundings: "Surroundings",
            surdesc: "The area around Dublin Castle is a great place to explore the historic city center. It is close to lively streets with pubs, museums and stores. The famous Grafton Street and St. Patrick's Cathedral are within walking distance. The atmosphere is lively and touristy.",
            mapt: "Map of the area",
            text_part_1: "1.a)Come at opening time (9:30-10:00) or after 3:00 PM to avoid tourist groups",
            text_part_2: "b)Evening visits (after 5:00 PM) are especially atmospheric - the soft light through the stained glass creates a magical ambiance",
            text_part_3: "2. Best angles:",
            text_part_4: "a)View of the cathedral roof from the bridge",
            text_part_5: "b)The staircase in the nave with side lighting",
            text_part_6: "c)Reflection in neighboring buildings' windows",
            text_part_7: "3. After your visit, you can check out 'Christ Church View' Café and the gift shop",
            text_part_8: "4.The cathedral remains an active place of worship - maintain silence during services. For the best experience, allocate at least 1.5 hours for your visit."
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
        localStorage.setItem('language', currentLanguage);
    }
    
    if (translateButton) {
        translateButton.addEventListener('click', () => {
            translate();
        });
    }
    });