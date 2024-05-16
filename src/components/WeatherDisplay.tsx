import React, { useContext } from 'react'
import { LanguageContext } from '@context/LanguageContext'
import { convertToNepaliNumbers } from 'utils/nepalinumber';
interface TemperatureProps {
    temperature: number,
    location: string
}
const WeatherDisplay: React.FC<TemperatureProps> = ({ temperature, location }) => {
    const { dictionary, language } = useContext(LanguageContext);

    const celsiusTemperature = (temperature - 273.15).toFixed(2);
    let displaytemp;
    if (language === 'ne') {
        displaytemp = convertToNepaliNumbers(celsiusTemperature)
    } else {
        displaytemp = celsiusTemperature;
    }
    return (
        <>
            <div className='dark:bg-darkprimary dark:text-white m-10 w-52 md:w-96 h-40  bg-green-600  rounded-3xl flex justify-center items-center hover:shadow'>
                <div className=' flex flex-col items-center font-bold text-white '>
                    <p className='text-2xl md:text-4xl font-light tracking-wider'>{displaytemp}&deg;{dictionary.celcius}</p>
                    <p className='text-lg md:text-xl font-light'>{location}</p>
                </div>
            </div>

        </>

    )
}

export default WeatherDisplay