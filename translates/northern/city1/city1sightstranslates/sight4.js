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
      about: "Политические муралы Белфаста",
      desc: "Политические муралы Белфаста — это целая галерея на улице, отражающая важнейшие события и противоречия в истории города и всей Северной Ирландии. Они рассказывают о борьбе за права, национальную идентичность и культурные конфликты. Каждый из муралов наполнен глубоким смыслом и является важной частью политической и культурной идентичности Белфаста.",
      surroundings: "Окрестности",
      surdesc: "В непосредственной близости от муралов находятся культурные центры, такие как музей Титанику и культурное пространство Crumlin Road Gaol.",
      mapt: "Карта района",
      text_part_1: "1. Лучше всего гулять по муралам с гидом, чтобы понять глубокий смысл каждого изображения.",
      text_part_2: "2. Посетите 'Музей муралов' — интерактивную выставку, которая помогает понять контекст событий.",
      text_part_3: "3. Политические муралы лучше всего фотографировать в утренние часы, когда свет мягче.",
      text_part_4: "4. Муралы часто меняются, поэтому будет интересно посетить этот район несколько раз.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Belfast Political Murals",
      desc: "The political murals of Belfast are an open-air gallery reflecting key events and conflicts in the city’s history and Northern Ireland as a whole. They tell the stories of struggles for rights, national identity, and cultural conflicts. Each mural is filled with deep meaning and is an important part of Belfast’s political and cultural identity.",
      surroundings: "Surroundings",
      surdesc: "In the immediate vicinity of the murals are cultural centers, such as the Titanic Museum and the Crumlin Road Gaol cultural space.",
      mapt: "Map of the area",
      text_part_1: "1. It’s best to walk through the murals with a guide to understand the deep meaning of each image.",
      text_part_2: "2. Visit the 'Mural Museum' — an interactive exhibition that helps to understand the context of the events.",
      text_part_3: "3. The political murals are best photographed in the morning hours when the light is softer.",
      text_part_4: "4. The murals change frequently, so it will be interesting to visit this area multiple times.",
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
