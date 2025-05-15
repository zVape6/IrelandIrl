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
            button: 'Перевод',
            about: 'О Святом источнике Кэрроухолли',
            desc: 'Тропинка к святому источнику петляет между замшелых валунов, будто ведя в другое измерение. Carrowholly Holy Well — не просто каменная чаша с водой, а портал в древнюю Ирландию, где каждый камень помнит кельтские обряды. Местная легенда гласит: если обойти источник трижды против солнца и коснуться воды левой рукой, можно увидеть тень святого Патрика, который когда-то освятил это место. Дети шепотом рассказывают, что в полнолуние здесь появляются \'добрые фейри\', чтобы напиться кристальной воды. Это место не для громких слов и толп туристов. Здесь нужно присесть на плоский камень у воды, закрыть глаза и слушать — как шелест лент сливается с журчанием источника в древнюю молитву.',
            surroundings: 'Окрестности',
            surdesc: 'От святого источника тропа ведет через поле, усеянное \'камнями желаний\' — плоскими валунами, на которых паломники веками оставляли монетки и булавки. Чуть дальше, за изгородью из боярышника, притаился полуразрушенный каменный амбар. Пройдя вдоль ручья, выходишь к \'танцующему дубу\' — старому дереву с причудливо изогнутыми ветвями. Местные шепчут, что в его тени можно услышать эхо древних кельтских песнопений, если приложить ухо к дуплу. Если спуститься к болотцу, обнаружишь \'ведьмины круги\' — странные кольца из белых камней, происхождение которых никто не может объяснить.',
            mapt: 'Карта района',
            text_part_1: '1. Лучшее время для визита а)Раннее утро (6-8 часов) - когда туман создает мистическую атмосферу б)17 июля (День св. Патрика в местном календаре) - проводятся особые обряды в)Полнолуние - для любителей легенд о фейри (возьмите фонарик)',
            text_part_2: '2.Для загадывания желания: бросьте в источник монетку достоинством €0.20 (не больше!)',
            text_part_3: '3.Возьмите пустую бутылку для святой воды (наберите у восточного края источника)',
            text_part_4: '4.Придите в сумерки и положите ладонь на плоский камень у воды - местные верят, что он сохраняет солнечное тепло до полуночи.',
            tips: 'Советы'
        },
        en: {
            button: 'Translate',
            about: 'About Carrowholly Holy Well',
            desc: 'The path to the holy well winds between mossy boulders, as if leading to another dimension. Carrowholly Holy Well is not just a stone bowl of water, but a portal to ancient Ireland, where every stone remembers Celtic rituals. Local legend says: if you circle the well three times against the sun and touch the water with your left hand, you may see the shadow of St. Patrick who once consecrated this place. Children whisper that at full moon \'good fairies\' appear here to drink the crystal clear water. This is not a place for loud words and crowds of tourists. Here you need to sit on a flat stone by the water, close your eyes and listen - how the rustle of ribbons merges with the murmur of the spring into an ancient prayer.',
            surroundings: 'Surroundings',
            surdesc: 'From the holy well, the path leads through a field strewn with \'wishing stones\' - flat boulders where pilgrims have left coins and pins for centuries. A little further, behind a hawthorn hedge, hides a half-ruined stone barn. Following the stream, you come to the \'dancing oak\' - an old tree with bizarrely twisted branches. Locals whisper that in its shade you can hear echoes of ancient Celtic chants if you put your ear to the hollow. If you descend to the marsh, you\'ll discover \'fairy circles\' - strange rings of white stones whose origin no one can explain.',
            mapt: 'Map of the area',
            text_part_1: '1. Best time to visit a)Early morning (6-8 AM) - when fog creates a mystical atmosphere b)July 17 (St. Patrick\'s Day in local calendar) - special rituals are held c)Full moon - for lovers of fairy legends (bring a flashlight)',
            text_part_2: '2.For making a wish: throw a €0.20 coin into the well (no more!)',
            text_part_3: '3.Take an empty bottle for holy water (fill it at the eastern edge of the well)',
            text_part_4: '4.Come at dusk and place your palm on the flat stone by the water - locals believe it retains the sun\'s warmth until midnight.',
            tips: 'Tips'
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