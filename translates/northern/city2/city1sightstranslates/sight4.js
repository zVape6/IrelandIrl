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
      about: "Богсайд",
      desc: "Богсайд — это один из самых известных районов Дерри, являющийся символом богатой и драматичной истории города. Здесь происходили важнейшие события периода Страстной недели. Улицы Богсайда украшены знаменитым политическим муралом, который изображает события и моменты из истории Северной Ирландии, особенно акцентируя внимание на конфликтах между католиками и протестантами.",
      surroundings: "Окрестности",
      surdesc: "Недалеко от Богсайда расположены Мост Мира и старые укрепления города. Прогулка по этим районам углубит ваше понимание исторического контекста и современности Дерри.",
      mapt: "Карта района",
      text_part_1: "1. Обязательно сделайте остановку у знаменитого политического мурала, чтобы изучить его детали и историю.",
      text_part_2: "2. В июле, в дни исторической памяти, в Богсайде проходят мероприятия, которые стоит посетить.",
      text_part_3: "3. Прогулка по этому району позволяет увидеть контраст между историческими моментами и современной жизнью города.",
      text_part_4: "4. В Богсайде также можно найти несколько уютных кафе, где подают традиционные блюда Северной Ирландии.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Bogside",
      desc: "Bogside is one of the most famous districts in Derry, symbolizing the rich and dramatic history of the city. Important events of the Troubles took place here. The streets of Bogside are adorned with the famous political murals that depict events from the history of Northern Ireland, especially focusing on the conflicts between Catholics and Protestants.",
      surroundings: "Surroundings",
      surdesc: "Near Bogside, you’ll find the Peace Bridge and the city's old fortifications. A walk through these areas will deepen your understanding of Derry's historical and contemporary context.",
      mapt: "Map of the area",
      text_part_1: "1. Be sure to stop by the famous political mural to study its details and history.",
      text_part_2: "2. In July, during the days of historical remembrance, there are events in Bogside that are worth attending.",
      text_part_3: "3. A walk through this district lets you witness the contrast between historical events and the modern life of the city.",
      text_part_4: "4. In Bogside, you’ll also find cozy cafes serving traditional Northern Irish dishes.",
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
