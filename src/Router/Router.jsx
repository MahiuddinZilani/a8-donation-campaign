import { createBrowserRouter, createHashRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";

const myCreatedRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout></MainLayout>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path: "/",
                    element: <Home />,
                    loader: () => fetch('donationItems.json')
                },
                {
                    path: "/donation",
                    element: <Donation></Donation>,
                },
                {
                    path: "/statistics",
                    element: <Statistics></Statistics>,
                    loader: () => fetch('donationItems.json')
                },
                {
                    path: "/donation-details/:id",
                    element: <DonationDetails></DonationDetails>,
                    loader: () => fetch('donationItems.json')
                }
            ],
            
        }
    ]
)

export default myCreatedRouter;