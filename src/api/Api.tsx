import { useEffect, useState } from "react";

interface WeatherData {
    base: string,
    name: string,
    main: {
        temp: number,
    },
    weather: {
        main: string,
        description: string,
    }[],
}
interface ApiProps {
    location: string,
    tempUpdate: (temp: number) => void;
    weatherUpdate: (weather: string) => void,
    descriptionUpdate: (description: string) => void,
}
const Api: React.FC<ApiProps> = ({ location, tempUpdate, weatherUpdate, descriptionUpdate }) => {

    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    // const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_WEATHER_API_URL}/weather?q=${location}&appid=${import.meta.env.VITE_API_KEY}`);
                const data: WeatherData = await response.json();
                setWeatherData(data);
                tempUpdate(data.main.temp);
                weatherUpdate(data.weather[0].main);
                descriptionUpdate(data.weather[0].description);

            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };
        fetchData();
    }, [location, tempUpdate, weatherUpdate]);
    console.log(weatherData);



    return null;
}

export default Api

// (
//     <div>
//         {loading ? (
//             <p>Loading...</p>
//         ) : (
//             <div className="text-2xl p-4 px-2">
//                 {
//                     weatherData && (
//                         <div >
//                             {weatherData.name}
//                             {weatherData.main.temp}
//                             {weatherData.weather[0].main}
//                         </div>
//                     )
//                 }
//             </div>
//         )}
//     </div>
// );
