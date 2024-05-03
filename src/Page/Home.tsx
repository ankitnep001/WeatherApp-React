import React from 'react'
import Header from '../components/Header'
import HeroLeft from '../components/HeroLeft'
import HeroRight from '../components/HeroRight'
const Home: React.FC = () => {
    return (
        <>

            <Header />
            <div className='flex flex-row '>
                <HeroLeft />
                <HeroRight />
            </div>

        </>
    )
}

export default Home