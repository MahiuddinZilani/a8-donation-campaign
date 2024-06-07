
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const Statistics = () => {
    const data = [
        { name: 'Total Donation', value: 100 },
        { name: 'My Donation', value: 0 },
    ];

    const COLORS = ['#FF444A', '#00C49F', '#0088FE', '#FFBB28'];

    const [myDonation, setMyDonation] = useState(0);
    const totalDonation = localStorage.getItem('totalDonation');

    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem('donatedItems'));
        console.log(donatedItems);
        if (donatedItems) {
            const myDonation = donatedItems.reduce((preValue, currentItem) => preValue + currentItem.price, 0);
            setMyDonation(myDonation);
        }
    }, []);

    data[0].value = parseInt(totalDonation) - myDonation;
    data[1].value = myDonation;

    console.log(data);

    return (
        <div className="bg-white h-[75vh] flex flex-col justify-center items-center mt-8">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart >
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className='flex justify-center items-center gap-14'>
                <div className='flex justify-center items-center gap-5'>
                    <p>{data[0].name}:  </p>
                    <div className='w-4 h-4 bg-[#FF444A]'></div>
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <p>{data[1].name}:  </p>
                    <div className='w-4 h-4 bg-[#00C49F]'></div>
                </div>
            </div>
        </div >
    );
};

export default Statistics;

