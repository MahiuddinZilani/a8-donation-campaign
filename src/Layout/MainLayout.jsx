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