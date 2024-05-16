// import Cities from "./Cities"
import Api from "../api/Api"
import { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import WeatherImage from "./WeatherImage";
import FiveDays from "./FiveDays";
import DateTime from "./DateTime";
import DarkButton from "./DarkButton";
import LanguageButton from "./LanguageButton";
// import SearchBar from "./SearchBar";
import LocationSelect from "./LocationSelect";

const TodayWeather: React.FC = () => {

    const [city, setCity] = useState<string>("kathmandu");
    const [temp, setTemp] = useState<number | undefined>();
    const [weather, setWeather] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [error, setError] = useState<string | null>(null)

    const handleCityChange = (city: string) => {
        setCity(city);
        setError(null);
    };
    return (
        <>
            <Api location={city} tempUpdate={setTemp} weatherUpdate={setWeather} descriptionUpdate={setDescription} onError={setError} />

            <div className="dark:bg-darksecondary dark:text-white mb-4 bg-gray-100  mx-10 flex flex-col justify-center rounded-3xl shadow-xl">

                <DateTime />
                <LocationSelect city={city} onCityChange={handleCityChange} />

                {!error && (
                    <div className="flex flex-col md:flex-row justify-around items-center">
                        {temp !== undefined ? (
                            <WeatherDisplay location={city} temperature={temp} />
                        ) : (
                            <p>Loading...</p>
                        )}
                        {/* <WeatherDisplay location={city} temperature={temp} /> */}
                        <WeatherImage weather={weather} description={description} />
                    </div>
                )}



                {!error && <FiveDays location={city} />}
            </div>
            <div className="fixed bottom-0 right-0 mb-2">
                <LanguageButton />
                <DarkButton />
            </div>
        </>

    )
}
export default TodayWeather

