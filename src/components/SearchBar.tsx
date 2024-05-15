// import { AiOutlineSearch } from "react-icons/ai";
// interface CityProps {
//     city: string,
//     onCityChange: (city: string) => void;
// }
// const SearchBar: React.FC<CityProps> = ({ city, onCityChange }) => {

//     const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         const city = event.target.value;
//         onCityChange(city);
//     };

//     return (
//         <>
//             <form onChange={handleCityChange}>
//                 <div className="flex justify-center items-center rounded-xl bg-white border-2 border-black p-2">
//                     <input type="text"
//                         value={city}
//                         placeholder="City Name"
//                         className="dark:text-black h-full bg-none-0 px-2 focus:outline-none"
//                     />
//                     <button >
//                         <AiOutlineSearch size={29} />
//                     </button>
//                 </div>
//             </form>
//         </>
//     )
// }

// export default SearchBar

import { AiOutlineSearch } from "react-icons/ai";
import React, { useState } from 'react';

interface CityProps {
    city: string,
    onCityChange: (city: string) => void;
}

const SearchBar: React.FC<CityProps> = ({ city, onCityChange }) => {
    const [searchQuery, setSearchQuery] = useState<string>(city);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onCityChange(searchQuery);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center rounded-xl bg-white border-2 border-black p-2">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder="City Name"
                    className="dark:text-black h-full bg-none-0 px-2 focus:outline-none"
                />
                <button type="submit" className="z-1">
                    <AiOutlineSearch size={29} />
                </button>
            </div>
        </form>
    );
};

export default SearchBar;

