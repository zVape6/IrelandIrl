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
      about: "Музей Тауэр",
      desc: "Музей Тауэр в Дерри — это историческое место, которое рассказывает о значении этого города в контексте войн и революций. Здесь вы сможете увидеть оригинальные артефакты, оружие, а также предметы быта разных эпох. Музей особенно интересен для тех, кто хочет узнать больше о событиях Страстной недели и истории конфликта в Северной Ирландии.",
      surroundings: "Окрестности",
      surdesc: "Музей Тауэр находится в самом центре города, рядом с историческими памятниками и крепостными стенами. После посещения музея можно прогуляться по старым улицам Дерри и насладиться его атмосферой.",
      mapt: "Карта района",
      text_part_1: "1. Начинайте экскурсию с введения в историю города — оно подготовит вас к более глубокому изучению.",
      text_part_2: "2. Музей часто проводит временные выставки, которые могут быть особенно интересны.",
      text_part_3: "3. Не пропустите экспозицию, посвященную эпохе Великой войны и ее влиянию на Дерри.",
      text_part_4: "4. Вход в музей бесплатный, но пожертвования приветствуются.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Tower Museum",
      desc: "The Tower Museum in Derry is a historic site that tells the story of the city's role in wars and revolutions. Here, you can see original artifacts, weapons, and items from various eras. The museum is especially interesting for those who want to learn more about the events of the Troubles and the history of the conflict in Northern Ireland.",
      surroundings: "Surroundings",
      surdesc: "The Tower Museum is located in the heart of the city, near historical landmarks and city walls. After visiting the museum, you can take a stroll through the old streets of Derry and enjoy its atmosphere.",
      mapt: "Map of the area",
      text_part_1: "1. Start your tour with an introduction to the city's history to prepare for a deeper understanding.",
      text_part_2: "2. The museum frequently hosts temporary exhibitions that can be especially interesting.",
      text_part_3: "3. Don't miss the exhibit dedicated to the Great War era and its impact on Derry.",
      text_part_4: "4. Admission to the museum is free, but donations are welcome.",
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
