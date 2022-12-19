import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddContact from '../components/Products/AddContact';
import EditContact from '../components/Products/EditContact';
import Homepage from '../pages/Homepage';

const MainRoutes = () => {

    let PUBLIC_ROUTES = [
        { link: '/', element: <Homepage />, id: 1 },
        { link: '/add', element: <AddContact />, id: 2 },
        { link: '/edit/:id', element: <EditContact />, id: 3 },
    ]

    return (
        <Routes>
            {PUBLIC_ROUTES.map((item) => (
                <Route path={item.link} key={item.id} element={item.element} />
            ))}
        </Routes>
    );
};

export default MainRoutes;