document.addEventListener('DOMContentLoaded', () => {
  const translateButton = document.getElementById('translateButton');
  const about = document.getElementById('about');
  const desc = document.getElementById('desc');
  const surroundings = document.getElementById('surroundings');
  const surdesc = document.getElementById('surdesc');
  const mapt = document.getElementById('mapt');
  const tips = document.getElementById('tips');
  const text_part_1 = document.getElementById('text_part_1');
  const text_part_2 = document.getElementById('text_part_2');
  const text_part_3 = document.getElementById('text_part_3');
  const text_part_4 = document.getElementById('text_part_4');

  const texts = {
    ru: {
      button: "Перевод",
      about: "Народный парк",
      desc: "Проснувшись рано, можно застать, как роса блестит на теннисных кортах и тишина окутывает ухоженные аллеи. Народный парк Армы — это сердце города, где встречаются поколения. Пожилые пары кормят лебедей у пруда, дети с радостными криками бегут к игровой площадке, а студенты прячутся под дубами с книгами. Всё здесь говорит о спокойствии и укоренённости, словно сам город дышит размеренно вместе с этим зелёным пространством.",
      tips: "Советы",
      text_part_1: "1. Приходите с утра (до 9:00), когда парк ещё полон свежести и почти безлюден.",
      text_part_2: "2. Слева от входа есть кафе, где пекут хлеб с ирландскими травами — попробуйте с маслом и мёдом.",
      text_part_3: "3. Весной здесь цветёт магнолия, а осенью можно собрать жёлуди для поделок.",
      text_part_4: "4. В воскресенье местный духовой оркестр иногда даёт мини-концерты у фонтана — настоящий подарок для ушей.",
      surroundings: "Окрестности",
      surdesc: "За главным входом находится небольшая галерея современного искусства, а чуть далее по аллее — библиотека Робинсона, где можно отдохнуть в читальном зале с видом на деревья.",
      mapt: "Карта района"
    },
    en: {
      button: "Translate",
      about: "People's Park",
      desc: "Waking up early, you can catch the dew shining on the tennis courts and the silence enveloping the well-kept alleys. The People's Park in Armagh is the heart of the city, where generations meet. Elderly couples feed swans by the pond, children run joyfully to the playground, and students hide under the oaks with books. Everything here speaks of tranquility and rootedness, as if the city itself breathes evenly with this green space.",
      tips: "Tips",
      text_part_1: "1. Come in the morning (before 9:00), when the park is still fresh and almost deserted.",
      text_part_2: "2. To the left of the entrance, there's a cafe that bakes bread with Irish herbs — try it with butter and honey.",
      text_part_3: "3. In the spring, magnolia blooms here, and in the fall, you can gather acorns for crafts.",
      text_part_4: "4. On Sundays, the local brass band sometimes gives mini-concerts by the fountain — a real gift for the ears.",
      surroundings: "Surroundings",
      surdesc: "Behind the main entrance, there's a small modern art gallery, and a little further along the alley, you'll find the Robinson Library, where you can relax in the reading room with a view of the trees.",
      mapt: "Map of the Area"
    }
  };

  let currentLanguage = localStorage.getItem('language') || 'ru';

  function translate() {
    currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';

    translateButton.textContent = texts[currentLanguage].button;
    about.textContent = texts[currentLanguage].about;
    desc.textContent = texts[currentLanguage].desc;
    tips.textContent = texts[currentLanguage].tips;
    text_part_1.textContent = texts[currentLanguage].text_part_1;
    text_part_2.textContent = texts[currentLanguage].text_part_2;
    text_part_3.textContent = texts[currentLanguage].text_part_3;
    text_part_4.textContent = texts[currentLanguage].text_part_4;
    surroundings.textContent = texts[currentLanguage].surroundings;
    surdesc.textContent = texts[currentLanguage].surdesc;
    mapt.textContent = texts[currentLanguage].mapt;

    localStorage.setItem('language', currentLanguage);
  }

  if (translateButton) {
    translateButton.addEventListener('click', () => {
      translate();
    });
  }
});
