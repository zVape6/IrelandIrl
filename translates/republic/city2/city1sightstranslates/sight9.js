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
            about: "О районе Grand Canal Dock",
            desc: "Утром воды дока отражают стеклянные фасады офисов Google и Facebook, превращая район в калейдоскоп света. К полудню на набережной оживает движение: офисные работники спешат на бизнес-ланчи в модные кафе, а яхты покачиваются у причалов. Главная достопримечательность — волнообразный мост Сэмюэла Беккета, чьи 48 тросов напоминают струны гигантской арфы. В хорошую погоду здесь собираются уличные музыканты, а их мелодии разносятся над водой. К вечеру район преображается. У театра Bord Gáis Energy зажигаются огни, а в барах вдоль набережной начинаются джазовые джем-сейшны. Особенно атмосферно в The Marker Hotel — его терраса на крыше предлагает панорамный вид на доки и город. Этот район — как Ирландия в миниатюре: бережно хранящая прошлое, но уверенно шагающая в будущее.",
            surroundings: "Окрестности",
            surdesc: "Пройдя по набережной мимо покачивающихся яхт, вы упретесь в старинные доки Боландской мельницы — теперь здесь модные лофты и арт-пространства. Через мост Hanover — и вы в квартале Ringsend с его узкими улочками и старейшей в Дублине рыбной лавкой. Особый шарм этим местам придает река: в отлив обнажаются старые деревянные сваи, напоминающие о временах, когда здесь швартовались грузовые баржи. А на закате, когда включается подсветка моста Беккета, кажется, будто гигантская арфа парит над водой.",
            mapt: "Карта района",
            text_part_1: "1. Лучшие часы: 7-9 утра (фотографии без толп) или 17-19 вечера (красивые закаты)",
            text_part_2: "2. Бесплатные йога-классы у воды по субботам в 10:00",
            text_part_3: "3. Держите сумки закрытыми - чайки воруют еду",
            text_part_4: "4. Можно прокатиться на водном трамвай до центра города (€6, уникальные виды)",
            tips: "Советы"
        },
        en: {
            button: "Translate",
            about: "About Grand Canal Dock",
            desc: "In the morning, the dock waters reflect the glass facades of Google and Facebook offices, turning the area into a kaleidoscope of light. By noon, the waterfront comes alive: office workers rush for business lunches in trendy cafes, while yachts sway at the piers. The main attraction is the undulating Samuel Beckett Bridge, whose 48 cables resemble the strings of a giant harp. In good weather, street musicians gather here, and their melodies spread across the water. By evening, the area transforms. The Bord Gáis Energy Theatre lights up, and jazz jam sessions begin in the bars along the waterfront. The Marker Hotel is especially atmospheric — its rooftop terrace offers panoramic views of the docks and the city. This district is like Ireland in miniature: carefully preserving the past while confidently stepping into the future.",
            surroundings: "Surroundings",
            surdesc: "Walking along the promenade past swaying yachts, you'll reach the historic Boland's Mill docks — now home to trendy lofts and art spaces. Cross the Hanover Bridge — and you're in the Ringsend neighborhood with its narrow streets and Dublin's oldest fish shop. The river gives these places special charm: at low tide, old wooden pilings are exposed, reminiscent of the times when cargo barges moored here. And at sunset, when the Beckett Bridge lighting turns on, it seems as if a giant harp is hovering over the water.",
            mapt: "Map of the area",
            text_part_1: "1. Best times: 7-9 AM (crowd-free photos) or 5-7 PM (beautiful sunsets)",
            text_part_2: "2. Free yoga classes by the water on Saturdays at 10:00",
            text_part_3: "3. Keep bags closed - seagulls steal food",
            text_part_4: "4. Take a water tram to the city center (€6, unique views)",
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