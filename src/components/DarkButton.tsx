import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkButton = () => {
    const [dark, setDark] = useState<boolean>(false)

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    return (
        <div className="fixed bottom-0 right-0 m-4">
            <button
                onClick={darkModeHandler}
                className="border-2 border-black p-3 rounded-full">
                {dark ? <FaSun /> : <FaMoon />}
            </button>
        </div>
    )
}

export default DarkButton