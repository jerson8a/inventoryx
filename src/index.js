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
import store from './store.js';
import '../src/assets/styles/variables.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

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
