import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./style.module.css";
import { photoAPI } from "../../../../../../store/features/photos/photoQuery";
import LinkNavs from "../../components/LinkNavs";
import { IPhotos } from "../../../../../../types/apiTypes/photo";
import EditCards from "../PhotoEdit/components/EditCards";
import Loader from "../../../../../../UI/Loader/Loader";
const Edit = () => {
  const {
    data: photos,
    error,
    isLoading,
    refetch,
  } = photoAPI.useFetchAllPhotosQuery(20);
  const array: IPhotos[] = photos?.photoCards;
  return (
    <>
      <LinkNavs />
      <div className={classes.cardDiv}>
        {isLoading && <Loader/>}
        {array?.map((item: IPhotos) => (
          <EditCards key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Edit;
