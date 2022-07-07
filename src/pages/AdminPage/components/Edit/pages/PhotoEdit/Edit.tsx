import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./style.module.css";
import { photoAPI } from "../../../../../../store/features/photos/photoQuery";
import LinkNavs from "../../components/LinkNavs";
import { IPhotos } from "../../../../../../types/apiTypes/photo";
import EditCards from "../PhotoEdit/components/EditCards";
const Edit = () => {
  const {
    data: photos,
    error,
    isLoading,
    refetch,
  } = photoAPI.useFetchAllPhotosQuery(20);
  let array = photos?.photoCards;
  return (
    <>
      <LinkNavs />
      <div className={classes.cardDiv}>
        {array?.map((item: IPhotos) => (
          <EditCards key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Edit;
