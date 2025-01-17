import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import HomePage from './Pages/HomePage/HomePage';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import reportWebVitals from './reportWebVitals';
import CategoryPage from './Pages/CategoryPage/CategoryPage.jsx';
import StorePage from './Pages/StorePage/StorePage.jsx';
import LoginPage from './Pages/LoginPage/LoginPage.jsx';
import RegisterPage from './Pages/RegisterPage/RegisterPage.jsx';
import CartPage from './Pages/CartPage/CartPage.jsx';
import PaymentPage from './Pages/PaymentPage/PaymentPage.jsx';
import PaymentResponsePage from './Pages/PaymentResponsePage/PaymentResponsePage.jsx';
import store from './store.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/styles/variables.css';
import './index.css';
import DashboardPage from './Pages/DashboardPage/DashboardPage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/home', 
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/category/:categoryId',
        element: <CategoryPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/store/:storeId',
        element: <StorePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/register',
        element: <RegisterPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/mycart',
        element: <CartPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/payment',
        element: <PaymentPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/paymentResponse/:orderId',
        element: <PaymentResponsePage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/dashboard',
        element: <DashboardPage />,
        errorElement: <ErrorPage />
    },
])

root.render(
    <Provider store={store}>
        {/* <React.StrictMode> */}
            <RouterProvider router={router} />
        {/* </React.StrictMode> */}
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
