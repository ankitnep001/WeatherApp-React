import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

import NepalFlag from '../assets/Flag_of_Nepal.svg'
import EnglishFlag from '../assets/englishlang.svg'



const LanguageButton: React.FC = () => {
    const { language, changeLanguage } = useContext(LanguageContext);

    const handleClick = () => {
        if (language === 'en') {
            changeLanguage('ne');
        } else {
            changeLanguage('en');
        }
        console.log("clicked");
    };

    return (

        <div className='flex justify-center items-center'>
            <button onClick={handleClick}>
                {/* {language === 'en' ? 'NE' : 'EN'} */}
                {language === 'en' ? <img src={NepalFlag} style={{ height: '20px', width: '20px' }} /> :
                    <img src={EnglishFlag} style={{ height: '20px', width: '20px' }} />}
            </button>

        </div>
    )
}

export default LanguageButton

{/* <img src={NepalFlag} style={{ height: '20px', width: '20px' }} /> :
<img src={EnglishFlag} style={{ height: '20px', width: '20px' }} /> */}