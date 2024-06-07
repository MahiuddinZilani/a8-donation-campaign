
import Logo from "./Logo";
import Menu from "./Menu";
const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center">
                <Logo></Logo>
                <Menu></Menu>
            </nav>
        </div>
    );
};

export default Navbar;