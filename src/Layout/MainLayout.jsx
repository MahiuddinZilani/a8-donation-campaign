import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-[1100px] mx-auto">
            <Navbar></Navbar>
            <div className="relative w-full h-full bg-custom-image bg-cover bg-center" >
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;

{/* <div className={`h-screen flex flex-col ${banner ? 'relative' : ''}`}>
    {banner && (
        <div className="absolute inset-0 bg-custom-image bg-cover bg-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
    )}
    <nav className="bg-gray-800 text-white p-4 relative z-10">
        <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
    <div className={`flex-grow p-4 relative z-10 ${banner ? 'text-white' : 'text-black'}`}>
        {children}
    </div>
</div> */}