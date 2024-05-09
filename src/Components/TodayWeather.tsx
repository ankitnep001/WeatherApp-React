import Cities from "./Cities"
import Api from "../api/Api"
import { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import WeatherImage from "./WeatherImage";
import FiveDays from "./FiveDays";

const TodayWeather: React.FC = () => {

    const [city, setCity] = useState<string>("kathmandu");
    const [temp, setTemp] = useState<number>(20);
    const [weather, setWeather] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleCityChange = (city: string) => {
        setCity(city);
    };

    return (
        <div className="mb-4 w-[70dvw]  bg-gray-100  mx-10 flex flex-col justify-center rounded-3xl shadow-xl">

            <Cities city={city} onCityChange={handleCityChange} />

            <Api location={city} tempUpdate={setTemp} weatherUpdate={setWeather} descriptionUpdate={setDescription} />

            <div className="flex flex-row justify-around items-center">
                <WeatherDisplay location={city} temperature={temp} />
                <WeatherImage weather={weather} description={description} />
            </div>

            <FiveDays location={city} />
        </div>
    )
}

export default TodayWeather

