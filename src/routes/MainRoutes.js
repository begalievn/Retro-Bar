import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ContactsPage from '../pages/ContactsPage';
import InstitutionPage from '../pages/InstitutionPage';
import InstitutionBarPage from '../pages/InstitutionBarPage';
import MainPage from '../pages/MainPage';
import NewsPage from '../pages/NewsPage';
import PhotoPage from '../pages/PhotoPage';
import VideoPage from '../pages/VideoPage';
import EventsPage from '../pages/EventsPage';
import ErrorPage from '../pages/ErrorPage';

const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        {
            link: '/',
            element: <MainPage />,
            id: 1,
        },
        {
            link: '/photo',
            element: <PhotoPage />,
            id: 2,
        },
        {
            link: '/video',
            element: <VideoPage />,
            id: 3,
        },
        {
            link: '/institution',
            element: <InstitutionPage />,
            id: 4,
        },
        {
            link: '/institution-bar',
            element: <InstitutionBarPage />,
            id: 5,
        },
        {
            link: '/events',
            element: <EventsPage />,
            id: 6,
        },
        {
            link: '/news',
            element: <NewsPage />,
            id: 7,
        },
        {
            link: '/contacts',
            element: <ContactsPage />,
            id: 8,
        },
        {
            link: '*',
            element: <ErrorPage />,
            id: 9,
        },
    ];

    return (
        <Routes>
            {PUBLIC_ROUTES.map((item) => (
                <Route path={item.link} element={item.element} key={item.id} />
            ))}
        </Routes>
    );
};

export default MainRoutes;
