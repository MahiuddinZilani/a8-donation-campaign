import { Link } from "react-router-dom";

const DonationViewCard = ({ donationView }) => {

    const {id, picture, title, category, category_bg, card_bg, text_button_bg } = donationView || {};

    // console.log(card_bg);

    return (
        <div>
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

export default DonationViewCard;






{/* <div className="flex items-center justify-between p-6">
                    <div className="flex items-center -space-x-3">
                        <img alt="natali craig"
                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                            className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10" />
                        <img alt="Tania Andrew"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                            className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10" />
                    </div>
                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                        January 10
                    </p>
                </div> */}