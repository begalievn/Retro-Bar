import {
  AdminAdvertising,
  AdminContacts,
  AdminPhoto,
  AdminVideo,
} from "../pages/AdminPage/components";

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
    link: "/contacts",
    element: <AdminContacts />,
    id: 4,
  },
];
