import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AddCampaign from './Pages/AddCampaign.jsx';
import Details from './Pages/Details.jsx';
import AllCampaigns from './Pages/AllCampaigns.jsx';
import MyCampaign from './Pages/MyCampaign.jsx';
import Update from './Pages/Update.jsx';
import MyDonation from './Pages/MyDonation.jsx';
import Unable from './Pages/Unable.jsx';
import Private from './Pages/Private.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [{
      path: "/",
      element: <Home></Home>,
      loader:()=> fetch("./campaigns.json")
    },
  {
    path:"/login",
    element: <Login></Login>
  },
  {
    path:"/register",
    element: <Register></Register>
  },
  {
    path:"/addcampaign",
    element: <AddCampaign></AddCampaign>
  },
  {
    path:"/details/:id",
    element: <Details></Details>
  },
  {
    path:"/allcampaigns",
    element: <AllCampaigns></AllCampaigns>
  },
  {
    path:"/mycampaign/:email",
    element: <Private><MyCampaign></MyCampaign></Private>
  },
  {
    path:"/update",
    element: <Private><Update></Update></Private>
  },
  {
    path:"/mydonation/:email",
    element: <Private><MyDonation></MyDonation></Private>
  },
],
},
{
  path:"*",
  element:<Unable></Unable>
}
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
