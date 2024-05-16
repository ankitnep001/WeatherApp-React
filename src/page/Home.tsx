import React from 'react'
import Header from '../components/Header'
import TodayWeather from '../components/TodayWeather'


const Home: React.FC = () => {
    return (
        <>
            <div className='h-screen '>
                <Header />
                <div className='flex flex-col justify-center items-center  '>
                    <TodayWeather />
                </div>
            </div>
        </>
    )
}

export default Home