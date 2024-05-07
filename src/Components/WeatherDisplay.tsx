import React from 'react'


interface WeatherDsiplayProp {
    temperature: number,
    weather: string,
}

const WeatherDisplay: React.FC<WeatherDsiplayProp> = ({ temperature }) => {

    const celsiusTemperature = (temperature - 273.15).toFixed(2);
    return (
        <div>
            <div className='m-10 w-[30dvw] h-96 border-2 border-black bg-green-400 rounded-3xl flex  justify-center items-center'>
                {/* temp number */}
                <div className=' flex flex-row font-bold text-white '>
                    <h2 className='text-5xl'>{celsiusTemperature}</h2>
                    <div className='px-2 text-2xl'>&deg;Celcius</div>

                </div>
            </div>
        </div>
    )
}

export default WeatherDisplay