import {
  AdminAdvertising,
  AdminContacts,
  AdminEstablishment,
  AdminPhoto, AdminPoster,
  AdminVideo,
} from "../pages/AdminPage/components";
import Edit from "../pages/AdminPage/components/Edit/Edit";

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
    link: '/edit',
    Element: <Edit/>,
    id: 8
  }
];
