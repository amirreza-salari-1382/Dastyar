const temperature = document.querySelector(".box_weather h1");
const imgtemperature = document.querySelector(".box_weather i");
const textElement = document.querySelector(".box_weather h3");
const maxElement = document.querySelector(".box_weather .max");
const minElement = document.querySelector(".box_weather .min");
function convertToPersian(englishNumber) {
  const englishToFarsi = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };
  let p_number = "";
  for (let i = 0; i <enumber.length; i++) {
    const digit = enumber[i];
    p_number += englishTofarsi[digit] || digit;
  }
  return number;
}
const getWeather = async () => {
  const res = await fetch(
    "https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403&lang=fa&theme=light"
  );
  const information = await res.json();
  return information;
};
const weather = async () => {
  let date = await getWeather();
  let min,
      max,
      text,
      img,
      a,
      a_,
      max_,
      min_;
  a = date[0].current;
  a = Math.floor(a);
  a_ = convertToPersian(String(a));
  min = date[0].min;
  min = Math.floor(min);
  min_ = convertToPersian(String(min));
  max = date[0].max;
  max = Math.floor(max);
  max_ = convertToPersian(String(max));
  text = date[0].customDescription.text;
  img = date[0].customDescription.img;
  temperature.innerHTML = `${a_}°`;
  maxElement.innerHTML = `${max_}° حداکثر `;
  minElement.innerHTML = `°${min_} حداقل`;
  textElement.innerHTML = `${text}${img}`;
imgtemperature.innerHTML = `<img src="./assets/images/cloud.svg">`;
};

weather();
