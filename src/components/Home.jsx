import {
  CloudRain,
  Sun,
  Wind,
  CloudSnow,
  ThermometerSun,
  Droplets,
  Cloud,
  CloudDrizzle,
  CloudFog,
  Cloudy,
} from "lucide-react";

//axios
import axios from "axios";
const link = `https://api.open-meteo.com/v1/forecast?latitude=35.3621&longitude=35.9276&current=temperature_2m,apparent_temperature,precipitation_probability,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation_probability,wind_speed_10m,uv_index&timezone=auto&past_hours=6`;
// Links For Testing
// const link = `https://api.open-meteo.com/v1/forecast?latitude=64.1466&longitude=-21.9426&current=temperature_2m,apparent_temperature,precipitation_probability,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation_probability,wind_speed_10m,uv_index&timezone=auto&past_hours=6`;
// react
import { useEffect, useState } from "react";

let cancelAxios = null;
const Home = () => {
  console.log('Rendring the component => Mounting');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
  axios.get(link, {
    cancelToken: new axios.CancelToken((c) => {
      cancelAxios = c;
    })
  }).then((response) => {
    // handling success
    // const responseTemp = Math.round(response.data.main.temp - 273.15);
    console.log('Weather Data:', response.data);
    setWeatherData(response.data);
  }).catch((error) => {
      if (!axios.isCancel(error)) {
        console.error('Error fetching weather:', error);
      }
  });
  // Check if if;
  return () => {
    cancelAxios();
    console.log('Unmounting the component => Cleanup => Cancelling Axios Request');
  }
},[]);
// to get the weather icon based on the rain probability and temperature
// TODO: Add More Icons For More Weather Conditions
// FIXME: Icons Not Work With the weather
const getWeatherIcon = (rainProbability, temp) => {
  // مطر غزير
  if (rainProbability > 70) {
    return <CloudRain className="w-16 h-16 text-gray-50" />;
  } 
  // رذاذ خفيف
  else if (rainProbability > 40) {
    return <CloudDrizzle className="w-16 h-16 text-gray-50" />;
  } 
  // غيوم
  else if (rainProbability > 20) {
    return <Cloudy className="w-16 h-16 text-gray-50" />;
  }
  // غيوم خفيفة
  else if (rainProbability > 10) {
    return <Cloud className="w-16 h-16 text-gray-50" />;
  }
  // شمس ساطعة
  else {
    return <Sun className="w-16 h-16 text-yellow-300 fill-yellow-300" />;
  }
};
  // To fix time format
  const formatTime = (timeString) => {
  const date = new Date(timeString);
  return date.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
};

if (!weatherData) {
  return (
    <div className="container max-w-4xl mx-auto px-4 flex justify-center items-center min-h-screen">
      <p className="text-xl">Loading weather data...</p>
    </div>
  );
}
const current = weatherData.current;
const hourly = weatherData.hourly;
// Get Next Six Hours From The Data
const next6Hours = hourly.time.slice(0,6).map((time,i) => ({
  time: formatTime(time),
  temp: hourly.temperature_2m[i],
  rainPord:  hourly.precipitation_probability[i]
}))
  return (
    <>
      {/* Main Content */}
      <div className="container max-w-4xl mx-auto px-4">
        {/* First Section */}
        <div className=" bg-transparent max-w-7xl mx-auto px-4 flex justify-between">
          <div>
            <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight text-balance">
              Jableh
            </h1>
            <p className="text-gray-800 dark:text-gray-50">
              Chance of rain: {current.precipitation_probability}%
            </p>
            <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight text-balance mt-7">
              {Math.round(current.temperature_2m)}°
            </h1>
          </div>
          <div>
            <Sun className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 text-accent fill-accent" />
          </div>
        </div>
        {/* == First Section === */}
        <br />

        {/* Second Section Today's */}
        <div className="container mx-auto p-4 rounded-xl bg-primary">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-gray-200 dark:text-zinc-300">
            Todays Forecas
          </h3>
          <div className="p-3 mt-1 mb-1 w flex justify-center items-center flex-wrap">
            {next6Hours.map((hour, i) => (
                < >
                  <div className="flex flex-col p-4 m-1 items-center">
                    <h4 className="text-lg font-mono tracking-tight dark:text-gray-50 text-white mt-2 mb-4">
                      {hour.time}
                    </h4>
                    <span className="mt-2 mb-4 p-2">
                      {getWeatherIcon(hour.rainPord, hour.temp)}
                    </span>
                    <h4 className="text-lg font-mono tracking-tight dark:text-gray-50 text-white">
                      {Math.round(hour.temp)}°
                    </h4>
                  </div>
                  |{" "}
                </>
              ))}
          </div>
        </div>
        {/* == Second Section Today's === */}
        <br />
        {/* Air Section */}
        <div className="container mx-auto p-4 rounded-xl bg-primary">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-gray-200 dark:text-zinc-300 mb-2">
            Air Condations
          </h3>

          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            {/* Real Feel */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-gray-50 mb-2">
                <ThermometerSun className="w-8 h-8" />
                <span className="">Real Feel</span>
              </div>
              <h4 className="scroll-m-20 text-2xl font-bold tracking-tight text-zinc-50 dark:text-zinc-300">
                30o
              </h4>
            </div>
            {/* Wind */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-gray-50 mb-2">
                <Wind className="w-8 h-8" />
                <span>Wind</span>
              </div>
              <h4 className="scroll-m-20 text-2xl font-bold tracking-tight text-zinc-50 dark:text-zinc-300">
                0.2 km/h
              </h4>
            </div>
            {/* Chance of Rain */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-gray-50 mb-2">
                <Droplets className="w-8 h-8" />
                <span> Chance of rain</span>
              </div>
              <h4 className="scroll-m-20 text-2xl font-bold tracking-tight text-zinc-50 dark:text-zinc-300">
                0.2 km/h
              </h4>
            </div>
            {/* UV Index */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-gray-50 mb-2">
                <Sun className="w-8 h-8 " />
                <span>UV Index</span>
              </div>
              <h4 className="scroll-m-20 text-2xl font-bold tracking-tight text-zinc-50 dark:text-zinc-300">
                0.2 km/h
              </h4>
            </div>
          </div>
        </div>
        {/* == Air Section === */}
      </div>
      {/* === Main Content === */}
    </>
  );
};

export default Home;
