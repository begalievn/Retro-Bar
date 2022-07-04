import { IPage } from "../../types/adminPage/adminPage";

export const pages: IPage = {
  photo: {
    name: "photo",
    title: "Фото",
    add: "photos",
    addLink: false,
    viewersRange: true,
    fields: [
      { title: "Название Заведения", name: "establishmentId" },
      { title: "Название Вечеринки", name: "eventName" },
      { title: "Фотограф", name: "photographerId" },
      { title: "Дата", name: "date" },
    ],
  },
  video: {
    name: "video",
    title: "Видео",
    add: "video",
    addLink: true,
    viewersRange: true,
    fields: [
      { title: "Название Заведения", name: "establishmentId" },
      { title: "Название Вечеринки", name: "eventName" },
      { title: "Видеограф", name: "photographerId" },
      { title: "Дата", name: "date" },
    ],
  },
  advertising: {
    name: "advertising",
    title: "Реклама",
    add: "photos",
    addLink: false,
    viewersRange: false,
    innerPage: { name: "poster", title: "Афиша" },
    fields: [
      { title: "Название", name: "establishmentName" },
      { title: "Описание", name: "eventName" },
      { title: "Привязать номер", name: "randomName" },
    ],
  },

  poster: {
    name: "poster",
    title: "Афиша",
    add: "photos",
    addLink: false,
    viewersRange: false,
    fields: [],
  },
  establishment: {
    name: "establishment",
    title: "Заведение",
    add: "logo",
    addLink: false,
    viewersRange: false,
    fields: [
      { title: "Название", name: "name" },
      { title: "О заведении", name: "description" },
    ],
    description: [
      { title: "Время работы", name: "workingHours" },
      { title: "Средниии чек", name: "check" },
      { title: "Услуги", name: "services" },
    ],
    contacts: [{ title: "Номер", name: "contacts" }],
  },
  contacts: {
    name: "contacts",
    title: "Контакты",
    add: "photos",
    addLink: false,
    viewersRange: false,
    fields: [
      { title: "О нас", name: "AboutUs" },
      { title: "Номер", name: "number" },
      { title: "Привязать номер", name: "randomName" },
    ],
  },
};
