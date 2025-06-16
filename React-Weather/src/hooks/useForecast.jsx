import { useEffect, useMemo, useState } from "react";
import fetchForecast from "../assets/services/fetchForecast";

const useForecast = () => {
  const [forecast, setForecast] = useState(null);
  const [selectedForecast, setSelectedForecast] = useState(null);
  const [country, setCountry] = useState("Singapore");

  const currentHour = new Date().getHours();
  const totalHours = useMemo(
    () => forecast?.forecast.forecastday.map((d) => d.hour),
    [forecast]
  );

  useEffect(() => {
    fetchForecast(country).then((data) => {
      setForecast(data);

      const totalHours = data.forecast.forecastday.map((d) => d.hour);
      setSelectedForecast(
        [...totalHours[0], ...totalHours[1]].filter((_, i) => i > currentHour)
      );
    });
  }, [currentHour, country]); //* FETCHING INITIAL DATA

  const changeForecast = (index) => {
    setSelectedForecast(
      index === 0
        ? [...totalHours[index], ...totalHours[index + 1]].filter(
            (_, i) => i > currentHour
          )
        : [...totalHours[index], ...totalHours[index + 1]]
    );
  }; //* CHANGING SELECTED FORECAST DATE

  return { forecast, selectedForecast, country, changeForecast, setCountry };
};

export default useForecast;
