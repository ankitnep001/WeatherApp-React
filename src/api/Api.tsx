
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
    onError: (error: string) => void;
}

const Api: React.FC<ApiProps> = ({ location, tempUpdate, weatherUpdate, descriptionUpdate, onError }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [_weatherData, setWeatherData] = useState<WeatherData | null>(null); // Add state for weatherData


    useEffect(() => {
        const fetchData = async () => {
            setError(null);
            try {
                const response = await fetch(`${import.meta.env.VITE_WEATHER_API_URL}/weather?q=${location}&appid=${import.meta.env.VITE_API_KEY}`);
                if (!response.ok) throw new Error('Failed to fetch weather data');
                const data: WeatherData = await response.json();
                setWeatherData(data);
                tempUpdate(data.main.temp);
                weatherUpdate(data.weather[0].main);
                descriptionUpdate(data.weather[0].description);

            } catch (error) {
                setError('Failed to fetch weather data');
                onError('Failed to fetch weather data');

            } finally {
                setLoading(false);
            }
        };
        if (location) fetchData();
    }, [location, tempUpdate, weatherUpdate, descriptionUpdate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>Error: {error}</div>;
    }

    return null;
}

export default Api;


