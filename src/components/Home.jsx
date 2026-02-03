import {
  CloudRain,
  Sun,
  Wind,
  CloudSnow,
  ThermometerSun,
  Droplets,
} from "lucide-react";

const Home = () => {
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
              Chance of rain: 0%
            </p>
            <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight text-balance mt-7">
              31°
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
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <>
                  <div className="flex flex-col p-4 m-1 items-center">
                    <h4 className="text-lg font-mono tracking-tight dark:text-gray-50 text-white mt-2 mb-4">
                      6:00 AM
                    </h4>
                    <span className="mt-2 mb-4 p-2">
                      <CloudRain className="w-16 h-16 text-gray-50" />
                    </span>
                    <h4 className="text-lg font-mono tracking-tight dark:text-gray-50 text-white">
                      25°
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
