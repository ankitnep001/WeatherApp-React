import { useEffect, useState } from "react";
interface Coordi {

    location: string,
}

interface WeatherData {
    base: string,
    name: string,

}
const Api = ({ location }: Coordi) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);



    console.log(weatherData);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_WEATHER_API_URL}/weather?q=${location}&appid=${import.meta.env.VITE_API_KEY}`);
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [location]);


    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="text-2xl p-4 px-2">
                    {
                        weatherData && (
                            <div >
                                {weatherData.base}
                                {weatherData.name}
                            </div>
                        )
                    }
                </div>
            )}
        </div>
    );
}

export default Api
