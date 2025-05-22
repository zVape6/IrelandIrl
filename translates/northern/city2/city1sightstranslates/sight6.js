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
      about: "Центр вербальных искусств",
      desc: "Утро в Центре вербальных искусств начинается с шелеста страниц и мягкого света, проникающего через окна бывшей школы. Это место, где слово — не просто средство общения, а искусство. Стены здесь хранят следы диалогов, чтений и поэтических вечеров, проходящих в зале с видом на древние стены Дерри.",
      surroundings: "Окрестности",
      surdesc: "Неподалёку от центра находятся городские стены и Богсайд, куда легко дойти пешком за 5 минут.",
      mapt: "Карта района",
      text_part_1: "1. Лучшее время для визита — утро в будний день: меньше посетителей, тише атмосфера.",
      text_part_2: "2. Обратите внимание на расписание — часто проходят бесплатные мастер-классы.",
      text_part_3: "3. Не пропустите архив ирландской поэзии в читальном зале.",
      text_part_4: "4. Сядьте у окна в кафе на втором этаже и насладитесь видом на стены Дерри.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Verbal Arts Centre",
      desc: "The morning at the Verbal Arts Centre begins with the rustling of pages and soft light streaming through the windows of the former school. This is a place where words are not just a means of communication, but an art. The walls here carry the traces of dialogues, readings, and poetry evenings held in a hall overlooking the ancient walls of Derry.",
      surroundings: "Surroundings",
      surdesc: "Nearby, you will find the city walls and Bogside, which can easily be reached on foot in 5 minutes.",
      mapt: "Map of the area",
      text_part_1: "1. The best time to visit is on a weekday morning: fewer visitors, quieter atmosphere.",
      text_part_2: "2. Check the schedule — there are often free workshops.",
      text_part_3: "3. Don't miss the Irish poetry archive in the reading room.",
      text_part_4: "4. Sit by the window in the second-floor café and enjoy the view of the Derry walls.",
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
