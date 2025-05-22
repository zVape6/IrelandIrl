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
      about: "Паб Краун Ликёр Салон",
      desc: "Краун Ликёр Салон — один из самых знаменитых пабов Белфаста, известный своей неповторимой атмосферой и историей. Это красивое заведение в викторианском стиле привлекает внимание не только любителей пива, но и ценителей архитектуры. Здесь можно насладиться классическими ирландскими напитками и уникальной атмосферой старинного пабов, сохранившегося до наших дней.",
      surroundings: "Окрестности",
      surdesc: "Паб находится в центре Белфаста, рядом с историческими зданиями и магазинами, что делает его удобным местом для остановки в ходе прогулки по городу.",
      mapt: "Карта района",
      text_part_1: "1. Лучше всего посетить паб в вечернее время, когда атмосфера особенно уютная и живая.",
      text_part_2: "2. Закажите традиционный ирландский виски или пиво, чтобы почувствовать местный вкус.",
      text_part_3: "3. Посетите паб в День Святого Патрика, когда здесь проходят специальные мероприятия.",
      text_part_4: "4. Не забудьте сфотографировать потрясающие витражи, которые украшают интерьер.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Crown Liquor Saloon Pub",
      desc: "Crown Liquor Saloon is one of the most famous pubs in Belfast, known for its unique atmosphere and history. This beautiful Victorian-style establishment attracts not only beer lovers but also architecture enthusiasts. Here you can enjoy classic Irish drinks and the unique atmosphere of a historic pub that has been preserved to this day.",
      surroundings: "Surroundings",
      surdesc: "The pub is located in the heart of Belfast, near historical buildings and shops, making it a convenient stop during a city walk.",
      mapt: "Map of the area",
      text_part_1: "1. It's best to visit the pub in the evening when the atmosphere is particularly cozy and lively.",
      text_part_2: "2. Order traditional Irish whiskey or beer to experience the local taste.",
      text_part_3: "3. Visit the pub on St. Patrick's Day, when special events are held here.",
      text_part_4: "4. Don’t forget to photograph the stunning stained-glass windows that decorate the interior.",
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
