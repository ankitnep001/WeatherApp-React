import { createContext, useState } from "react";
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
    const [language, setLanguage] = useState('en');

    const changeLanguage = (lang: string) => {
        if (lang === 'en' || lang === 'ne') {
            setLanguage(lang);
        } else {
            console.error(`Unsupported language: ${lang}`);
        }
    }

    const dictionary = language === 'en' ? en : ne;
    return (
        <LanguageContext.Provider value={{ language, dictionary, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};