import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserIdDetails } from "../../apis/getUserIdDetails";
import { MyPerson } from "../../types/newsPages/news";
import classes from "./UserDetails.module.css";
import Backgraund from "../../assets/NewsPages/image/backgraund_gradient.png";
import Fon from "../../assets/NewsPages/image/Fon.png";

export type IdParams = {
  id: string | undefined;
};

const UserDetails = () => {
  const { id } = useParams<IdParams>();
  const [user, setUser] = useState<MyPerson | null>(null);

  console.log(user);

  async function getUserDetails() {
    const newDatas = await getUserIdDetails(id);
    setUser(newDatas);
  }

  useEffect(() => {
    getUserDetails();
  }, [id]);

  //   console.log(id);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Детали мероприятия </h1>
      {user && (
        <>
          <div className={classes.container_fon}>
            <img className={classes.photo_fon} src={Fon} alt="" />
          </div>
          <div className={classes.container_photo}>
            <img className={classes.photo_image} src={user.photo} alt="" />
          </div>

          <div className={classes.text_container}>
            <h2>
              {user.name}: <span>{user.phoneNumber}</span>
            </h2>
            <br />
            <span>
              <h1>Описание:</h1>
              <h4> {user.description}</h4>
            </span>
            <br />
            <p>
              <h2>Дата:</h2> <strong> {user.created}</strong>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDetails;
