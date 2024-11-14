import { Navigate } from 'react-router-dom';
import App from './App.jsx';
import Homepage from './components/Homepage.jsx';
import ShopPage from './components/ShopPage.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" replace />
            },
            {
                path: '/home',
                element: <Homepage />,
            },
            {
                path: 'shop',
                element: <ShopPage />,
            }
        ]
    },

];

export default routes;