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
      about: "Ботанические сады Белфаста",
      desc: "Ботанические сады Белфаста — это один из самых красивых уголков города, где царит тишина и зелень. Здесь можно насладиться прогулками по ухоженным аллеям, полюбоваться редкими растениями и посетить оранжерею. Это место идеально подходит для отдыха в любое время года, особенно в сезон цветения.",
      surroundings: "Окрестности",
      surdesc: "Сады находятся рядом с Ольстерским музеем и озером, так что вы можете продолжить прогулку по этим районам.",
      mapt: "Карта района",
      text_part_1: "1. Самое лучшее время для посещения — весна и лето, когда расцветает большинство растений.",
      text_part_2: "2. В оранжерее можно найти уникальные виды тропических растений, так что обязательно загляните внутрь.",
      text_part_3: "3. Возьмите с собой пикник и насладитесь обедом в тени деревьев.",
      text_part_4: "4. Проверьте расписание мероприятий — иногда проводятся концерты и культурные события.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Belfast Botanic Gardens",
      desc: "The Belfast Botanic Gardens is one of the most beautiful corners of the city, where tranquility and greenery reign. Here you can enjoy walks along well-maintained alleys, admire rare plants, and visit the greenhouse. This place is perfect for relaxation at any time of the year, especially during the blooming season.",
      surroundings: "Surroundings",
      surdesc: "The gardens are located next to the Ulster Museum and a lake, so you can continue your walk through these areas.",
      mapt: "Map of the area",
      text_part_1: "1. The best time to visit is spring and summer when most of the plants are in bloom.",
      text_part_2: "2. The greenhouse contains unique species of tropical plants, so be sure to stop by.",
      text_part_3: "3. Bring a picnic and enjoy lunch under the shade of trees.",
      text_part_4: "4. Check the event schedule — sometimes concerts and cultural events are held.",
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
