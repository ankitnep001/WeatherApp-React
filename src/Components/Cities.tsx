import React from 'react'
import DateTime from './DateTime'
import SearchBar from './SearchBar';

interface CityProps {
    city: string,
    onCityChange: (city: string) => void;

}

const Cities: React.FC<CityProps> = ({ city, onCityChange }) => {

    const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const city = event.target.value;
        onCityChange(city); //pass to todayweather.tsx
    };


    return (
        <div className='p-2 m-5  flex flex-col justify-between'>
            <select value={city}
                onChange={handleCityChange}
                className=' focus:outline-none rounded-2xl bg-gray-100 border-2 border-black '>
                <option value="kathmandu">Kathmandu</option>
                <option value="biratnagar">Biratnagar</option>
                <option value="pokhara">Pokhara</option>
                <option value="janakpur">Janakpur</option>
            </select>

            <SearchBar />
            <DateTime />

        </div>
    )
}

export default Cities
