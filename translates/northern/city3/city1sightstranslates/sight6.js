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
      about: "Библиотека Робинсона",
      desc: "Библиотека Робинсона в Арме — это один из самых старых и красивых книжных храмов в Ирландии. Открытая в XIX веке, она хранит богатую коллекцию книг и манускриптов, а также привлекает любителей архитектуры своей уникальной атмосферой. Особенность библиотеки — ее историческое здание с витражами и оригинальной мебелью.",
      surroundings: "Окрестности",
      surdesc: "Вокруг библиотеки находится множество исторических зданий и тихих аллей, идеально подходящих для прогулок. Вы также найдете небольшие кафе и магазины, где можно перекусить после визита.",
      mapt: "Карта района",
      text_part_1: "1. Если вы любите старинные книги, обязательно поинтересуйтесь, какие редкие издания можно увидеть здесь.",
      text_part_2: "2. Загляните в библиотечный дворик — это прекрасное место для отдыха и вдохновения.",
      text_part_3: "3. Принесите свою книгу и насладитесь тишиной в одном из уютных уголков библиотеки.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Robinson Library",
      desc: "The Robinson Library in Armagh is one of the oldest and most beautiful book sanctuaries in Ireland. Opened in the 19th century, it holds a rich collection of books and manuscripts and attracts architecture lovers with its unique atmosphere. The library's historic building features stained glass windows and original furniture.",
      surroundings: "Surroundings",
      surdesc: "The library is surrounded by numerous historical buildings and quiet alleys, perfect for walks. You’ll also find small cafes and shops where you can grab a bite after your visit.",
      mapt: "Map of the Area",
      text_part_1: "1. If you love old books, be sure to ask about the rare editions you can see here.",
      text_part_2: "2. Visit the library's courtyard — it’s a wonderful place to relax and get inspired.",
      text_part_3: "3. Bring your own book and enjoy the quiet in one of the cozy corners of the library.",
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
