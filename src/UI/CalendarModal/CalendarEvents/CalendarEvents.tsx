import React, { FC } from "react";
import hero1 from "../../../assets/photoPageImages/calendarImages/secretMusicHall.png";
import hero2 from "../../../assets/photoPageImages/calendarImages/parkEventPlace.png";
import hero3 from "../../../assets/photoPageImages/calendarImages/munchenPub.png";
import hero4 from "../../../assets/photoPageImages/calendarImages/sushiRoom.png";
import Events from "./Events/Events";
const CalendarEvents: FC = () => {
  let events = [
    {
      link: hero2,
      name: "PARK EVENTPLACE",
      partyName: "ÜN",
      views: 6545,
      photos: 122,
      date: "14 мая 2022",
      images:[{image:hero1},{image:hero2},{image:hero3},{image:hero4}]
    },
    {
      link: hero1,
      name: "SECRET MUSIC HALL",
      partyName: "ВИКТОРИНА",
      views: 4789,
      photos: 70,
      date: "11 мая 2022",
      images:[{image:hero1},{image:hero2},{image:hero3},{image:hero4}]
    },
    {
      link: hero4,
      name: "SUSHI ROOM",
      partyName: "ОТКРЫТИЕ ЛЕТНЕЙ ТЕРРАСЫ",
      views: 6545,
      photos: 122,
      date: "14 мая 2022",
      images:[{image:hero1},{image:hero2},{image:hero3},{image:hero4}]
    },
    {
      link: hero3,
      name: "MUNCHEN PUB",
      partyName: "LIVE MUSIC: COOL BAND",
      views: 6545,
      photos: 122,
      date: "14 мая 2022",
      images:[{image:hero1},{image:hero2},{image:hero3},{image:hero4}]
    },
  ];
  return <Events events={events} />;
};

export default CalendarEvents;
