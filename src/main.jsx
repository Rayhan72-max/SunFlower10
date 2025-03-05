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
    element: <MyCampaign></MyCampaign>
  },
]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
