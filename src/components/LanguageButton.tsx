import React, { useContext } from 'react'
import { LanguageContext } from '@context/LanguageContext'
import { image } from '@config/constant/images'

const LanguageButton: React.FC = () => {
    const { language, changeLanguage } = useContext(LanguageContext);

    const handleClick = () => {
        changeLanguage(language === 'en' ? 'ne' : 'en')
    };

    return (
        <div className='flex justify-center items-center'>
            <button onClick={handleClick}>
                {/* {language === 'en' ? 'NE' : 'EN'} */}
                {language === 'en' ? <img src={image?.nepalFlag} style={{ height: '20px', width: '20px' }} /> :
                    <img src={image?.usFlag} style={{ height: '20px', width: '20px' }} />}
            </button>
        </div>
    )
}

export default LanguageButton
