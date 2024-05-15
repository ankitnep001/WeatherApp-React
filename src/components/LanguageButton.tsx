import React, { useContext } from 'react'
import { LanguageContext } from '@context/LanguageContext'
import { image } from '@config/constant/images'

const LanguageButton: React.FC = () => {
    const { language, changeLanguage } = useContext(LanguageContext);

    const handleClick = () => {
        changeLanguage(language === 'en' ? 'ne' : 'en')
    };

    return (
        <div className='mb-2'>
            <button onClick={handleClick}
                className='border-2 border-black dark:border-white dark:text-white p-2 rounded-full'>
                {/* {language === 'en' ? 'NE' : 'EN'} */}
                {language === 'en' ? <img src={image?.nepalFlag} style={{ height: '20px', width: '20px' }} /> :
                    <img src={image?.usFlag} style={{ height: '20px', width: '20px' }} />}
            </button>
        </div>
    )
}

export default LanguageButton
