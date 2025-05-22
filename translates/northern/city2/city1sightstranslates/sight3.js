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
      about: "Мост Мира",
      desc: "Мост Мира, открытый в 2011 году, является одним из самых современных сооружений Дерри. Этот пешеходный мост соединяет два берега реки Фойл и символизирует примирение между различными частями города. Он стал важной частью культурной и архитектурной сцены города, особенно в контексте процесса мира после конфликта в Северной Ирландии.",
      surroundings: "Окрестности",
      surdesc: "Мост Мира расположен недалеко от набережной, рядом с центром города, и является отличным местом для начала прогулки по Дерри.",
      mapt: "Карта района",
      text_part_1: "1. Мост особенно красив в вечернее время, когда он подсвечивается.",
      text_part_2: "2. Прогуляйтесь по мосту и посмотрите на панорамный вид на реку Фойл.",
      text_part_3: "3. Подходите к мосту с обеих сторон, чтобы оценить контраст между старым и новым городом.",
      text_part_4: "4. В июле и августе на мосту проходят фестивали и культурные мероприятия.",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Peace Bridge",
      desc: "The Peace Bridge, opened in 2011, is one of the most modern structures in Derry. This pedestrian bridge connects both banks of the River Foyle and symbolizes reconciliation between different parts of the city. It has become an important part of the city's cultural and architectural scene, especially in the context of the peace process after the Northern Ireland conflict.",
      surroundings: "Surroundings",
      surdesc: "The Peace Bridge is located near the waterfront, close to the city center, and is a great place to start a walk around Derry.",
      mapt: "Map of the area",
      text_part_1: "1. The bridge is especially beautiful in the evening when it is illuminated.",
      text_part_2: "2. Take a walk across the bridge and enjoy the panoramic view of the River Foyle.",
      text_part_3: "3. Approach the bridge from both sides to appreciate the contrast between the old and new parts of the city.",
      text_part_4: "4. In July and August, festivals and cultural events take place on the bridge.",
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
