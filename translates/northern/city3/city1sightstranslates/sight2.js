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
      about: "Собор Святого Патрика",
      desc: "Собор Святого Патрика в Арме, великолепный пример готической архитектуры, впечатляет не только своей историей, но и духом святого места. Его башни поднимаются высоко в небо, а внутреннее убранство полнится древними фресками и витражами. Это место — символ веры и надежды для горожан, а также важная достопримечательность для туристов.",
      surroundings: "Окрестности",
      surdesc: "Недалеко от собора расположены уютные кафе и магазины, где можно отдохнуть после экскурсии. В окрестностях также стоит посетить старинные улочки Армы.",
      mapt: "Карта района",
      text_part_1: "1. Обязательно посетите собор в утренние часы, чтобы избежать толп туристов и насладиться спокойствием.",
      text_part_2: "2. Не пропустите красивый внутренний двор с садами и обзорной площадкой.",
      text_part_3: "3. Попробуйте посетить собор в дни религиозных праздников — здесь проходят яркие торжества.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "St. Patrick's Cathedral",
      desc: "St. Patrick's Cathedral in Armagh, a magnificent example of Gothic architecture, impresses not only with its history but also with the spirit of the holy place. Its towers rise high into the sky, and the interior is filled with ancient frescoes and stained-glass windows. This place is a symbol of faith and hope for the townspeople and an important landmark for tourists.",
      surroundings: "Surroundings",
      surdesc: "Near the cathedral, you will find cozy cafes and shops where you can relax after your tour. You should also visit the ancient streets of Armagh.",
      mapt: "Map of the Area",
      text_part_1: "1. Be sure to visit the cathedral in the morning to avoid the crowds and enjoy the tranquility.",
      text_part_2: "2. Don't miss the beautiful courtyard with gardens and an observation deck.",
      text_part_3: "3. Try to visit the cathedral on religious holidays — bright celebrations take place here.",
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
});
