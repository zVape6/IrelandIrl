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
      about: "Стены Дерри",
      desc: "Стены Дерри — это не просто фортификационное сооружение, а символ непокоренности и мужества. Прогулка по ним позволяет прикоснуться к истории, увидеть старинные башни и пушки, которые защищали город от нападений. Особенно величественно эти стены выглядят на закате, когда золотые лучи солнца окрашивают их в красные оттенки. Зайдя внутрь, можно почувствовать атмосферу старинного города, в котором сливаются прошлое и настоящее.",
      surroundings: "Окрестности",
      surdesc: "Пройдя по стенам, вы выйдете на улицу Норт-Гейт, откуда открывается вид на реку Фойл и Банк-стрит с его красивыми зданиями.",
      mapt: "Карта района",
      text_part_1: "1. Прогулка по стенам — это как путешествие во времени. Лучше всего начинать у башни Блэкс.",
      text_part_2: "2. Не пропустите смотровую площадку у святого Габриэля — панорамный вид на город и реку Фойл.",
      text_part_3: "3. У стен находится несколько информационных табличек, которые подробно рассказывают об истории Дерри.",
      text_part_4: "4. В вечернее время стены особенно красивы, когда на них падает свет от уличных фонарей.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "The Derry Walls",
      desc: "The Derry Walls are not just a fortification but a symbol of resilience and courage. A walk along them allows you to touch history and see ancient towers and cannons that protected the city from attacks. The walls are especially majestic at sunset, when the golden rays of the sun paint them in shades of red. Entering them, you can feel the atmosphere of an ancient city where past and present merge.",
      surroundings: "Surroundings",
      surdesc: "Walking along the walls, you will come out to North Gate Street, where you can enjoy views of the River Foyle and Bank Street with its beautiful buildings.",
      mapt: "Map of the area",
      text_part_1: "1. Walking along the walls is like a journey through time. It's best to start at Black’s Tower.",
      text_part_2: "2. Don't miss the viewing platform at St. Gabriel's — it offers panoramic views of the city and the River Foyle.",
      text_part_3: "3. There are several informational plaques along the walls that provide detailed history of Derry.",
      text_part_4: "4. In the evening, the walls are particularly beautiful when street lamps cast light on them.",
      tips: "Tips"
    }
  };

  let currentLanguage = localStorage.getItem('language') || 'ru';

  function translate() {
    currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';

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
