import React from 'react'
import clear from '../assets/clear.png'
// import clouds from '../assets/Clouds.webp'
// import rainy from '../assets/rainy.png'
// import windy from '../assets/windy.png'

interface WeatherProps {
    weather: string,
}

const WeatherImage: React.FC<WeatherProps> = ({ weather }) => {
    return (
        <div className='w-[10dvw] flex justify-center items-center'>
            <div>{weather}</div>
            <p></p>
        </div>
    )
}

export default WeatherImage