import React, { useState } from 'react'
import district from '../data/District.json'

interface CityProps {
    city: string,
    onCityChange: (city: string) => void;
}

const Cities: React.FC<CityProps> = ({ city, onCityChange }) => {
    const [selectProvince, setSelectProvince] = useState<string>("Bagmati Province");

    const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const province = event.target.value;
        setSelectProvince(province);
    };

    const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const city = event.target.value;
        onCityChange(city);
    };

    return (
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='m-3'>
                {/* for province */}
                <select value={selectProvince}
                    onChange={handleProvinceChange}
                    className='focus:outline-none dark:text-black rounded-2xl bg-gray-100 border-2 border-black p-2 '>
                    <option value="" disabled>Select Province</option>
                    {district.provinces.map((province: { name: string }, index: number) => (
                        <option key={index} value={province.name}>{province.name}</option>
                    ))}
                </select>
            </div>
            <div className='m-3'>
                {/* for Discrict */}
                <select value={city} onChange={handleCityChange} className='focus:outline-none dark:text-black rounded-2xl bg-gray-100 border-2 border-black p-2'>
                    <option value='' disabled>Select District</option>
                    {district.provinces.find((province: { name: string }) => province.name === selectProvince)?.districts.map((district: string, index: number) => (
                        <option key={index} value={district}>{district}</option>
                    ))}
                </select>
            </div>

        </div>
    )
}

export default Cities
