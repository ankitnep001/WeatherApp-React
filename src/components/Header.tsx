import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

const Header: React.FC = () => {
    const { dictionary } = useContext(LanguageContext)
    return (
        <>
            <div className='  dark:text-white k text-4xl font-bold text-center  py-5 '>
                {dictionary.header}
                {/* Weather Nepal */}
            </div>

        </>

    )
}

export default Header