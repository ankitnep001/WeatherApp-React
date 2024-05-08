import { useState, useEffect } from "react";

interface HourlyWeather {
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

interface HourProps {
    location: string,
}

const Hourly: React.FC<HourProps> = ({ location }) => {
    const [hourlyWeather, setHourlyWeather] = useState<HourlyWeather | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_WEATHER_API_URL}/forecast?q=${location}&appid=${import.meta.env.VITE_API_KEY}`);
                const data: HourlyWeather = await response.json();
                setHourlyWeather(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };
        fetchData();
    }, [location]);
    console.log(hourlyWeather);

    const [date, setDate] = useState<number>(Date.now());

    useEffect(() => {
        const time = setInterval(() => {
            setDate(Date.now());
        }, 1000)
        return () => {
            clearInterval(time);
        };
    })

    return (

        <div className='mx-10 flex flex-wrap justify-center items-center '>
            {hourlyWeather && hourlyWeather.list.slice(1, 6).map((hourlyData, index) => {
                const currentDate = new Date(date);
                currentDate.setDate(currentDate.getDate() + index + 1); //date increase
                return (
                    <div
                        className="flex flex-col justify-center items-center  m-2  w-40 h-28 rounded-lg shadow-shadow "
                        key={index}>
                        <p>{currentDate.toLocaleDateString()}</p>
                        <p>{(hourlyData.main.temp - 273.15).toFixed(2)}&deg;Celcius</p>
                        {hourlyData.weather.length > 0 && <p>{hourlyData.weather[0].main}</p>}
                    </div>
                );
            })}

        </div>
    )
}
export default Hourly

