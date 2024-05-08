import React from 'react'


interface TemperatureProps {
    temperature: number,
}
const WeatherDisplay: React.FC<TemperatureProps> = ({ temperature }) => {

    const celsiusTemperature = (temperature - 273.15).toFixed(2);
    return (
        <div className=''>
            <div className='m-10 w-[30dvw] h-96 bg-green-600  rounded-3xl flex  justify-center items-center hover:shadow-2xl'>
                <div className=' flex flex-row font-bold text-white '>
                    <h2 className=' text-5xl '>{celsiusTemperature}</h2>
                    <div className='px-2 text-2xl'>&deg;Celcius</div>
                </div>
            </div>
        </div>
    )
}

export default WeatherDisplay