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
      about: "Железнодорожный музей Фойла",
      desc: "Железнодорожный музей Фойла в Дерри — это музей, посвященный истории железнодорожного транспорта в Северной Ирландии. В нем собраны различные экспонаты, от старинных паровозов до моделей, которые рассказывают о развитии железных дорог в регионе. Музей привлекает не только любителей истории, но и тех, кто интересуется технологическими достижениями в области транспортировки.",
      surroundings: "Окрестности",
      surdesc: "Музей находится недалеко от реки Фойл, и его территория окружена красивыми природными пейзажами. После посещения музея вы можете прогуляться вдоль набережной и насладиться видами.",
      mapt: "Карта района",
      text_part_1: "1. Для любителей техники — это место обязательное для посещения, особенно если вас интересуют старинные железнодорожные экспонаты.",
      text_part_2: "2. Музей открыт с понедельника по пятницу, но не забывайте заранее проверять часы работы.",
      text_part_3: "3. Для детей это отличная возможность узнать об истории транспорта в увлекательной и доступной форме.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Foyle Railway Museum",
      desc: "The Foyle Railway Museum in Derry is dedicated to the history of railway transport in Northern Ireland. It houses various exhibits, from antique locomotives to models that tell the story of railway development in the region. The museum attracts not only history enthusiasts but also those interested in technological advancements in transportation.",
      surroundings: "Surroundings",
      surdesc: "The museum is located near the Foyle River, and its grounds are surrounded by beautiful natural landscapes. After visiting the museum, you can take a stroll along the waterfront and enjoy the views.",
      mapt: "Map of the Area",
      text_part_1: "1. For technology lovers, this is a must-visit spot, especially if you're interested in vintage railway exhibits.",
      text_part_2: "2. The museum is open from Monday to Friday, but be sure to check the opening hours in advance.",
      text_part_3: "3. For children, it's a great opportunity to learn about transportation history in an engaging and accessible way.",
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
