import { Link } from "react-router-dom";

const DonationDetailsCard = ({ donationDetails }) => {

    const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donationDetails || {};

    const handleDonatedPrice = () => {
        const donatedItemsArray = [];
        const donatedItems = JSON.parse(localStorage.getItem('donatedItems'));

        if (donatedItems) {
            const isExist = donatedItems.find(item => item.id === id)

            if (!isExist) {
                donatedItemsArray.push(...donatedItems, donationDetails);
                localStorage.setItem('donatedItems', JSON.stringify(donatedItemsArray));
                alert('Donation Added');
            }
            else{
                alert('Already Exist')
            }
        }
        else {
            donatedItemsArray.push(donationDetails);
            localStorage.setItem('donatedItems', JSON.stringify(donatedItemsArray));
            alert('Donation Added');
        }
    }


    return (
        <div className="w-full bg-white mt-4">

            <div className="relative flex flex-col items-center justify-center ">
                <img src={picture} alt={category} className="relative w-full h-[65vh] bg-white" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-black opacity-50"></div>
                <Link>
                    <div className="absolute inset-x-0 bottom-0 h-24 z-10 flex items-center ml-10">
                        {/* <div className="flex absolute rounded-lg px-6 py-3 w-max text-2xl" style={{ backgroundColor: `${text_button_bg}` }}>
                            <h4 className="text-white">Donate ${price}</h4>
                        </div> */}
                        <button onClick={handleDonatedPrice} className="text-white rounded-lg px-6 py-3" style={{ backgroundColor: `${text_button_bg}` }}>Donate ${price}</button>
                    </div>
                </Link>
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

export default DonationDetailsCard;