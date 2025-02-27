import { createBrowserRouter } from 'react-router-dom';
import HomeClient from '../pages/Home/HomeClient';
import HomePage from '../pages/Home/HomePage';
import OrderPage from '../pages/Home/OrderPage';
import HomeAdmin from '../pages/Admin/HomeAdmin';
import Dashboard from '../pages/Admin/Dashboard';
import Stol from '../pages/Admin/Stol';
import Blyuda from '../pages/Admin/Blyuda';
import Profil from '../pages/Admin/Profil';
import Categoriya from '../pages/Admin/Categoriya';
import Auth from '../pages/Auth';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomeClient />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/orders',
                element: <OrderPage />
            }
        ]
    },
    {
        path: '/admin',
        element: <HomeAdmin />,
        children: [
            {
                path: '',
                element: <Dashboard />
            },
            {
                path: 'stol',
                element: <Stol />
            },
            {
                path: 'categoriya',
                element: <Categoriya />
            },
            {
                path: 'blyuda',
                element: <Blyuda />
            },
            {
                path: 'profil',
                element: <Profil />
            }
        ]
    },
    {
        path: '/auth',
        element: <Auth />
    }
])