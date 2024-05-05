import Cities from "./Cities"
import Api from "../api/Api"
import { useState } from "react";

const TodayWeather: React.FC = () => {


    const [city, setCity] = useState<string>("kathmandu")

    const handleCityChange = (city: string) => {
        setCity(city);
    };
    return (
        <div className="mb-4 w-[70dvw]  bg-[#BBD0FF]  h-[90vh] mx-10">

            <Cities city={city} onCityChange={handleCityChange} />
            <Api location={city} />
        </div>
    )
}

export default TodayWeather

// className = ' flex justify-center items-center text-5xl font-bold' >