import React from 'react'
import Header from '../components/Header'
import TodayWeather from '../components/TodayWeather'


const Home: React.FC = () => {
    return (
        <>
            <div className='full-height w-screen lg:h-screen'>
                <Header />
                <div className='flex flex-col justify-center items-center  '>
                    <TodayWeather />
                </div>
            </div>
        </>
    )
}

export default Home