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
      about: "Собор Вознесения Пресвятой Девы Марии",
      desc: "Под куполом, возвышающимся над городом, звенит эхо органной музыки. Galway Cathedral — это не просто храм, это каменная симфония. Внутри — мозаики, витражи и сводчатые потолки, будто созданные для молитвы и тишины. Стены из серого известняка словно впитали молитвы тысяч. Здесь чувствуется дыхание времени — от римских куполов до ирландской веры.",
      surroundings: "Окрестности",
      surdesc: "Через мост — река Корриб с её быстрой водой и криками чаек. В 5 минутах — университетский ботанический сад, скрытый от глаз туристов. А чуть дальше — каменная набережная, по которой приятно идти, когда город засыпает.",
      mapt: "Карта района",
      text_part_1: "1. Зайдите внутрь днём — солнечные лучи через витражи создают игру света на полу.",
      text_part_2: "2. Слушайте органные концерты — афиша возле входа.",
      text_part_3: "3. Соблюдайте тишину — это действующий храм.",
      text_part_4: "4. Рядом можно перекусить в кофейне возле моста Salmon Weir.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Cathedral of the Assumption of the Blessed Virgin Mary",
      desc: "Under the dome rising above the city, echoes of organ music ring. Galway Cathedral is not just a church — it’s a stone symphony. Inside, mosaics, stained glass and vaulted ceilings seem built for prayer and silence. The limestone walls have absorbed thousands of prayers. You feel time breathing — from Roman domes to Irish faith.",
      surroundings: "Surroundings",
      surdesc: "Across the bridge — the River Corrib rushes by, gulls crying overhead. Five minutes away — a hidden university botanical garden. And further along — a stone embankment perfect for walks when the city falls asleep.",
      mapt: "Map of the area",
      text_part_1: "1. Enter during the day — sunlight through the stained glass creates patterns on the floor.",
      text_part_2: "2. Look out for organ concerts — check the noticeboard.",
      text_part_3: "3. Keep quiet — this is an active place of worship.",
      text_part_4: "4. Nearby is a café by Salmon Weir bridge — perfect for a break.",
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
