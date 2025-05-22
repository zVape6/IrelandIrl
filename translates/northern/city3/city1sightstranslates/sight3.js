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
      about: "Крепость Наван",
      desc: "Крепость Наван — древний памятник Ирландии, расположенный недалеко от города Арма. Она является одним из крупнейших археологических объектов в стране, относящихся к бронзовому и железному векам. С площадки крепости открывается захватывающий вид на окрестности, а сам объект сохраняет множество следов древних сооружений и ритуальных площадок. Это место также имеет важное историческое значение, связанное с легендами о древних ирландских королях.",
      surroundings: "Окрестности",
      surdesc: "В нескольких минутах от крепости расположены сельские поля и холмы, идеально подходящие для пеших прогулок. Также можно посетить местные кафе и рестораны, чтобы попробовать традиционные ирландские блюда.",
      mapt: "Карта района",
      text_part_1: "1. Во время экскурсии обязательно посетите музей, где представлены артефакты, найденные на территории крепости.",
      text_part_2: "2. Прогулка по крепости особенно хороша в ясные дни, когда можно насладиться панорамными видами на зеленые холмы.",
      text_part_3: "3. Подготовьтесь к небольшим пешим прогулкам — территориальные особенности крепости требуют некоторого усилия, чтобы исследовать все уголки.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Navan Fort",
      desc: "Navan Fort is an ancient monument in Ireland, located near the city of Armagh. It is one of the largest archaeological sites in the country, dating back to the Bronze and Iron Ages. From the fort's platform, there is a breathtaking view of the surrounding countryside, and the site retains numerous traces of ancient structures and ritual sites. This place also holds significant historical importance, connected with legends about ancient Irish kings.",
      surroundings: "Surroundings",
      surdesc: "Just a few minutes from the fort, you will find rural fields and hills, perfect for walking. You can also visit local cafes and restaurants to try traditional Irish dishes.",
      mapt: "Map of the Area",
      text_part_1: "1. During the tour, be sure to visit the museum, where artifacts found at the fort are displayed.",
      text_part_2: "2. A walk around the fort is especially pleasant on clear days when you can enjoy panoramic views of the green hills.",
      text_part_3: "3. Prepare for some walking — the terrain of the fort requires some effort to explore all corners.",
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
