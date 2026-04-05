// Icons
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
  Snowflake,
} from "lucide-react";

// react
import { useEffect, useState } from "react";
// Other
import { useTranslation } from 'react-i18next';
//Redux
import { useSelector, useDispatch } from "react-redux";
import { changeResult,fetchWeather } from "../features/weatherApiSlice";


let cancelAxios = null;
const Home = () => {
  //Redux Code
  const dispatch = useDispatch();

  console.log('Rendring the component => Mounting');
  const { t, i18n } = useTranslation();

  // const [weatherData, setWeatherData] = useState(null);
  const isLoading = useSelector((state) => {
    return state.weather.isLoading
  });
  const weatherData = useSelector((state) => {
    return state.weather.weather
  });
  const error = useSelector((state) => {
    return state.weather.error
  })

  useEffect(() => {
    // Tring Redux 
    dispatch(changeResult())
    dispatch(fetchWeather())
  // Check if if;
  // return () => {
    // cancelAxios();
    // console.log('Unmounting the component => Cleanup => Cancelling Axios Request');
  // }
},[]);
// to get the weather icon based on the rain probability and temperature
const getWeatherIcon = (rainProbability, temp, className) => {
  if (temp < 0) {
    if (rainProbability > 50) {
      return <CloudSnow className={`${className} text-blue-200`} />; // Heavy snow
    } else if (rainProbability > 20) {
      return <Snowflake className={`${className} text-blue-100`} />; // Light snow
    } else {
      return <CloudSnow className={`${className} text-gray-300`} />; // snow clouds
    }
  }
  // طقس بارد جداً (0-5 درجات)
  else if (temp >= 0 && temp <= 5) {
    if (rainProbability > 40) {
      return <CloudRain className={`${className} w-16 h-16 text-blue-300`} />; // cold rain
    } else {
      return <Cloud className={`${className} w-16 h-16 text-gray-300`} />; // cold clouds
    }
  }
  // مطر غزير
  else if (rainProbability > 70) {
    return <CloudRain className={`${className} text-gray-50`} />;
  } 
  // رذاذ خفيف
  else if (rainProbability > 40) {
    return <CloudDrizzle className={`${className} text-gray-50`} />;
  } 
  // غيوم
  else if (rainProbability > 20) {
    return <Cloudy className={`${className} w-16 h-16 text-gray-50`} />;
  }
  // غيوم خفيفة
  else if (rainProbability > 10) {
    return <Cloud className={`${className} w-16 h-16 text-gray-50`} />;
  }
  // شمس ساطعة
  else {
    return <Sun className={`${className} text-yellow-300 fill-yellow-300`} />;
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

if (isLoading) {
  return (
    <div className="container max-w-4xl mx-auto px-4 flex justify-center items-center min-h-screen">
      <p className="text-xl">{t('loading_weather_data')}</p>
    </div>
  );
}

if (error) {
  return (
    <div className="container max-w-4xl mx-auto px-4 flex justify-center items-center min-h-screen">
      <p className="text-xl text-red-500">Error loading weather data: {error}</p>
    </div>
  );
}

if (!weatherData || !weatherData.current || !weatherData.hourly) {
  return (
    <div className="container max-w-4xl mx-auto px-4 flex justify-center items-center min-h-screen">
      <p className="text-xl">{t('loading_weather_data')}</p>
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
    <h1>{t('welcome_react')}</h1>
      {/* Main Content */}
      <div className="container max-w-4xl mx-auto px-4">
        {/* First Section */}
        <div className=" bg-transparent max-w-7xl mx-auto px-4 flex justify-between">
          <div>
            <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight text-balance">
              {t('city_name')}
            </h1>
            <p className="text-gray-800 dark:text-gray-50">
              {t('chance_of_rain')} {current.precipitation_probability}%
            </p>
            <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight text-balance mt-7">
              {Math.round(current.temperature_2m)}°
            </h1>
          </div>
          <div>
            {getWeatherIcon(current.precipitation_probability, current.temperature_2m,'w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32')}
          </div>
        </div>
        {/* == First Section === */}
        <br />

        {/* Second Section Today's */}
        <div className="container mx-auto p-4 rounded-xl bg-primary">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-gray-200 dark:text-zinc-300">
            {t('todays_forecast')}
          </h3>
          <div className="p-3 mt-1 mb-1 w flex justify-center items-center flex-wrap">
            {next6Hours.map((hour, i) => (
                < >
                  <div className="flex flex-col p-4 m-1 items-center">
                    <h4 className="text-lg font-mono tracking-tight dark:text-gray-50 text-white mt-2 mb-4">
                      {hour.time}
                    </h4>
                    <span className="mt-2 mb-4 p-2">
                      {getWeatherIcon(hour.rainPord, hour.temp, "w-16 h-16")}
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
            {t('air_conditions')}
          </h3>

          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            {/* Real Feel */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-gray-50 mb-2">
                <ThermometerSun className="w-8 h-8" />
                <span className="">{t('real_feel')}</span>
              </div>
              <h4 className="scroll-m-20 text-2xl font-bold tracking-tight text-zinc-50 dark:text-zinc-300">
                {Math.round(current.apparent_temperature)}°
              </h4>
            </div>
            {/* Wind */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-gray-50 mb-2">
                <Wind className="w-8 h-8" />
                <span>{t('wind')}</span>
              </div>
              <h4 className="scroll-m-20 text-2xl font-bold tracking-tight text-zinc-50 dark:text-zinc-300">
                {Math.round(current.wind_speed_10m)} {t('kmh')}
              </h4>
            </div>
            {/* Chance of Rain */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-gray-50 mb-2">
                <Droplets className="w-8 h-8" />
                <span> {t('chance_of_rain')}</span>
              </div>
              <h4 className="scroll-m-20 text-2xl font-bold tracking-tight text-zinc-50 dark:text-zinc-300">
                {current.precipitation_probability}{t('percent')}
              </h4>
            </div>
            {/* UV Index */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-gray-50 mb-2">
                <Sun className="w-8 h-8 " />
                <span>{t('uv_index')}</span>
              </div>
              <h4 className="scroll-m-20 text-2xl font-bold tracking-tight text-zinc-50 dark:text-zinc-300">
                {Math.round(hourly.uv_index[0])}
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
