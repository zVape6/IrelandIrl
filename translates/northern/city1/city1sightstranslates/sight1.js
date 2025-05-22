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
      about: "Белфастский замок",
      desc: "Тени викторианских садов скользят по песчаниковым стенам замка, где когда-то граф Шефтсбери принимал королеву. Утренний туман превращает башни в призрачные силуэты, а к полудню солнечные лучи высвечивают резные гербы над входом. В Зеленом зале сохранился секретер с потайными ящиками — говорят, там хранились любовные письма леди Эдит.",
      surroundings: "Окрестности",
      surdesc: "Тропинка за замком ведет к пещере Наполеона — здесь якобы ночевал французский шпион. А спустившись по лестнице с драконьими перилами, попадете в сад камней с кельтскими узорами.",
      mapt: "Карта района",
      text_part_1: "1. В подвальном вином погребе проводят дегустации ирландских элей (пн-чт с 17:00)",
      text_part_2: "2. Лучший вид на город — со смотровой площадки у восточной башни",
      text_part_3: "3. Найдите \"кошачий след\" — мозаику с отпечатками лап у фонтана",
      text_part_4: "4. В сумерках включают подсветку фасада (особенно эффектно в ноябре-январе)",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Belfast Castle",
      desc: "Shadows of Victorian gardens slide across the sandstone walls of the castle where Earl Shaftesbury once hosted the queen. Morning mist turns the towers into ghostly silhouettes, and by noon, sunlight highlights the carved crests above the entrance. In the Green Room, a secretaire with hidden drawers remains — said to hold Lady Edith's love letters.",
      surroundings: "Surroundings",
      surdesc: "A path behind the castle leads to Napoleon's Cave — allegedly used by a French spy. Descend the staircase with dragon railings to find a stone garden etched with Celtic designs.",
      mapt: "Map of the area",
      text_part_1: "1. In the basement wine cellar, try Irish ales (Mon–Thu from 5PM)",
      text_part_2: "2. The best view of the city is from the east tower’s terrace",
      text_part_3: "3. Find the 'cat’s trail' — a mosaic of paw prints near the fountain",
      text_part_4: "4. In twilight, the facade lights up beautifully (especially Nov–Jan)",
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