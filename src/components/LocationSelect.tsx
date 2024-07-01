import { LanguageContext } from '@context/LanguageContext';
import React, { useContext, useState } from 'react';
import Cities from './Cities';
import SearchBar from './SearchBar';

interface CityProps {
    city: string,
    onCityChange: (city: string) => void;
}

const LocationSelect: React.FC<CityProps> = ({ city, onCityChange }) => {
    const [locationType, setLocationType] = useState<string>('International');
    const { dictionary } = useContext(LanguageContext);

    const handleLocationTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLocationType(event.target.value);
        onCityChange('');
    };

    const handleCityChange = (city: string) => {
        onCityChange(city);
    };
    return (
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='m-3'>
                <select value={locationType} onChange={handleLocationTypeChange} className='focus:outline-none dark:text-black rounded-2xl bg-gray-100 border-2 border-black p-2'>
                    <option value="Nepal">{dictionary.nepal}</option>
                    <option value="International">{dictionary.international}</option>
                </select>
            </div>
            {locationType === 'Nepal' ?
                (<Cities city={city} onCityChange={handleCityChange} />) :
                (<SearchBar city={city} onCityChange={handleCityChange} />)}

        </div>
    )
}

export default LocationSelect