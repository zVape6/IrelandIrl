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
      button: "Перевод",
      about: "Музей округа Арма",
      desc: "Музей округа Арма — это идеальное место для знакомства с историей и культурой региона. Музей предлагает выставки, посвященные археологии, искусству, а также местным традициям и фольклору. Это место идеально для тех, кто хочет узнать больше о богатой истории Армы и всего округа.",
      surroundings: "Окрестности",
      surdesc: "В окрестностях музея расположены красивые старинные улицы Армы, которые стоит посетить после осмотра музея. Также недалеко находятся местные магазины и кафе.",
      mapt: "Карта района",
      text_part_1: "1. Если вам интересна история региона, не пропустите специальные тематические экскурсии по музею.",
      text_part_2: "2. Музей предоставляет аудиогиды для лучшего восприятия экспонатов.",
      text_part_3: "3. Планируйте свое посещение заранее, так как в пиковые сезоны возможна большая очередь на вход.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Armagh County Museum",
      desc: "Armagh County Museum is the perfect place to explore the history and culture of the region. The museum offers exhibitions on archaeology, art, and local traditions and folklore. It’s ideal for those who want to learn more about the rich history of Armagh and the surrounding area.",
      surroundings: "Surroundings",
      surdesc: "In the vicinity of the museum, you’ll find beautiful old streets of Armagh, which are worth visiting after the museum tour. There are also local shops and cafes nearby.",
      mapt: "Map of the Area",
      text_part_1: "1. If you're interested in the region’s history, don’t miss the special themed tours of the museum.",
      text_part_2: "2. The museum offers audio guides for a better experience of the exhibits.",
      text_part_3: "3. Plan your visit in advance, as there may be long queues during peak seasons.",
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
    tips.textContent = texts[currentLanguage].tips;

    localStorage.setItem('language', currentLanguage);
  }

  if (translateButton) {
    translateButton.addEventListener('click', () => {
      translate();
    });
  }

  // Initially set text based on saved language
  translate();
});
