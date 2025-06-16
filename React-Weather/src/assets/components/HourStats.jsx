import useHours from "../../hooks/useHours";

export const HourStats = ({ twoDayHourlyData }) => {
  const { start, pageSize, formatTime, handleNav } = useHours();

  const lastEntry = twoDayHourlyData.length;

  return (
    <div className="flex flex-col mx-auto sm:w-[80%]">
      <h2 className="font-bold text-white text-xl text-left ml-2">Hourly</h2>
      <div className="border-1 w-full border-white/40 mx-auto my-2"></div>

      <div className="flex items-center justify-evenly">
        <button
          className="fa-regular fa-angle-left fa-lg cursor-pointer disabled:opacity-40"
          disabled={start === 0}
          onClick={() => {
            handleNav("left");
          }}
        ></button>
        <div className="flex py-4 gap-2">
          {twoDayHourlyData.slice(start, start + pageSize).map((hour, i) => (
            <div className="flex flex-col" key={i}>
              <p>{formatTime(hour.time)}</p>
              <img src={hour.condition.icon} />
              <p>{Math.round(hour.temp_c)}°</p>
            </div>
          ))}
        </div>
        <button
          className="fa-regular fa-angle-right fa-lg cursor-pointer disabled:opacity-40"
          disabled={start + pageSize >= lastEntry}
          onClick={() => {
            handleNav("right");
          }}
        ></button>
      </div>
    </div>
  );
};
