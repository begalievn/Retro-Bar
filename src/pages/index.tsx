import React from "react";
import { Routes, Route } from "react-router-dom";

import ContactsPage from "./ContactsPage/ContactsPage";
import InstitutionPage from "./InstitutionPage/InstitutionPage";
import InstitutionBarPage from "./InstitutionBarPage/InstitutionBarPage";
import MainPage from "./MainPage/MainPage";
import NewsPage from "./NewsPage/NewsPage";
import PhotoPage from "./PhotoPage/PhotoPage";
import VideoPage from "./VideoPage/VideoPage";
import EventsPage from "./EventsPage/EventsPage";
import ErrorPage from "./ErrorPage/ErrorPage";
import Authorization from "./Authorization/Authorization";
import AdminPage from "./AdminPage/AdminPage";
import Gallery from "../UI/Gallery/Gallery";

import {
  ADMIN_ADVERTISING,
  ADMIN_CONTACTS,
  ADMIN_ESTABLISHMENT,
  ADMIN_PHOTO,
  ADMIN_VIDEO,
} from "../utils/path";
import { isAdmin } from "../utils/getConfig";
import { AdminPhoto } from "./AdminPage/components";

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
      element: <NewsPage />,
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
      link: "/photo/gallery",
      element: <Gallery />,
      id: 11,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: ADMIN_PHOTO,
      element: <AdminPhoto />,
      id: 2,
    },
    {
      link: ADMIN_VIDEO,
      element: <Gallery />,
      id: 3,
    },
    {
      link: ADMIN_ADVERTISING,
      element: <Gallery />,
      id: 4,
    },
    {
      link: ADMIN_ESTABLISHMENT,
      element: <Gallery />,
      id: 5,
    },
    {
      link: ADMIN_CONTACTS,
      element: <Gallery />,
      id: 6,
    },
  ];

  return (
    <Routes>
      {isAdmin
        ? PRIVATE_ROUTES.map((item) => (
            <Route path={item.link} element={item.element} key={item.id} />
          ))
        : PUBLIC_ROUTES.map((item) => (
            <Route path={item.link} element={item.element} key={item.id} />
          ))}
    </Routes>
  );
};

export default MainRoutes;
