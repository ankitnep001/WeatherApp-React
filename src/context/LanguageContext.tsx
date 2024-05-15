import { createContext, useState, useEffect } from "react";
import en from '@data/en.json'
import ne from '@data/ne.json'

interface LanguageContextType {
    language: string;
    dictionary: { [key: string]: string };
    changeLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    dictionary: en,
    changeLanguage: () => { }
});


interface Props {
    children: React.ReactNode,
}

export const LanguageProvider: React.FC<Props> = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem("weather_lang") || 'en');

    const changeLanguage = (lang: string) => {
        if (lang === 'en' || lang === 'ne') {
            setLanguage(lang);
        } else {
            console.error(`Unsupported language: ${lang}`);
        }
    }
    const dictionary = language === 'en' ? en : ne;

    //update when language change
    useEffect(() => {
        localStorage.setItem("weather_lang", language);
    }, [language]);
    return (
        <LanguageContext.Provider value={{ language, dictionary, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};