export const TempContainer = ({ location, data }) => {
  const {
    condition: { text },
    humidity,
    temp_c,
    uv,
  } = data;

  return (
    <div className="font-semibold text-2xl text-left mt-[7vh] mb-15 sm:ml-20">
      <div className="flex gap-2 items-center">
        <i className="fa-regular fa-location-dot fa-xl"></i>
        <p>{location}</p>
      </div>

      <p className="font-bold text-9xl sm:text-[20vw] text-white">
        {Math.round(temp_c)}°
      </p>
      <p>Feels like {data.feelslike_c}</p>

      <div className="flex flex-row font-medium mt-[2vw] gap-2 items-center">
        <i className="fa-regular fa-droplet"></i>
        <p>{humidity}%</p>
        <i className="fa-regular fa-sun-bright"></i>
        <p>{uv}</p>
      </div>

      <h2>{text}</h2>
    </div>
  );
};
