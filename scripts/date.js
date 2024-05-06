const lunarElement = document.querySelector(".box_time .lunar");
const gregorianElement = document.querySelector(".box_time .gregorian");
const dateElement = document.querySelector(".box_time .date");
function convertToPersian(e_number) {
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
  for (let i = 0; i < e_number.length; i++) {
    const digit = e_number[i];
    p_number += englishToFarsi[digit] || digit;
  }
  return p_number;
}
const getDate = async () => {
  const res = await fetch(
    "https://kaaryar0506reactblog.liara.run/current/time"
  );
  const information = await res.json();
  return information;
};
const lunar = async () => {
  let date = await getDate();
  let year,
      month,
      day,
      year__,
      year_,
      day_;
  year = date.islamicHijri.year;
  year__ = year.substr(0, year.length - 3);
  year_ = convertToPersian(year__);
  month = date.islamicHijri.month;
  day = date.islamicHijri.day;
  dayInMonth_ = convertToPersian(day);
  lunarElement.innerHTML = `${year_}/${month}/${dayInMonth_}`;
};
lunar();
const Shamsi = async () => {
  let date = await getDate();
  let month,
      day;
  month = date.shamsi.month;
  day = date.shamsi.day;
  dateElement.innerHTML = `${day} ${month}`;
};
Shamsi();
const date = async () => {
  let date = await getDate();
  let year,
      month,
      day,
      month_,
      year_,
      day_;
  year = date.miladi.year;
  year_ = convertToPersian(year);
  month = date.miladi.month;
  month_ = month.substr(0, month.length - 5);
  day = date.miladi.day;
  day_ = convertToPersian(day);
  gregorianElement.innerHTML = `${year_}/${month_}/${day_}`;
};
date();
