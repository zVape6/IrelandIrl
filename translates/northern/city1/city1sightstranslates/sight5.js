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
      about: "Ольстерский музей",
      desc: "Ольстерский музей — один из самых важных культурных центров Белфаста. В его коллекциях можно найти экспонаты, посвященные археологии, естественной истории и искусству. Здесь хранятся уникальные артефакты, начиная от доисторических времен и заканчивая современными произведениями искусства. Это место, где можно узнать о богатой истории региона и его культуре.",
      surroundings: "Окрестности",
      surdesc: "Музей находится рядом с ботаническими садами Белфаста и озером, что делает прогулку особенно приятной.",
      mapt: "Карта района",
      text_part_1: "1. Обратите внимание на галерею с выставками посвященными культуре Ольстера.",
      text_part_2: "2. В музее часто проводятся мастер-классы для детей и взрослых.",
      text_part_3: "3. Не забудьте посетить музейный магазин — здесь можно найти уникальные сувениры.",
      text_part_4: "4. Вход в музей бесплатный, но на временные выставки могут быть входные билеты.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Ulster Museum",
      desc: "The Ulster Museum is one of Belfast’s most important cultural centers. Its collections include exhibits on archaeology, natural history, and art. The museum houses unique artifacts from prehistoric times to modern works of art. It is a place where you can learn about the rich history and culture of the region.",
      surroundings: "Surroundings",
      surdesc: "The museum is located next to the Belfast Botanic Gardens and a lake, making a walk particularly pleasant.",
      mapt: "Map of the area",
      text_part_1: "1. Pay attention to the gallery featuring exhibits dedicated to the culture of Ulster.",
      text_part_2: "2. The museum often hosts workshops for both children and adults.",
      text_part_3: "3. Don’t forget to visit the museum shop — it’s a great place to find unique souvenirs.",
      text_part_4: "4. Admission to the museum is free, though there may be tickets for temporary exhibitions.",
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
