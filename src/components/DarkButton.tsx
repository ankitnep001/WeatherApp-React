import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkButton = () => {
    const [dark, setDark] = useState<boolean>(false)

    useEffect(() => {
        const storedDarkMode = localStorage.getItem('isDarkMode');
        if (storedDarkMode !== null) {
            setDark(JSON.parse(storedDarkMode));
            if (JSON.parse(storedDarkMode)) {
                document.body.classList.add("dark");
            }
        }
    }, []);

    const darkModeHandler = () => {
        const newDarkMode = !dark;
        setDark(newDarkMode);
        document.body.classList.toggle("dark");
        localStorage.setItem('isDarkMode', JSON.stringify(newDarkMode));
    }

    return (
        <div className="fixed bottom-0 right-0 m-4">
            <button
                onClick={darkModeHandler}
                className=" border-2 border-black dark:border-white dark:text-white p-3 rounded-full">
                {dark ? <FaSun /> : <FaMoon />}
            </button>
        </div>
    )
}

export default DarkButton