const timeElement = document.querySelector(".time");
function convertTopersian(e_number) {
  const englishTofarsi = {
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
  let p_umber = "";
  for (let i = 0; i < e_number.length; i++) {
    const digit = e_number[i];
    p_umber += englishTofarsi[digit] || digit;
  }
  return p_umber;
}
const getTime = async () => {
  const res = await fetch("https://api.dastyar.io/express/clock/current");
  const information = await res.json();
  return information;
};
const time = async (e) => {
  let time = await getTime();
  let date = new Date(time.current);
  let hour,
      min,
      hour_,
      min_,
      nine,
      zero;
  hour = date.getHours();
  hour_ = convertTopersian(String(hour));
  min = date.getMinutes();
  min_ = convertTopersian(String(min));
  nine = convertTopersian("9");
  zero = convertTopersian("0");
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
setInterval(time, 1000);
setTimeout(time, 0);
