import { AiOutlineSearch } from "react-icons/ai";
import React, { useContext, useState } from 'react';
import { LanguageContext } from "@context/LanguageContext";

interface CityProps {
    city: string,
    onCityChange: (city: string) => void;
}

const SearchBar: React.FC<CityProps> = ({ city, onCityChange }) => {
    const [searchQuery, setSearchQuery] = useState<string>(city);
    const { dictionary } = useContext(LanguageContext);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onCityChange(searchQuery);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center rounded-2xl bg-white border-2 border-black p-1">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder={dictionary.city_placeholder}
                    className="dark:text-black h-full bg-none-0 px-2  rounded-2xl focus:outline-none"
                />
                <button type="submit" className="">
                    <AiOutlineSearch size={29} color="black" />
                </button>
            </div>
        </form>
    );
};

export default SearchBar;

