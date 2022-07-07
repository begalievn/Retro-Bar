import {
  AdminAdvertising,
  AdminContacts,
  AdminEstablishment,
  AdminPhoto,
  AdminPoster,
  AdminVideo,
  Edit,
} from "../pages/AdminPage/components";
import EstablishmentEditPage from "../pages/AdminPage/components/Edit/pages/EstablishmentEdit/EstablishmentEditPage";
import VideoEditPage from "../pages/AdminPage/components/Edit/pages/VideoEdit/VideoEditPage";

export const ROUTES = [
  {
    link: "/photo",
    element: <AdminPhoto />,
    id: 2,
  },
  {
    link: "/video",
    element: <AdminVideo />,
    id: 3,
  },
  {
    link: "/advertising",
    element: <AdminAdvertising />,
    id: 4,
  },
  {
    link: "/advertising/poster",
    element: <AdminPoster />,
    id: 5,
  },
  {
    link: "/contacts",
    element: <AdminContacts />,
    id: 6,
  },
  {
    link: "/establishment",
    element: <AdminEstablishment />,
    id: 7,
  },
  {
    link: "/edit",
    element: <Edit />,
    id: 8,
  },
  {
    link: "/edit/video",
    element: <VideoEditPage />,
    id: 9,
  },
  {
    link: "/edit/establishment",
    element: <EstablishmentEditPage />,
    id: 10,
  },
];
