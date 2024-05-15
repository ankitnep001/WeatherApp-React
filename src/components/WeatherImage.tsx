import React, { useContext } from 'react'


import { image } from '@config/constant/images'
import { LanguageContext } from '../context/LanguageContext'

interface WeatherProps {
    weather: string,
    description: string
}

const WeatherImage: React.FC<WeatherProps> = ({ weather, description }) => {

    const { dictionary } = useContext(LanguageContext);
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
    const translatedDescription = dictionary[description.toLowerCase()] || description;

    return (
        <div className='w-[10dvw] flex flex-col justify-between items-center'>
            {weatherImage && <img className='' src={weatherImage} alt={weather} />}
            <p className=' text-xs md:text-lg '>{translatedDescription}</p>
        </div>
    )
}

export default WeatherImage