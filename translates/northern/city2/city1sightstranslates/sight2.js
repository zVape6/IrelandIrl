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
      about: "Гилдхолл",
      desc: "Гилдхолл в Дерри — это величественное здание, построенное в викторианском стиле в XIX веке. Сегодня это центр культурных мероприятий и публичных собраний. Внутри находятся экспозиции, посвященные истории города, включая его промышленное развитие и важные исторические моменты, такие как участие города в Страстной неделе и годы Великого голода.",
      surroundings: "Окрестности",
      surdesc: "Гилдхолл находится в центре города, рядом с городской площадью и рядом с Историческим Центром Дерри. Здесь же находятся многочисленные кафе и рестораны, где можно отдохнуть после прогулки.",
      mapt: "Карта района",
      text_part_1: "1. Для осмотра исторических экспозиций лучше посетить Гилдхолл в утренние часы.",
      text_part_2: "2. Пройдитесь по зданию и полюбуйтесь витражами в витринах и театральными залами.",
      text_part_3: "3. Прочитайте о ключевых событиях, связанных с историей Гилдхолла и его значением для Дерри.",
      text_part_4: "4. Если вам интересно искусство, посетите выставку в одном из залов Гилдхолла, которая проходит в течение всего года.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Guildhall",
      desc: "Guildhall in Derry is a magnificent Victorian building from the 19th century. Today, it serves as a center for cultural events and public gatherings. Inside, you'll find exhibitions dedicated to the city's history, including its industrial development and key historical events such as the city's role during the Easter Week and the years of the Great Famine.",
      surroundings: "Surroundings",
      surdesc: "Guildhall is located in the city center, near the city square and the Derry Historical Center. Numerous cafes and restaurants are also nearby, perfect for a break after your walk.",
      mapt: "Map of the area",
      text_part_1: "1. For exploring historical exhibitions, it's best to visit Guildhall in the morning.",
      text_part_2: "2. Walk through the building and admire the stained glass windows and theatrical halls.",
      text_part_3: "3. Learn about key events in the history of the Guildhall and its significance for Derry.",
      text_part_4: "4. If you're interested in art, visit one of the exhibitions in the Guildhall's halls, which are held throughout the year.",
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
