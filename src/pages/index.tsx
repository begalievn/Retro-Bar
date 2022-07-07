import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactsPage from './ContactsPage/ContactsPage';
import InstitutionPage from './InstitutionPage/InstitutionPage';

import InstitutionBarPage from './InstitutionBarPage/InstitutionBarPage';
import MainPage from './MainPage/MainPage';
import PhotoPage from './PhotoPage/PhotoPage';
import VideoPage from './VideoPage/VideoPage';
import EventsPage from './EventsPage/EventsPage';
import ErrorPage from './ErrorPage/ErrorPage';
import Authorization from './Authorization/Authorization';
import AdminPage from './AdminPage/AdminPage';
import Gallery from '../UI/Gallery/Gallery';
import NewsPages from './NewsPage/NewsPages';

import { useAppSelector } from '../app/hooks';

const MainRoutes = () => {
  const isAdmin = useAppSelector((state) => state.AuthorizationSlice.token);

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
      link: '/institution/:establishmentId',
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
      element: <NewsPages />,
      id: 7,
    },
    {
      link: '/contacts',
      element: <ContactsPage />,
      id: 8,
    },
    {
      link: '/*',
      element: <ErrorPage />,
      id: 9,
    },
    {
      link: '/authorization',
      element: <Authorization />,
      id: 10,
    },

    {
      link: '/photo/gallery',
      element: <Gallery />,
      id: 12,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      link: '/admin/*',
      element: <AdminPage />,
      id: 1,
    },
  ];

  return (
    <Routes>
      {isAdmin &&
        PRIVATE_ROUTES.map(({ link, id, element }) => (
          <Route path={link} element={element} key={id} />
        ))}
      {PUBLIC_ROUTES.map(({ link, id, element }) => (
        <Route path={link} element={element} key={id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
