import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul className="flex justify-evenly gap-8 font-bold">
                <li>
                    <NavLink to="./" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="./donation" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>Donation</NavLink>
                </li>
                <li>
                    <NavLink to="./statistics" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>Statistics</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Menu;