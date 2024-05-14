import React, { useContext } from 'react'
import { MdDateRange } from "react-icons/md";
import BikramSambat from "bikram-sambat-js"
import { LanguageContext } from '@context/LanguageContext';
import { convertToNepaliNumbers } from 'utils/nepalinumber';


const DateTime: React.FC = () => {
    const { language } = useContext(LanguageContext);
    const currentDate = new Date();
    const nepaliEngDate = new BikramSambat(currentDate).toBS();
    let nepaliDate;

    if (language === 'ne') {
        nepaliDate = convertToNepaliNumbers(nepaliEngDate);
    } else {
        nepaliDate = nepaliEngDate;
    }
    return (
        <div className='flex justify-center md:justify-end py-2 mx-10'>
            <MdDateRange size={25} />{nepaliDate}
        </div>
    )
}
export default DateTime