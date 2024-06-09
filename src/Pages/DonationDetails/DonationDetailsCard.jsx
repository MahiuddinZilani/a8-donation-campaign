// import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import swal from 'sweetalert';

const DonationDetailsCard = ({ donationDetails }) => {

    const { id, picture, title, category, text_button_bg, description, price } = donationDetails || {};

    const handleDonatedPrice = () => {
        const donatedItemsArray = [];
        const donatedItems = JSON.parse(localStorage.getItem('donatedItems'));

        if (donatedItems) {
            const isExist = donatedItems.find(item => item.id === id)

            if (!isExist) {
                donatedItemsArray.push(...donatedItems, donationDetails);
                localStorage.setItem('donatedItems', JSON.stringify(donatedItemsArray));
                // alert('Donation Added');
                swal("Congratulations!", "Thanks for Your Donation!", "success");
            }
            else {
                // alert('Already Exist')
                swal("Hey!", "You have already donated here!", "info");
            }
        }
        else {
            donatedItemsArray.push(donationDetails);
            localStorage.setItem('donatedItems', JSON.stringify(donatedItemsArray));
            // alert('Donation Added');
            swal("Congratulations!", "Thanks for Your Donation!", "success");
        }
    }


    return (
        <div className="w-full bg-white mt-4">
            <div className="relative mx-4 md:mx-auto h-[50vh] md:h-[75vh] flex flex-col items-center justify-center ">
                <img src={picture} alt={category} className="relative w-full h-full bg-white" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-black opacity-50 "></div>
                <div className="absolute inset-x-0 bottom-0 h-24 z-10 flex items-center ml-10">
                    <button onClick={handleDonatedPrice} className="text-white rounded-lg px-6 py-3" style={{ backgroundColor: `${text_button_bg}` }}>Donate ${price}</button>
                </div>
            </div>
            <div className="mt-8 px-4">
                <div className="text-3xl font-bold">
                    {title}
                </div>
                <div className="text-lg">
                    {description}
                </div>
            </div>


        </div>
    );
};

DonationDetailsCard.propTypes = {
    donationDetails: PropTypes.object,
}

export default DonationDetailsCard;

