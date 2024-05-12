import Cities from "./Cities"
import Api from "../api/Api"
import { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import WeatherImage from "./WeatherImage";
import FiveDays from "./FiveDays";
import DateTime from "./DateTime";
import SearchBar from "./SearchBar";
import DarkButton from "./DarkButton";

const TodayWeather: React.FC = () => {

    const [city, setCity] = useState<string>("kathmandu");
    const [temp, setTemp] = useState<number | undefined>();
    const [weather, setWeather] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleCityChange = (city: string) => {
        setCity(city);
    };
    return (
        <>
            <div className="dark:bg-purple-950 dark:text-white mb-4 bg-gray-100  mx-10 flex flex-col justify-center rounded-3xl shadow-xl">
                <DateTime />
                <div className=" flex flex-col md:flex-row justify-center items-center">
                    <Cities city={city} onCityChange={handleCityChange} />
                    <SearchBar />
                </div>

                <Api location={city} tempUpdate={setTemp} weatherUpdate={setWeather} descriptionUpdate={setDescription} />

                <div className="flex flex-col md:flex-row justify-around items-center">
                    {temp !== undefined ? (
                        <WeatherDisplay location={city} temperature={temp} />
                    ) : (
                        <p>Loading...</p>
                    )}
                    {/* <WeatherDisplay location={city} temperature={temp} /> */}
                    <WeatherImage weather={weather} description={description} />
                </div>

                <FiveDays location={city} />
            </div>
            <DarkButton />
        </>

    )
}
export default TodayWeather

