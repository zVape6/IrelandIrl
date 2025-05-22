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
      about: "Парк Брук",
      desc: "Парк Брук в Дерри — это зеленый уголок, расположенный в западной части города, идеально подходящий для спокойных прогулок и пикников. С разнообразием растений, от цветущих садов до лесных аллей, парк идеально сочетается с природной атмосферой. На его территории можно найти озеро, где часто можно встретить местных жителей на лодках или просто наслаждающихся красотой природы.",
      surroundings: "Окрестности",
      surdesc: "В нескольких минутах ходьбы от парка находится станция Дерри, что делает его удобным местом для отдыха перед дальнейшими поездками. Вдоль парка также проходят красивые прогулочные маршруты вдоль рек и озер.",
      mapt: "Карта района",
      text_part_1: "1. Утром лучше всего посетить парк, когда свет мягкий и свежий, а людей еще немного.",
      text_part_2: "2. Не пропустите небольшие беседки в самом центре парка — они идеально подходят для отдыха.",
      text_part_3: "3. Парк является отличным местом для семейных прогулок, так как в нем есть детские площадки и много открытых пространств для игр.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Brook Park",
      desc: "Brook Park in Derry is a green corner located in the western part of the city, perfect for peaceful walks and picnics. With a variety of plants, from blooming gardens to forested alleys, the park perfectly blends with the natural atmosphere. On its territory, you can find a lake, often frequented by locals in boats or simply enjoying the beauty of nature.",
      surroundings: "Surroundings",
      surdesc: "A few minutes' walk from the park is Derry Station, making it a convenient place to rest before further trips. Beautiful walking routes along rivers and lakes also pass through the park.",
      mapt: "Map of the area",
      text_part_1: "1. The best time to visit the park is in the morning when the light is soft and fresh, and there are fewer people.",
      text_part_2: "2. Don’t miss the small gazebos in the heart of the park—they’re perfect for resting.",
      text_part_3: "3. The park is a great place for family walks, as it has playgrounds and plenty of open spaces for games.",
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
