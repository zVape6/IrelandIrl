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
            about: "О Тюрьме Килмэйнхем",
            desc: "В холодное утро 3 мая 1916 года в тюремном дворе раздались винтовочные залпы. Так погибли лидеры Пасхального восстания — враги короны, ставшие национальными героями. Эта сцена навсегда вписала Килмэйнхем в историю Ирландии. Тюрьма открылась в 1796 году как 'образцовый' викторианский исправительный дом, но быстро превратилась в ад на земле. В крошечных камерах без окон зимой замерзала вода, а летом воздух становился спёртым. Здесь содержали всех — от малолетних воришек (самому юному было 5 лет) до политических заключённых. Особую атмосферу чувствуешь в часовне, где на рассвете перед казнью обвенчались Джозеф Планкетт и его невеста Грейс Гиффорд. Их брак длился всего 10 минут. На стене до сих пор висит трогательный рисунок — профиль Грейс, нацарапанный Джозефом в последнюю ночь. В восточном крыле сохранились уникальные граффити XIX века: имена заключённых, кораблики и кресты. В западном крыле — одиночные камеры, где бунтарей держали в полной тишине. А в музее выставлены личные вещи: письма, пряди волос, самодельные игральные карты. Во дворе казней. Именно здесь расстреляли 14 повстанцев 1916 года, чья гибель переломила общественное мнение в пользу независимости. Сегодня здесь всегда лежат свежие цветы.",
            surroundings: "Окрестности",
            surdesc: "После экскурсии по мрачным коридорам тюрьмы, где когда-то томились борцы за независимость, выходишь на свет — и Дублин встречает тебя контрастами. В двух шагах — Ирландский музей современного искусства в здании старинного госпиталя: среди его авангардных инсталляций так странно вспоминать о тюремных камерах. Район вокруг Килмэйнхема — как книга: перелистываешь страницу от мрака к свету, от прошлого к настоящему. И понимаешь, что именно здесь бьётся настоящее сердце Ирландии.",
            mapt: "Карта района",
            text_part_1: "1. Возьмите ветровку или дождевик – часть маршрута проходит через открытый двор казней, где может быть сыро и ветрено.",
            text_part_2: "2. Лучше ехать в утренние часы (9:00–11:00) – меньше туристов, более атмосферно.",
            text_part_3: "3. После экскурсии зайдите в тюремное кафе 'The Bakery' — их 'тюремный хлеб' по старинному рецепту неожиданно вкусен.",
            text_part_4: "4. Если вы интересуетесь историей, уточните у гида про 'особые маршруты' – иногда открывают закрытые зоны.",
            text_part_5: "Килмэйнхем – место, которое не оставляет равнодушным.",
            tips: "Советы"
        },
        en: {
            button: "Translate",
            about: "About Kilmainham Gaol",
            desc: "On the cold morning of May 3, 1916, rifle volleys rang out in the prison yard. This was the death of the leaders of the Easter Rising, enemies of the crown who had become national heroes. This scene forever inscribed Kilmainham in Irish history. The prison opened in 1796 as a “model” Victorian house of correction, but quickly became a hell on earth. In the tiny windowless cells, the water froze in winter and the air became stifling in summer. Everyone was kept here - from juvenile thieves (the youngest was 5 years old) to political prisoners. A special atmosphere is felt in the chapel where Joseph Plunkett and his bride Grace Gifford were married at dawn before his execution. Their marriage lasted only 10 minutes. A touching drawing still hangs on the wall - Grace's profile, scratched by Joseph on the last night. In the east wing there are unique graffiti of the XIX century: names of prisoners, ships and crosses. The west wing contains solitary confinement cells where the rebels were kept in complete silence. And the museum exhibits personal belongings: letters, strands of hair, homemade playing cards. The execution yard. It was here that 14 rebels of 1916 were shot, whose deaths turned public opinion in favor of independence. Today, fresh flowers always lie here.",
            surroundings: "Surroundings",
            surdesc: "After a tour through the gloomy corridors of the prison where the independence fighters once languished, you step out into the light and Dublin welcomes you with contrasts. A stone's throw away is the Irish Museum of Modern Art in an old hospital building: amid its avant-garde installations, it's strange to think of prison cells. The area around Kilmainham is like a book: you turn the page from darkness to light, from past to present. And you realize that this is where the real heart of Ireland beats.",
            mapt: "Map of the area",
            text_part_1: "1. Take a windbreaker or raincoat - part of the route passes through the open courtyard of the executions, where it can be wet and windy.",
            text_part_2: "2. it is better to go in the morning hours (9:00-11:00) - less tourists, more atmospheric.",
            text_part_3: "3. After the tour, stop by the prison cafe ‘The Bakery’ - their ‘prison bread’ using an old recipe is unexpectedly delicious.",
            text_part_4: "4. If you are interested in history, check with your guide about ‘special routes’ - sometimes they open closed areas.",
            text_part_5: "4. If you are interested in history, check with the guide about ‘special routes’ - sometimes they open closed areas.Kilmainham is a place that does not leave indifferent.",
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
        tips.textContent = texts[currentLanguage].tips;

        localStorage.setItem('language', currentLanguage);
    }
    
    if (translateButton) {
        translateButton.addEventListener('click', () => {
            translate();
        });
    }
    });