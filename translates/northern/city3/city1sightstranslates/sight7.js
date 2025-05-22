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
      about: "Парк Дворцового поместья",
      desc: "Парк Дворцового поместья в Арме — это зеленый оазис, который является частью исторического комплекса, где когда-то располагалась резиденция архиепископов. В парке можно найти старинные деревья, пруд, а также следы георгианского ландшафтного дизайна. Это место идеально подходит для прогулок и пикников.",
      surroundings: "Окрестности",
      surdesc: "В окрестностях парка находятся старинные дома и здания, которые также стоят внимания. После прогулки можно заглянуть в местные кафе и магазины.",
      mapt: "Карта района",
      text_part_1: "1. Прогулки по парку лучше всего устраивать ранним утром или в вечернее время, когда меньше людей.",
      text_part_2: "2. Для пикников возьмите с собой плед и немного закусок — парк идеально подходит для отдыха на свежем воздухе.",
      text_part_3: "3. Не пропустите историческую башню, которая расположена на вершине парка, откуда открывается великолепный вид на окрестности.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Palace Demesne Park",
      desc: "Palace Demesne Park in Armagh is a green oasis that is part of a historic complex, where once the archbishops’ residence was located. In the park, you can find ancient trees, a pond, and traces of Georgian landscape design. This place is perfect for walks and picnics.",
      surroundings: "Surroundings",
      surdesc: "The surroundings of the park include old houses and buildings that are also worth a visit. After your walk, you can stop by local cafes and shops.",
      mapt: "Map of the Area",
      text_part_1: "1. It's best to take walks in the park early in the morning or in the evening when there are fewer people.",
      text_part_2: "2. For picnics, bring a blanket and some snacks — the park is perfect for relaxing outdoors.",
      text_part_3: "3. Don’t miss the historical tower located at the top of the park, which offers a magnificent view of the surroundings.",
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
