import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DonationViewCard = ({ donationView }) => {

    const {id, picture, title, category, category_bg, card_bg, text_button_bg } = donationView || {};

    return (
        <div className="w-72 lg:w-64 md:mx-auto">
            <Link to={`/donation-details/${id}`}>
                <div className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-clip-border shadow-md">
                    <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                        <img src={picture} alt="Donation Picture" />
                    </div>
                    <div className="px-4 py-2 flex flex-col gap-4" style={{ backgroundColor: `${card_bg}`, }} >
                        <div className="flex-none shrink-0 rounded-lg px-2 py-1 w-max" style={{ backgroundColor: `${category_bg}` }}>
                            <h4 className="" style={{ color: `${text_button_bg}` }}>{category}</h4>
                        </div>
                        <div className="grow h-16" style={{ color: `${text_button_bg}` }}>
                            <h1 className="font-semibold text-base">{title}</h1>
                        </div>
                    </div>

                </div>
            </Link>
        </div>
    );
};

DonationViewCard.propTypes = {
    donationView: PropTypes.object,
}

export default DonationViewCard;