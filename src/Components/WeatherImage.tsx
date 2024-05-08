import React from 'react'
import clear from '../assets/clear.png'
import clouds from '../assets/Clouds.webp'
import rainy from '../assets/rainy.png'
// import windy from '../assets/windy.png'

interface WeatherProps {
    weather: string,
    description: string
}

const WeatherImage: React.FC<WeatherProps> = ({ weather, description }) => {

    let weatherImage;
    switch (weather) {
        case 'Clear':
            weatherImage = clear;
            break;
        case 'Rain':
            weatherImage = rainy;
            break;
        case 'Clouds':
            weatherImage = clouds;
            break;
        default:
            weatherImage = null;
            break;
    }
    return (
        <div className='w-[10dvw] flex flex-col justify-between items-center'>
            {weatherImage && <img src={weatherImage} alt={weather} />}
            {description}
        </div>
    )
}

export default WeatherImage