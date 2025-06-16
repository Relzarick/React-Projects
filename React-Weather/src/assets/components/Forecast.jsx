export const ForeCast = ({ forecast, setForecast, dates }) => {
  return (
    <div className="w-full sm:w-[50%] mb-2 sm:mx-auto">
      {forecast.map(({ day }, index) => (
        <div
          className={
            "px-2 rounded-md flex justify-between items-center cursor-pointer bg-white/1 hover:bg-white/5"
          }
          key={index}
          onClick={() => setForecast(index)}
        >
          <p className="font-medium">{index === 0 ? "Today" : dates[index]}</p>

          <div className="flex ml-2 items-center gap-2">
            <p>H: {day.avghumidity}%</p>

            <div className="flex gap-2 items-center">
              <img src={day.condition.icon} />
              <p>{Math.round(day.maxtemp_c)}°</p>
              <p>{Math.round(day.mintemp_c)}°</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
