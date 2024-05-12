import React from 'react'
import Header from '../components/Header'
import TodayWeather from '../components/TodayWeather'
// import Footer from '../components/Footer'

const Home: React.FC = () => {
    return (
        <>
            <Header />

            <div className='flex flex-col justify-center items-center'>
                <TodayWeather />
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default Home