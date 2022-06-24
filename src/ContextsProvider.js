import React, { createContext, useEffect, useState } from "react";
import classes from './pages/NewsPage/NewsPages.module.css'

import Natan from "./pages/NewsPage/image/Natan.png";
import Mot from "./pages/NewsPage/image/Mot.png";
import Timati from "./pages/NewsPage/image/Timati.png";

export const contexts = createContext()

const ContextsProvider = ({ children }) => {

  const [newData, setNewData] = useState([])


  const [data, setData] = useState([
    {
      image: Natan,
      name: "Natan",
      type: "BLACKSTAR",
      description: "Являясь всего лишь частью общей картины",
      id: 1,
    },
    {
      image: Mot,
      name: "Mot",
      type: "BLACKSTAR",
      description: "Являясь всего лишь частью общей картины",
      id: 2,
    },
    {
      image: Timati,
      name: "Timati",
      type: "BLACKSTAR",
      description: "Являясь всего лишь частью общей картины",
      id: 3,
    },
  ])










  return (
    <contexts.Provider value={data} >
      {children}
    </contexts.Provider>
  );
};

export default ContextsProvider;

//  <div className={classes.container}>
//   <div>
//     <div className={classes.containers}>
//       {data.map((item, index) => {
//         return <NewsSetting key={index} item={item} />;
//       })}
//     </div>
//   </div>
// </div>
// <AllEvents />