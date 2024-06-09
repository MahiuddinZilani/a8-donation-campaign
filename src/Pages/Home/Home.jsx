import { useLoaderData } from "react-router-dom";
import DonationsViews from "../../components/DonationsViews/DonationsViews";
import Banner from "../../components/Header/Banner/Banner";
import { useEffect, useState } from "react";

const Home = () => {
    const donationsViews = useLoaderData();
    useEffect(() => {
        if (donationsViews) {
            setDonation(donationsViews);
        }
    }, [donationsViews]);

    const [donations, setDonation] = useState([]);

    const showFilteredData = (value) => {
        const filtered = donations.filter(item => item.category.toLowerCase().includes(value.toLowerCase()));
        if (filtered.length !== 0) {
            setDonation(filtered);
        }
        else if (value === null) {
            alert('not found');
            setDonation(donationsViews);
        }
        else {
            alert('not found');
            setDonation(donationsViews);
        }
    }

    const handleSearchedItem = (value) => {
        showFilteredData(value);
    }

    return (
        <div className="bg-white">
            <Banner onSearch={handleSearchedItem}></Banner>
            <DonationsViews donationsViews={donations}></DonationsViews>
        </div>
    );
};

export default Home;