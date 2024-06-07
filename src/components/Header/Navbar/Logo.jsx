import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div>
            <Link to={'./'}>
                <img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihZejD6Q2sAEqoaG7Zytcpvpq47I5qi7uH6-nXEegswRYPhWxdCmG_kLJ6I29bpRUSTivRxfekPlbKrilCgoFi49XAsLveSfWfY=s2560" alt="Logo" />
            </Link>
        </div>
    );
};

export default Logo;