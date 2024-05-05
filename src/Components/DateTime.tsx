import React, { useEffect, useState } from 'react'

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
        <div >
            Date: {new Date(date).toLocaleDateString()}
        </div>
    )
}

export default DateTime