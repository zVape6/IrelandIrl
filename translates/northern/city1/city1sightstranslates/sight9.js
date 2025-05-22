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
      about: "Набережная Лаган",
      desc: "Набережная Лаган — это живописное место в Белфасте, где река Лаган встречается с морем. Протянувшаяся вдоль берега, набережная стала популярным местом для прогулок и отдыха среди местных жителей и туристов. С нее открывается красивый вид на реку и город, и она идеально подходит для тех, кто ищет место для расслабляющей прогулки, велопоездки или пикника. На набережной часто проходят культурные мероприятия и фестивали, а также различные спортивные события.",
      surroundings: "Окрестности",
      surdesc: "Набережная расположена рядом с культурными центрами и магазинами. В непосредственной близости находится знаменитый Белфастский театр и несколько музеев, включая Музей Титаника и Ольстерский музей.",
      mapt: "Карта района",
      text_part_1: "1. Лучше всего посетить набережную в вечернее время, когда можно насладиться красивым закатом и вечерним городом.",
      text_part_2: "2. На набережной есть велосипедные дорожки, так что возьмите с собой велосипед и прокатитесь вдоль реки.",
      text_part_3: "3. Если хотите отдохнуть, возьмите с собой плед и устроитесь на одном из зеленых участков, чтобы насладиться природой.",
      text_part_4: "4. Обратите внимание на местные кафе и рестораны, где можно отведать местные блюда, сидя у воды.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Lagan Waterfront",
      desc: "The Lagan Waterfront is a picturesque area in Belfast where the River Lagan meets the sea. Stretching along the shoreline, the waterfront has become a popular spot for walks and relaxation among locals and tourists. It offers beautiful views of the river and the city, making it ideal for a relaxing stroll, bike ride, or picnic. Cultural events, festivals, and various sports activities are often held here.",
      surroundings: "Surroundings",
      surdesc: "The waterfront is located near cultural centers and shops. The famous Belfast Theatre and several museums, including the Titanic Museum and the Ulster Museum, are in close proximity.",
      mapt: "Map of the area",
      text_part_1: "1. The best time to visit is in the evening when you can enjoy a beautiful sunset and the evening city lights.",
      text_part_2: "2. The waterfront has bike paths, so bring your bike and ride along the river.",
      text_part_3: "3. If you want to relax, bring a blanket and set up on one of the green areas to enjoy nature.",
      text_part_4: "4. Pay attention to local cafes and restaurants where you can enjoy local dishes by the water.",
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
