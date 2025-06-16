import { TempContainer } from "./assets/components/TempContainer";
import { ForeCast } from "./assets/components/Forecast";
import { HourStats } from "./assets/components/HourStats";
import useForecast from "./hooks/useForecast";
import useDates from "./hooks/useDates";
import { Loading } from "./assets/components/Loading";
import { SearchBar } from "./assets/components/SearchBar";

function App() {
  const { forecast, selectedForecast, changeForecast, setCountry } =
    useForecast();
  const dates = useDates();

  if (!forecast) return <Loading />;

  const {
    forecast: { forecastday },
    current,
    location,
  } = forecast;

  return (
    <div className="h-screen text-center bg-linear-45 from-slate-400 to-blue-500 p-5">
      <SearchBar handleLocation={setCountry} />
      <TempContainer data={current} location={location.name} />
      <ForeCast
        forecast={forecastday}
        dates={dates}
        setForecast={(i) => changeForecast(i)}
      />
      <HourStats twoDayHourlyData={selectedForecast} />
    </div>
  );
}

export default App;
