import { useEffect } from "react";
import { useState } from "react";
import DonatedCard from "../../components/Donated/DonatedCard";

const Donation = () => {

    const [donatedItems, setDonatedItems] = useState([]);
    const [notFound, setNotFound] = useState('');
    const [isSeeAll, setIsSeeAll] = useState(false);

    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem('donatedItems'));
        if (donatedItems) {
            setDonatedItems(donatedItems);
        }
        else {
            setNotFound('No Donation is Added!!!');
        }
    }, []);

    // console.log(isSeeAll);
    // console.log(Array.isArray(donatedItems))

    return (
        <div className="bg-white my-8 w-full  flex justify-center items-center">
            {notFound ? <p className="font-bold">{notFound}</p> :
                <div className="flex flex-col gap-6 items-center justify-center">
                    <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
                        {
                            isSeeAll
                                ? donatedItems.map(donatedItem => <DonatedCard key={donatedItem.id} donatedItem={donatedItem}></DonatedCard>)
                                : donatedItems.slice(0, 4).map(donatedItem => <DonatedCard key={donatedItem.id} donatedItem={donatedItem}></DonatedCard>)
                        }
                    </div>
                    {
                        donatedItems.length > 4
                            ? isSeeAll
                                ? <button onClick={() => setIsSeeAll(!isSeeAll)} className="text-white bg-green-600 py-2 px-4 rounded-lg">See Less</button>
                                : <button onClick={() => setIsSeeAll(!isSeeAll)} className="text-white bg-red-600 py-2 px-4 rounded-lg">See More</button>
                            : <div></div>
                    }
                </div>
            }
        </div>
    );
};

export default Donation;