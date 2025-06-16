import { useMemo } from "react";

const useDates = () => {
  return useMemo(() => {
    const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const todayIndex = new Date().getDay();

    return [
      ...daysOfTheWeek.slice(todayIndex),
      ...daysOfTheWeek.slice(0, todayIndex),
    ];
  }, []); //* GETTING DATES
};

export default useDates;
