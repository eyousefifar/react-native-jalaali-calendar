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
export const getJDayInMonth = (year, month) => {
  if (month <= 6) {
    return 31;
  } else if (month > 6 && month < 12) {
    return 30;
  } else if (month == 12) {
    if (moment.jIsLeapYear(year)) {
      return 30;
    } else {
      return 29;
    }
  }
};
export const jMonthInfo = (year, month) => {
  let jDayInMonth = getJDayInMonth(year, month);
  let jDate = new moment(`${year}/${month}/1`, "jYYYY/jM/jD");
  let weekDay = jDate.day();
  let jWeekDay = weekDay == 6 ? 1 : weekDay + 2;
  return { startOfMonth: jWeekDay, jDayInMonth: jDayInMonth };
};
export const persianNumber = enNumber => {
  if (enNumber != undefined && enNumber != null) {
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
export const englishNumber = persianNumber => {
  const num_dic = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9"
  };
  let enNum = persianNumber.replace(/[۰-۹]/g, w => {
    return num_dic[w];
  });
  return parseInt(enNum);
};
export const jToday = () => {
  let today = new moment().format("jYYYY,jM,jD");
  return { jYear: today.jYear, jMonth: today.jMonth, jDay: today.jDay };
};
