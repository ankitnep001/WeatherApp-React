import { LanguageContext } from "@context/LanguageContext";
import { useState, useEffect, useContext } from "react";
import BikramSambat from "bikram-sambat-js"
import { convertToNepaliNumbers } from 'utils/nepalinumber';

interface DailyWeather {
    list: {
        main: {
            temp: number;
        };
        weather: {
            id: number;
            main: string;
            description: string;
        }[];

    }[];
}
interface DailyProps {
    location: string,
}
const FiveDays: React.FC<DailyProps> = ({ location }) => {
    const [hourlyWeather, setHourlyWeather] = useState<DailyWeather | null>(null);
    const { dictionary } = useContext(LanguageContext)
    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch(`${import.meta.env.VITE_WEATHER_API_URL}/forecast?q=${location}&appid=${import.meta.env.VITE_API_KEY}`);
                if (!response.ok) throw new Error('Failed to fetch weather data');

                const data: DailyWeather = await response.json();
                setHourlyWeather(data);

            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };
        if (location) fetchData();
    }, [location]);


    const { language } = useContext(LanguageContext);


    return (
        <>
            <p className="text-center">{dictionary.fiveDays}</p>
            <div className='mx-10 flex flex-wrap justify-center items-center '>

                {hourlyWeather && hourlyWeather.list.slice(1, 6).map((hourlyData, index) => {

                    const currentDate = new Date();
                    currentDate.setDate(currentDate.getDate() + index + 1); // Increase date for each day
                    const nepaliEngDate = new BikramSambat(currentDate).toBS();
                    let nepaliDate;

                    if (language === 'ne') {
                        nepaliDate = convertToNepaliNumbers(nepaliEngDate);
                    } else {
                        nepaliDate = nepaliEngDate;
                    }
                    return (
                        <div
                            className=" flex flex-col justify-center items-center  m-2  w-40 h-28 rounded-lg shadow-shadow tracking-wider "
                            key={index}>
                            <p>{nepaliDate}</p>
                            <p>{(hourlyData.main.temp - 273.15).toFixed(2)}&deg;<span className="text-lg">C</span></p>
                            {hourlyData.weather.length > 0 && <p>{hourlyData.weather[0].main}</p>}
                        </div>
                    );
                })}
            </div>
        </>

    )
}
export default FiveDays
