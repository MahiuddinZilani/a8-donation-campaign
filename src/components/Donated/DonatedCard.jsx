import { Link } from "react-router-dom";

const DonatedCard = ({ donatedItem }) => {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, price } = donatedItem || {};

    // console.log(donatedItem);

    return (
        <div>
            <div className="flex rounded-xl bg-white text-gray-700 shadow-md w-full h-[180px] flex-row">
                <div className="w-1/3 m-0 overflow-hidden bg-white rounded-l-xl shrink-0">
                    <img src={picture} alt="card-image" className="object-cover w-full h-full" />
                </div>
                <div className="pl-6 py-2 w-full rounded-r-xl flex flex-col justify-between" style={{ backgroundColor: `${card_bg}`, }}>
                    <div className="rounded-lg px-2 py-1 w-max" style={{ backgroundColor: `${category_bg}` }}>
                        <h4 className="" style={{ color: `${text_button_bg}` }}>{category}</h4>
                    </div>
                    <h4 className="block my-1 font-sans text-lg antialiased font-bold leading-snug tracking-normal text-black" >
                        {title}
                    </h4>
                    <p className="block font-sans text-base antialiased font-semibold leading-relaxed text-gray-700" style={{ color: `${text_button_bg}` }}>
                        ${price}
                    </p>
                    <Link to={`/donation-details/${id}`} className="relative">
                        <button className="text-white rounded-lg px-3 py-1" style={{ backgroundColor: `${text_button_bg}` }}>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonatedCard;