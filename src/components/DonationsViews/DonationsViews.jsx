import DonationViewCard from "./DonationViewCard";
import PropTypes from 'prop-types';

const DonationsViews = ({donationsViews}) => {
    // console.log(Array.isArray(donationsViews));
    return (
        <div className="">
            <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-8 md:16">
                {
                    donationsViews?.map(donationView => <DonationViewCard key={donationView.id} donationView={donationView}></DonationViewCard>)
                }
            </div>
        </div>
    );
};

DonationsViews.propTypes = {
    donationsViews: PropTypes.array,
}

export default DonationsViews;