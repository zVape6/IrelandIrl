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
      about: "Кафедральный собор Армы",
      desc: "Кафедральный собор Армы стоит на месте, где возвышался древний монастырь. Это величественное сооружение в готическом стиле привлекает путешественников своими высокими башнями и витражами. Внутри — спокойная атмосфера, которая идеально подходит для размышлений. По воскресеньям здесь проходят службы, а для любителей истории есть возможность узнать много интересного о прошлом этого священного места.",
      surroundings: "Окрестности",
      surdesc: "В окрестностях собора расположены старинные улицы Армы, с уютными магазинами и кафе, а также архитектурные памятники, которые сохраняют атмосферу былых времен.",
      mapt: "Карта района",
      text_part_1: "1. Не пропустите внутрь собора — там находится несколько старинных фресок и памятников.",
      text_part_2: "2. Лучше всего посещать собор во время службы, чтобы почувствовать настоящую атмосферу.",
      text_part_3: "3. Загляните в старинный сад при соборе, особенно если вам нравится уединение.",
      text_part_4: "4. Вход в собор бесплатный, но благодарительные пожертвования приветствуются.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Armagh Cathedral",
      desc: "Armagh Cathedral stands on the site of an ancient monastery. This majestic Gothic structure attracts travelers with its towering spires and stained-glass windows. Inside, there is a peaceful atmosphere, perfect for contemplation. Services are held here on Sundays, and history enthusiasts can learn a lot about the past of this sacred place.",
      surroundings: "Surroundings",
      surdesc: "The surrounding streets of Armagh are filled with quaint shops and cafes, as well as architectural landmarks that preserve the atmosphere of past times.",
      mapt: "Map of the Area",
      text_part_1: "1. Don't miss the interior of the cathedral — it features several ancient frescoes and monuments.",
      text_part_2: "2. The best time to visit is during the service, to experience the true atmosphere of the place.",
      text_part_3: "3. Visit the ancient garden next to the cathedral, especially if you enjoy solitude.",
      text_part_4: "4. Entry to the cathedral is free, though donations are welcome.",
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
