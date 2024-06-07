import DonationViewCard from "./DonationViewCard";
import PropTypes from 'prop-types';

const DonationsViews = ({donationsViews}) => {
    // console.log(donationsViews);
    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-16">
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