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
            about: 'О Пабе Мэтта Моллоя',
            desc: 'Порог этого паба — будто граница между мирами. Стоит переступить его — и вас обволакивает теплая смесь запахов: воска старых деревянных полов, тмина из фирменных сосисок и легкий флер столетнего виски, въевшегося в дубовые стойки. Matt Molloy\'s, названный в честь легендарного флейтиста The Chieftains, — не просто питейное заведение, а живой музей ирландской музыки. Это место, где время измеряется не часами, а количеством сыгранных рилов. Когда бармен гасит последнюю лампу, музыка не заканчивается — она просто засыпает до завтра в межстенных щелях, среди опилок и нотных записок.',
            surroundings: 'Окрестности',
            surdesc: 'Выйдя из дверей легендарного паба, попадаешь в лабиринт улочек, где музыка не заканчивается, а лишь меняет тональность. Прямо напротив, в крошечной булочной \'Bridgie’s\', хозяйка напевает ту же балладу, что час назад звучала в баре, замешивая тесто под ритм собственной дрожи. Свернув за угол на Bridge Street, обнаруживаешь \'Музыкальный мост\' — старинную арку, где акустика создает эффект натурального ревербератора. Через дорогу притаился антикварный магазин \'The Tin Fiddle\' — его хозяин коллекционирует сломанные инструменты. В витрине скрипка с одной струной соседствует с волынкой, из которой когда-то пили виски. Если попросить вежливо, старик Деклан покажет свой самый ценный экспонат — гармонику, забытую в 1963 году участниками The Dubliners.',
            mapt: 'Карта района',
            text_part_1: '1.Избегайте субботних вечеров - слишком многолюдно',
            text_part_2: '2.Живые сессии начинаются около 21:30',
            text_part_3: '3.Обязательно попробуйте \'Устрицы Моллоя\' с элем (фирменное блюдо)',
            text_part_4: '4.Попросите бармена показать \'секретный ящик\' - там хранятся ноты неизданных мелодий самого Моллоя.',
            tips: 'Советы'
        },
        en: {
            button: 'Translate',
            about: 'About Matt Molloy\'s Pub',
            desc: 'The threshold of this pub is like a border between worlds. Step inside and you\'re enveloped in a warm mix of scents: wax from old wooden floors, cumin from signature sausages, and a subtle hint of century-old whiskey soaked into the oak beams. Matt Molloy\'s, named after the legendary flutist of The Chieftains, is not just a drinking establishment but a living museum of Irish music. This is a place where time is measured not in hours but in the number of reels played. When the bartender turns off the last light, the music doesn\'t end - it just falls asleep until tomorrow in the cracks between walls, among sawdust and musical notes.',
            surroundings: 'Surroundings',
            surdesc: 'Stepping out of the legendary pub\'s doors, you enter a labyrinth of streets where the music doesn\'t stop but only changes its tone. Directly opposite, in the tiny \'Bridgie’s\' bakery, the owner hums the same ballad that was playing in the bar an hour ago, kneading dough to the rhythm of her own tremors. Turning the corner onto Bridge Street, you discover the \'Music Bridge\' - an ancient arch where the acoustics create a natural reverberation effect. Across the road hides the antique shop \'The Tin Fiddle\' - its owner collects broken instruments. In the window, a violin with a single string sits next to a bagpipe from which whiskey was once drunk. If you ask politely, old Declan will show his most prized exhibit - a harmonica left behind in 1963 by members of The Dubliners.',
            mapt: 'Map of the area',
            text_part_1: '1.Avoid Saturday nights - too crowded',
            text_part_2: '2.Live sessions start around 9:30 PM',
            text_part_3: '3.Be sure to try \'Molloy\'s Oysters\' with ale (signature dish)',
            text_part_4: '4.Ask the bartender to show the \'secret box\' - it contains sheet music of Molloy\'s unpublished tunes.',
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