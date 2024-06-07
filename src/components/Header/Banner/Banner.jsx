
const Banner = () => {
    return (
        <div className="">
            <div className="relative w-full h-full bg-custom-image bg-cover bg-center">
                <div className="absolute inset-0 bg-white opacity-90"></div>
                <div className="relative z-1">
                    <div className="h-[60vh] flex flex-col gap-10 justify-center items-center">
                        <h1 className="font-bold text-4xl text-center text-black">I Grow By Helping People In Need</h1>
                        <div className="flex justify-center items-center">
                            <input
                                type="email"
                                className="py-2 pl-4 border-s rounded-l-lg text-black outline-none"
                                placeholder="Search Here..."
                                required=""
                            />
                            <button
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

export default Banner;