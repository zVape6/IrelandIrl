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
      about: "Ратуша Белфаста",
      desc: "Грандиозная ратуша, построенная в начале XX века, манит своей величественной архитектурой и монументальными колоннами. Внутри можно полюбоваться витражами, отражающими историю города. Стоя у входа, чувствуется дух эпохи, когда Белфаст был центром промышленного подъема. Здесь, в сердце города, можно почувствовать его пульс и ощутить, как старинные стены хранят в себе память о прошлом.",
      surroundings: "Окрестности",
      surdesc: "Неподалеку находятся знаменитые ботанические сады Белфаста, а также несколько музеев, в том числе Музей истории города и Музей искусств.",
      mapt: "Карта района",
      text_part_1: "1. Не пропустите экскурсию по залам ратуши, в которых рассказывают о значимых событиях города.",
      text_part_2: "2. Лучший вид на здание — с площади перед ним, особенно в вечернее время, когда огни освещают фасад.",
      text_part_3: "3. Обязательно посетите кафе в дворе ратуши — атмосферное место для отдыха после прогулки.",
      text_part_4: "4. В зимнее время здесь устраиваются рождественские ярмарки и праздничные мероприятия.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Belfast City Hall",
      desc: "The grand City Hall, built at the beginning of the 20th century, draws attention with its majestic architecture and monumental columns. Inside, you can admire stained glass windows reflecting the history of the city. Standing at the entrance, you can feel the spirit of the era when Belfast was at the heart of the industrial boom. Here, in the city center, you can feel its pulse and sense how the old walls preserve memories of the past.",
      surroundings: "Surroundings",
      surdesc: "Nearby are the famous Botanic Gardens of Belfast, as well as several museums, including the City History Museum and the Art Museum.",
      mapt: "Map of the area",
      text_part_1: "1. Don’t miss the guided tour of the City Hall, where you can learn about significant events in the city’s history.",
      text_part_2: "2. The best view of the building is from the square in front of it, especially in the evening when the lights illuminate the facade.",
      text_part_3: "3. Be sure to visit the cafe in the courtyard of the City Hall – a great place to relax after a walk.",
      text_part_4: "4. During the winter season, Christmas markets and festive events are held here.",
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
