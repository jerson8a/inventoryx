import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Pages/HomePage/HomePage';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/', 
        element: <HomePage />,
        errorElement: <ErrorPage />,
    }
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
