import React from 'react'

interface CityProps {
    city: string,
    onCityChange: (city: string) => void;
}

const Cities: React.FC<CityProps> = ({ city, onCityChange }) => {

    const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const city = event.target.value;
        onCityChange(city);
    };

    return (
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='m-3'>
                <select value={city}
                    onChange={handleCityChange}
                    className='focus:outline-none dark:text-black rounded-2xl bg-gray-100 border-2 border-black p-2 '>
                    <option value="kathmandu">Kathmandu</option>
                    <option value="biratnagar">Biratnagar</option>
                    <option value="pokhara">Pokhara</option>
                    <option value="janakpur">Janakpur</option>
                </select>
            </div>

        </div>
    )
}

export default Cities
