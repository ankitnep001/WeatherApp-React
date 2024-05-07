import Cities from "./Cities"
import Api from "../api/Api"
import { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import WeatherImage from "./WeatherImage";

const TodayWeather: React.FC = () => {


    const [city, setCity] = useState<string>("kathmandu");
    const [temp, setTemp] = useState<number>(20);
    const [weather, setWeather] = useState<string>("")

    const handleCityChange = (city: string) => {
        setCity(city);
    };
    return (
        <div className="mb-4 w-[70dvw]  bg-[#BBD0FF]  h-[90vh] mx-10">

            <Cities city={city} onCityChange={handleCityChange} />

            <Api location={city} tempUpdate={setTemp} weatherUpdate={setWeather} />

            <div className="flex flex-row justify-around items-center">
                <WeatherDisplay temperature={temp} />
                <WeatherImage weather={weather} />
            </div>

        </div>
    )
}

export default TodayWeather

