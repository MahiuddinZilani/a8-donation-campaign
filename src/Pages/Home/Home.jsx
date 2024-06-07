import { useLoaderData } from "react-router-dom";
import DonationsViews from "../../components/DonationsViews/DonationsViews";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {
    const donationsViews = useLoaderData();

    return (
        <div className="bg-white">
            <Banner />
            <DonationsViews donationsViews={donationsViews}></DonationsViews>
        </div>
    );
};

export default Home;