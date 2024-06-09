
import Logo from "./Logo";
import Menu from "./Menu";
const Navbar = () => {
    return (
        <div>
            <nav className="my-4 md:my-2 flex flex-col gap-6 md:gap-10 md:flex-row justify-between items-center">
                <Logo></Logo>
                <Menu></Menu>
            </nav>
        </div>
    );
};

export default Navbar;