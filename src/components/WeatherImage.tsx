import React from 'react'


import { image } from '@config/constant/images'
interface WeatherProps {
    weather: string,
    description: string
}

const WeatherImage: React.FC<WeatherProps> = ({ weather, description }) => {

    let weatherImage;
    switch (weather) {
        case 'Clear':
            weatherImage = image?.clear;
            break;
        case 'Rain':
            weatherImage = image?.rainy;
            break;
        case 'Clouds':
            weatherImage = image?.cloudy;
            break;
        case 'Windy':
            weatherImage = image?.windy;
            break;
        default:
            weatherImage = null;
            break;
    }
    return (
        <div className='w-[10dvw] flex flex-col justify-between items-center'>
            {weatherImage && <img className='' src={weatherImage} alt={weather} />}
            <p className=' text-xs md:text-lg '>{description}</p>
        </div>
    )
}

export default WeatherImage