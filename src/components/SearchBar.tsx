import { AiOutlineSearch } from "react-icons/ai";

const SearchBar: React.FC = ({ }) => {

    return (
        <>
            <form className="">
                <div className="flex justify-center items-center rounded-xl bg-white border-2 border-black p-2">
                    <input type="text"
                        placeholder="City Name"
                        className="dark:text-black h-full bg-none-0 px-2 focus:outline-none"
                    />
                    <button className="">
                        <AiOutlineSearch size={29} />
                    </button>
                </div>

            </form>
        </>




    )
}

export default SearchBar

// value = { newCity }
// onChange = { handleCityChange }
