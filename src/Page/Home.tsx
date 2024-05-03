import React from 'react'
import Header from '../Components/Header'
import HeroLeft from '../Components/HeroLeft'
import HeroRight from '../Components/HeroRight'
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