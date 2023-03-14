import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

/* eslint-disable no-nested-ternary */
const dayOrDays = (days) => (days > 1
  ? `${String(days).padStart(2, 0)} days `
  : days !== 0
    ? `${String(days).padStart(2, 0)} day `
    : "");

const calcTimeLeft = (start) => {
  const now = dayjs().utc();
  const diff = start * 1000 - +now;

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (diff > 0) {
    timeLeft = {
      days: dayOrDays(Math.floor(diff / (1000 * 60 * 60 * 24))),
      hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, 0),
      minutes: String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, 0),
      seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, 0),
    };
  }

  return `${timeLeft.days}${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`;
};

export default calcTimeLeft;
