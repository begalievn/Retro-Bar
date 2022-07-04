import React from "react";
import { Routes, Route } from "react-router-dom";

import ContactsPage from "./ContactsPage/ContactsPage";
import InstitutionPage from "./InstitutionPage/InstitutionPage";
import { InstitutionBarPage } from "./InstitutionBarPage/components2/InstitutionBarPage";
import MainPage from "./MainPage/MainPage";
import NewsPages from "./NewsPage/NewsPages";
import PhotoPage from "./PhotoPage/PhotoPage";
import VideoPage from "./VideoPage/VideoPage";
import EventsPage from "./EventsPage/EventsPage";
import ErrorPage from "./ErrorPage/ErrorPage";
import Authorization from "./Authorization/Authorization";
import AdminPanelPage from "./AdminPage/AdminPanelPage";
import Gallery from "../UI/Gallery/Gallery";

const MainRoutes = () => {
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
      link: "/institution-bar",
      element: <InstitutionBarPage />,
      id: 5,
    },
    {
      link: "/events",
      element: <EventsPage />,
      id: 6,
    },
    {
      link: "/news",
      element: <NewsPages />,
      id: 7,
    },
    {
      link: "/contacts",
      element: <ContactsPage />,
      id: 8,
    },
    {
      link: "/*",
      element: <ErrorPage />,
      id: 9,
    },
    {
      link: "/authorization",
      element: <Authorization />,
      id: 10,
    },
    {
      link: "/admin",
      element: <AdminPanelPage />,
      id: 11,
    },
    {
      link: "/photo/gallery",
      element: <Gallery />,
      id: 12,
    }
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
