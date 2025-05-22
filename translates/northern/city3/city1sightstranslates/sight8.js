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
      about: "Лес Госфорд",
      desc: "Лес Госфорд, расположенный недалеко от Армы, является идеальным местом для любителей природы. Здесь можно наслаждаться пешими прогулками по лесным тропинкам, исследовать разнообразные виды растений и животных, а также провести время на свежем воздухе. Лес также известен своей исторической составляющей — здесь можно увидеть руины старинной крепости.",
      surroundings: "Окрестности",
      surdesc: "Лес расположен в непосредственной близости от других природных достопримечательностей, таких как пруд и исторические руины, которые также стоит посетить.",
      mapt: "Карта района",
      text_part_1: "1. Если вы хотите увидеть самые красивые виды, попробуйте посетить лес в осеннее время, когда листья окрашиваются в яркие оттенки.",
      text_part_2: "2. Лес идеально подходит для утренних пробежек или спокойных прогулок с семьей.",
      text_part_3: "3. Принесите с собой пикник — в лесу есть много уютных мест для отдыха.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Gosford Forest",
      desc: "Gosford Forest, located near Armagh, is an ideal place for nature lovers. Here, you can enjoy walks along forest trails, explore a variety of plants and animals, and spend time outdoors. The forest is also known for its historical significance — you can see the ruins of an ancient fortress.",
      surroundings: "Surroundings",
      surdesc: "The forest is located close to other natural attractions, such as a pond and historic ruins, which are also worth visiting.",
      mapt: "Map of the Area",
      text_part_1: "1. If you want to see the most beautiful views, try visiting the forest in the autumn when the leaves turn vibrant colors.",
      text_part_2: "2. The forest is perfect for morning runs or peaceful walks with family.",
      text_part_3: "3. Bring a picnic — there are many cozy spots for relaxing in the forest.",
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
