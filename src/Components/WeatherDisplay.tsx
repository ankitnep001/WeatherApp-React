import React from 'react'


interface TemperatureProps {
    temperature: number,
    location: string
}
const WeatherDisplay: React.FC<TemperatureProps> = ({ temperature, location }) => {

    const celsiusTemperature = (temperature - 273.15).toFixed(2);
    return (
        <div className=''>
            <div className='m-10 w-[9rem] md:w-[30dvw] h-[9rem] md:h-[15rem] bg-green-600  rounded-3xl flex justify-center items-center hover:shadow-2xl'>
                <div className=' flex flex-col items-center font-bold text-white '>
                    <p className='text-4xl font-light'>{celsiusTemperature}&deg;Celcius</p>
                    <p className='text-xl font-light'>{location}</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherDisplay