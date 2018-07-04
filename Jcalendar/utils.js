// functions needed for jalaali calendar
import moment from "moment-jalaali";
export const jWeekdays = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنج شنبه",
  "جمعه"
];
export const jMonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند"
];
export const firstDayOfMonth = (year, month) => {
  let jDate = new moment(`${year}/${month}/1`, "jYYYY/jM/jD");
  let weekDay = jDate.day();
  let jWeekDay = weekDay == 6 ? 1 : weekDay + 2;
  return jWeekDay;
};
export const persianNumber = enNumber => {
  if (enNumber != null) {
    let enNum = enNumber.toString();
    let persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    let persianMap = persianDigits.split("");
    let persian_number = enNum.replace(/\d/g, function(m) {
      return persianMap[parseInt(m)];
    });
    return persian_number;
  }
  return;
};
