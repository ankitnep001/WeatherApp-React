import React from 'react'
import { MdDateRange } from "react-icons/md";
import BikramSambat from "bikram-sambat-js"

const DateTime: React.FC = () => {
    const currentDate = new Date();
    const nepaliDate = new BikramSambat(currentDate).toBS();

    return (
        <div className='flex justify-center md:justify-end py-2 mx-10'>
            <MdDateRange size={25} />{nepaliDate}
        </div>
    )
}

export default DateTime