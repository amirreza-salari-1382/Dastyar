const lunarateDElement = document.querySelector(".box_time .lunar");
const AdDateElement = document.querySelector(".box_time .gregorian");
const todaydDateElement = document.querySelector(".box_time .date");
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
const getDate = async () => {
  const res = await fetch(
    "https://kaaryar0506reactblog.liara.run/current/time"
  );
  const data = await res.json();
  return data;
};
const showLunarDate = async () => {
  let date = await getDate();
  let year, month, dayInMonth, yearCut, yearF, dayInMonthF;
  year = date.islamicHijri.year;
  yearCut = year.substr(0, year.length - 3);
  yearF = convertToPersian(yearCut);
  month = date.islamicHijri.month;
  dayInMonth = date.islamicHijri.dayInMonth;
  dayInMonthF = convertToPersian(dayInMonth);
  lunarateDElement.innerHTML = `${yearF}/${month}/${dayInMonthF}`;
};
showLunarDate();
const showShamsiDate = async () => {
  let date = await getDate();
  let month, dayInMonth;
  month = date.shamsi.month;
  dayInMonth = date.shamsi.dayInMonth;
  todaydDateElement.innerHTML = `${dayInMonth} ${month}`;
};
showShamsiDate();
const showAdDate = async () => {
  let date = await getDate();
  let year, month, dayInMonth, monthCut, yearF, dayInMonthF;
  year = date.miladi.year;
  yearF = convertToPersian(year);
  month = date.miladi.month;
  monthCut = month.substr(0, month.length - 5);
  dayInMonth = date.miladi.dayInMonth;
  dayInMonthF = convertToPersian(dayInMonth);
  AdDateElement.innerHTML = `${yearF}/${monthCut}/${dayInMonthF}`;
};
showAdDate();
