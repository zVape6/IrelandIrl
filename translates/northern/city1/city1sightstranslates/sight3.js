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
      about: "Титаник Белфаст", 
      desc: "Стальные ребра музея сверкают, как льдины в том роковом апреле. В Зале Чертежей до сих пор пахнет чернилами и дубом — здесь на гигантских экранах оживают эскизы \"непотопляемого\". Особенно жутко в комнате SOS: мерцание азбуки Морзе на стенах и нарастающий гул тонущего корабля...",
      surroundings: "Окрестности",
      surdesc: "Рядом пришвартована SS Nomadic — последний паром White Star Line. Через дорогу — доки, где до сих пор ремонтируют корабли (по субботам пускают на экскурсии).",
      mapt: "Карта района",
      text_part_1: "1. Закажите \"Обед первого класса\" в ресторане с видом на верфи (меню 1912 года!)",
      text_part_2: "2. В 18:00 включают \"эффект айсберга\" — музей подсвечивают синим",
      text_part_3: "3. На 4 этаже есть балкон с биноклями — можно рассмотреть доки",
      text_part_4: "4. Найдите бронзовую табличку с именами всех 15 000 строителей",
      tips: "Советы"
    },
    en: {
      button: "Translate",
      about: "Titanic Belfast",
      desc: "The museum’s steel ribs shimmer like ice on that fateful April day. In the Drawing Room, the scent of ink and oak lingers — where massive screens bring the 'unsinkable' to life. The SOS room is haunting: flickering Morse code on the walls and the rising hum of a sinking ship...",
      surroundings: "Surroundings",
      surdesc: "Moored nearby is the SS Nomadic — the last White Star Line tender. Across the road — working docks that still repair ships (tours available on Saturdays).",
      mapt: "Map of the area",
      text_part_1: "1. Order the 'First Class Lunch' at the dock-view restaurant (menu from 1912!)",
      text_part_2: "2. At 6 PM, they activate the 'iceberg effect' — blue lights surround the museum",
      text_part_3: "3. On the 4th floor there's a balcony with binoculars — perfect for dock spotting",
      text_part_4: "4. Find the bronze plaque with the names of all 15,000 builders",
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