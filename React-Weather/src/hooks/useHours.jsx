import { useEffect, useState } from "react";

const useHours = () => {
  const [pageSize, setPageSize] = useState(5);
  const [start, setStart] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setPageSize(
        width >= 1280
          ? 9
          : width >= 1024
          ? 8
          : width >= 748
          ? 7
          : width >= 640
          ? 6
          : 5
      );
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); //* This will handle values show dynamically according to window width

  const formatTime = (hour) => {
    const time = Number(hour.split(" ")[1].split(":")[0]);
    if (time === 0) return "12 am";
    if (time === 12) return "12 pm";
    return time >= 13 ? `${time - 12} pm` : `${time} am`;
  };

  const handleNav = (direction) => {
    if (direction === "right") {
      setStart((prev) => prev + pageSize);
    } else if (direction === "left") {
      setStart((prev) => prev - pageSize);
    }
  };

  return { pageSize, start, formatTime, handleNav };
};

export default useHours;
