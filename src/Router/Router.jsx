import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
// import { children } from "react";
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
                    loader: () => fetch('/public/donationItems.json')
                },
                {
                    path: "/donation",
                    element: <Donation></Donation>,
                },
                {
                    path: "/statistics",
                    element: <Statistics></Statistics>
                },
                {
                    path: "/donation-details/:id",
                    element: <DonationDetails></DonationDetails>,
                    loader: () => fetch('/public/donationItems.json')
                }
            ]
        }
    ]
)

export default myCreatedRouter;