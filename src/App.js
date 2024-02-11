import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [city, setCity] = useState("New Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [units, setUnits] = useState("metric");
  
  useEffect(() => {
    const api_url=`http://api.weatherapi.com/v1/current.json?key=3b054ebe8dd8483795b93136241102&q=${city}&aqi=no`;
    toast.info(`Fetching weather for ${city}`);
    fetch(api_url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not get data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400`}>
      <TopButtons setQuery={setCity} />
      <Inputs setQuery={setCity} units={units} setUnits={setUnits}/>

      {weatherData && (
        <div>
        <TimeAndLocation stats={{
          dat: weatherData.location.localtime,
          tim: weatherData.location.tz_id,
          name: weatherData.location.name,
          country: weatherData.location.country,
        }}/>

        <TemperatureAndDetails stats={{
          details: weatherData.current.condition.text,
          icon: weatherData.current.condition.icon,
          temp: weatherData.current.temp_c,
          speed: weatherData.current.wind_kph,
          humidity:weatherData.current.humidity,
          feels_like: weatherData.current.feelslike_c,
          timezone:weatherData.location.tz_id,
        }}/>
        <Forecast />
        <Forecast />
      </div>
      )}
      

      

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
