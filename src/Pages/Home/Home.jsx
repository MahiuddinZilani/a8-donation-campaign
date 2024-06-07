import { json, useLoaderData } from "react-router-dom";
import DonationsViews from "../../components/DonationsViews/DonationsViews";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {
    const donationsViews = useLoaderData();
    let totalDonation = 0;
    console.log(donationsViews);
    if(donationsViews){
        totalDonation = donationsViews.reduce((preVal, curVal) => preVal + curVal.price, 0);
        localStorage.setItem('totalDonation', JSON.stringify(totalDonation));
    }

    // console.log(totalDonation);

    return (
        <div className="bg-white">
            <Banner />
            <DonationsViews donationsViews={donationsViews}></DonationsViews>
        </div>
    );
};

export default Home;