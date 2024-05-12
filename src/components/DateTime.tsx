import React, { useEffect, useState } from 'react'
import { MdDateRange } from "react-icons/md";
const DateTime: React.FC = () => {
    const [date, setDate] = useState<number>(Date.now());

    useEffect(() => {
        const time = setInterval(() => {
            setDate(Date.now());
        }, 1000)
        return () => {
            clearInterval(time);
        };
    })
    return (
        <div className='flex justify-center md:justify-end py-2 mx-10'>
            <MdDateRange size={25} />{new Date(date).toLocaleDateString()}
        </div>
    )
}

export default DateTime