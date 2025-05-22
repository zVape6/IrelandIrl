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
      about: "Пещерный холм",
      desc: "Туманное утро на тропе к Пещерному холму встречает путника криками ворон и запахом сырой земли. Говорят, отсюда Свифт вдохновился на 'Путешествия Гулливера'. На вершине, где крутые скалы вздымаются над Белфастом, дыхание захватывает не от усталости — от вида. Там, где небо сливается с озером, чувствуешь себя частицей чего-то древнего и величественного.",
      surroundings: "Окрестности",
      surdesc: "У подножия холма раскинулся парк Белфастского замка. Оттуда начинается тропа, ведущая вверх, а рядом — уютное кафе с видом на залив.",
      mapt: "Карта района",
      text_part_1: "1. Лучшее время — утро до 9:00: прохладно, тихо и без толп.",
      text_part_2: "2. Возьмите с собой термос с чаем — у вершины есть лавочка с видом на город.",
      text_part_3: "3. По пути вверх загляните в одну из пещер — они безопасны, но лучше иметь фонарик.",
      text_part_4: "4. Ветер на вершине может быть резким — наденьте непродуваемую куртку даже летом.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Cave Hill",
      desc: "A misty morning on the trail to Cave Hill greets travelers with the cries of ravens and the smell of damp earth. It is said that Swift was inspired for 'Gulliver's Travels' here. At the summit, where steep cliffs rise above Belfast, the breathtaking view takes your breath away — not from fatigue, but from the sight itself. Where the sky meets the lake, you feel like part of something ancient and majestic.",
      surroundings: "Surroundings",
      surdesc: "At the foot of the hill lies the Belfast Castle park. The trail to the summit begins there, and nearby is a cozy café with views of the bay.",
      mapt: "Map of the area",
      text_part_1: "1. The best time is early in the morning before 9:00 AM: cool, quiet, and without crowds.",
      text_part_2: "2. Take a thermos of tea — there's a bench at the top with a view of the city.",
      text_part_3: "3. Along the way up, stop by one of the caves — they're safe, but it's a good idea to have a flashlight.",
      text_part_4: "4. The wind at the summit can be sharp — wear a windproof jacket even in the summer.",
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
