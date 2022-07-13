import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ContactsPage from "./ContactsPage/ContactsPage";
import InstitutionPage from "./InstitutionPage/InstitutionPage";
import InstitutionBarPage from "./InstitutionBarPage/InstitutionBarPage";
import MainPage from "./MainPage/MainPage";
import PhotoPage from "./PhotoPage/PhotoPage";
import VideoPage from "./VideoPage/VideoPage";
import EventsPage from "./EventsPage/EventsPage";
import ErrorPage from "./ErrorPage/ErrorPage";
import Authorization from "./Authorization/Authorization";
import AdminPage from "./AdminPage/AdminPage";
import Gallery from "../UI/Gallery/Gallery";
import NewsPages from "./NewsPage/NewsPages";

import { useAppSelector } from "../app/hooks";
import UserDetails from "./NewsPage/UserDetails";
import EventBarPage from "./EventBarPage/EventBarPage";

const MainRoutes = () => {
  const isAdmin = useAppSelector((state) => state.AuthorizationSlice.token);

  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <MainPage />,
      id: 1,
    },
    {
      link: "/photo",
      element: <PhotoPage />,
      id: 2,
    },
    {
      link: "/video",
      element: <VideoPage />,
      id: 3,
    },
    {
      link: "/institution",
      element: <InstitutionPage />,
      id: 4,
    },
    {
      link: "/institution/:establishmentId",
      element: <InstitutionBarPage />,
      id: 5,
    },
    {
      link: "/events",
      element: <EventsPage />,
      id: 6,
    },
    {
      link: "/events/:eventId",
      element: <EventBarPage />,
      id: 7,
    },
    {
      link: "/news",
      element: <NewsPages />,
      id: 8,
    },
    {
      link: "/contacts",
      element: <ContactsPage />,
      id: 9,
    },
    {
      link: "/errorPage",
      element: <ErrorPage />,
      id: 10,
    },
    {
      link: "/authorization",
      element: <Authorization />,
      id: 11,
    },

    {
      link: "/photo/gallery",
      element: <Gallery />,
      id: 12,
    },
    {
      link: "news/:id",
      element: <UserDetails />,
      id: 13,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      link: "/admin/*",
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
      <Route path="*" element={<Navigate to="/errorPage" replace />} />
    </Routes>
  );
};

export default MainRoutes;
