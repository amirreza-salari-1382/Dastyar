const timeElement = document.querySelector(".time");
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
const getTime = async () => {
  const res = await fetch("https://api.dastyar.io/express/clock/current");
  const data = await res.json();
  return data;
};
const showTime = async (e) => {
  let time = await getTime();
  let date = new Date(time.current);
  let hour, min, hourF, minF, nine, zero;
  hour = date.getHours();
  hourF = convertToPersian(String(hour));
  min = date.getMinutes();
  minF = convertToPersian(String(min));
  nine = convertToPersian("9");
  zero = convertToPersian("0");
  if(hour<10){
    if(min<10){
      timeElement.innerHTML = `۰+${hourF}:۰${minF}`;
    }
    else{
      timeElement.innerHTML = `۰+${hourF}:${minF}`;
    }
  }
  else{
    if(min<10){
      timeElement.innerHTML = `${hourF}:۰${minF}`;
    }
    else{
      timeElement.innerHTML = `${hourF}:${minF}`;
    }
  }
}; 
setInterval(showTime, 1000);
setTimeout(showTime, 0);
