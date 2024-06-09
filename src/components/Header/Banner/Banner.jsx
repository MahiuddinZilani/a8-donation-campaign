import { useState } from "react";
import {PropTypes} from "prop-types"

const Banner = ({onSearch}) => {
    
    const [searchingValue, setSearchingValue] = useState('');

    const handleSearchValue = (event) => {
        setSearchingValue(event.target.value);
    }

    const handleSearch = () => {
        onSearch(searchingValue);
        setSearchingValue('');
    }

    return (
        <div className="">
            <div className="relative w-full h-[30vh] md:h-[50vh] bg-custom-image bg-cover bg-center">
                <div className="absolute inset-0 bg-white opacity-90"></div>
                <div className="relative z-1">
                    <div className="h-[30vh] md:h-[50vh] flex flex-col gap-10 justify-center items-center">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center text-black">I Grow By Helping People In Need</h1>
                        <div className="flex justify-center items-center">
                            <input
                                type="email"
                                className="py-2 pl-4 border-s rounded-l-lg text-black outline-none"
                                placeholder="Search Here..."
                                required=""
                                value={searchingValue}
                                onChange={handleSearchValue}
                            />
                            <button onClick={handleSearch}
                                className="bg-[#FF444A] text-white py-2 px-2 rounded-r-lg"
                                type="button"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

Banner.propTypes = {
    onSearch: PropTypes.function,
}

export default Banner;