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
      about: "Армагская обсерватория",
      desc: "Армагская обсерватория — это историческое место для наблюдений за звездами, расположенное в самом центре Армы. Она была основана в XIX веке и является одной из старейших в Ирландии. Здесь можно узнать о развитии астрономии в стране и даже наблюдать за небесными телами с помощью старинных телескопов.",
      surroundings: "Окрестности",
      surdesc: "Обсерватория находится в центре Армы, в окружении парков и исторических зданий. Вы также можете прогуляться по близлежащим улицам и насладиться атмосферой старого города.",
      mapt: "Карта района",
      text_part_1: "1. Лучше всего посетить обсерваторию в ночное время, когда есть возможность увидеть звездное небо через телескоп.",
      text_part_2: "2. Сотрудники обсерватории часто проводят экскурсии, так что не упустите возможность узнать больше о небесных телах.",
      text_part_3: "3. Запланируйте визит в обсерваторию на ясную ночь для лучшего наблюдения за небом.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Armagh Observatory",
      desc: "Armagh Observatory is a historic site for stargazing, located in the heart of Armagh. It was founded in the 19th century and is one of the oldest observatories in Ireland. Here, you can learn about the development of astronomy in the country and even observe celestial bodies through ancient telescopes.",
      surroundings: "Surroundings",
      surdesc: "The observatory is located in the center of Armagh, surrounded by parks and historic buildings. You can also take a stroll around the nearby streets and enjoy the atmosphere of the old town.",
      mapt: "Map of the Area",
      text_part_1: "1. The best time to visit the observatory is at night, when you can see the starry sky through the telescope.",
      text_part_2: "2. Observatory staff often give tours, so don't miss the opportunity to learn more about celestial bodies.",
      text_part_3: "3. Plan your visit to the observatory on a clear night for the best sky viewing.",
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
