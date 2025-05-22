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
      about: "Собор Святого Колумба",
      desc: "Утро в соборе Святого Колумба начинается с колокольного звона и запаха влажного мха на старинных стенах. Построенный в 1633 году, он стал первым англиканским собором Ирландии после Реформации. Внутри — дубовые скамьи, каменные своды и витражи, сквозь которые льётся мягкий свет. Здесь не просто молятся — здесь ощущают дыхание истории, в тишине и полутени.",
      surroundings: "Окрестности",
      surdesc: "Рядом с собором — старейшие улочки Дерри с викторианскими фонарями. В нескольких шагах — стены города, откуда открывается панорама с крышами, дымками и куполами.",
      mapt: "Карта района",
      text_part_1: "1. Утро до 10:00 — лучшее время для фото с витражами на фоне тёплого света.",
      text_part_2: "2. Обратите внимание на артефакты в ризнице — там хранятся предметы XVII века.",
      text_part_3: "3. Посмотрите на старинную Библию у входа, напечатанную до XVIII века.",
      text_part_4: "4. Сядьте в тишине под нефом, закройте глаза — и вслушайтесь в дыхание веков.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "St. Columb's Cathedral",
      desc: "The morning at St. Columb's Cathedral begins with the sound of bells and the scent of damp moss on the ancient walls. Built in 1633, it became the first Anglican cathedral in Ireland after the Reformation. Inside, you’ll find oak pews, stone vaults, and stained glass windows through which soft light pours. Here, prayer is not just an act, but an experience of history in the silence and half-light.",
      surroundings: "Surroundings",
      surdesc: "Near the cathedral are the oldest streets in Derry with Victorian street lamps. A few steps away are the city walls, offering a panoramic view of rooftops, mists, and domes.",
      mapt: "Map of the area",
      text_part_1: "1. Morning before 10:00 is the best time for photos with stained glass in the warm light.",
      text_part_2: "2. Pay attention to the artifacts in the sacristy, where 17th-century items are kept.",
      text_part_3: "3. Look at the ancient Bible at the entrance, printed before the 18th century.",
      text_part_4: "4. Sit quietly under the nave, close your eyes, and listen to the breath of centuries.",
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
