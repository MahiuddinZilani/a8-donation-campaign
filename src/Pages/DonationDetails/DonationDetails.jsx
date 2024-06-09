import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsCard from "./DonationDetailsCard";

const DonationDetails = () => {
    const donationItems = useLoaderData();
    const { id } = useParams();
    const [donationDetails, setDonationDetails] = useState({});

    useEffect(() => {
        const findDonationItem = donationItems?.find(donationItem => donationItem.id === id)
        setDonationDetails(findDonationItem);
    }, [id, donationItems]); 

    return (

        <div className="bg-white">
            <DonationDetailsCard donationDetails={donationDetails}></DonationDetailsCard>
        </div>
    );
};

export default DonationDetails;