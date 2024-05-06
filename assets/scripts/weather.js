const temperature = document.querySelector(".box_weather h1");
const imgtemperature = document.querySelector(".box_weather i");
const jokElement = document.querySelector(".box_weather h3");
const maximumElement = document.querySelector(".box_weather .max");
const minimumElement = document.querySelector(".box_weather .min");
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
  let persianNumber = "";
  for (let i = 0; i < englishNumber.length; i++) {
    const digit = englishNumber[i];
    persianNumber += englishToFarsi[digit] || digit;
  }
  return persianNumber;
}
const getWeather = async () => {
  const res = await fetch(
    "https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403&lang=fa&theme=light"
  );
  const data = await res.json();
  return data;
};
const showWeather = async () => {
  let date = await getWeather();
  let min, max, text, emoji, temp, tempF, maxF, minF;
  temp = date[0].current;
  temp = Math.floor(temp);
  tempF = convertToPersian(String(temp));
  min = date[0].min;
  min = Math.floor(min);
  minF = convertToPersian(String(min));
  max = date[0].max;
  max = Math.floor(max);
  maxF = convertToPersian(String(max));
  text = date[0].customDescription.text;
  emoji = date[0].customDescription.emoji;
  temperature.innerHTML = `${tempF}°`;
  maximumElement.innerHTML = `${maxF}° حداکثر `;
  minimumElement.innerHTML = `°${minF} حداقل`;
  jokElement.innerHTML = `${text}${emoji}`;
imgtemperature.innerHTML = `<img src="./assets/images/cloud.svg">`;
};

showWeather();
