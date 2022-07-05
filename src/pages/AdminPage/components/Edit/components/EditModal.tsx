import { Button, TextField } from "@mui/material";
import React from "react";
import { photoAPI } from "../../../../../store/features/photos/photoQuery";
import classes from "../style.module.css";
const EditModal = ({item}:any) => {
  const [editPhoto, {}] = photoAPI.useEditPhotoMutation();

    const editPhotoCard = () => {
        const title = prompt() || "";

        const newPhoto = {

        }
        editPhoto({ ...item, title });
      };



  return (
    <div className={classes.mainDiv}>
      <div className={classes.modalDiv}>
        <TextField
          className={classes.modalInput}
          id="standard-basic"
          variant="standard"
        />
        <TextField
          className={classes.modalInput}
          id="standard-basic"
          variant="standard"
        />
        <TextField
          className={classes.modalInput}
          id="standard-basic"
          variant="standard"
        />
        <TextField
          className={classes.modalInput}
          id="standard-basic"
          variant="standard"
        />
        <TextField
          className={classes.modalInput}
          id="standard-basic"
          variant="standard"
        />
        <Button className={classes.btnEdit} variant="contained" color="success">
          Сохранить изменения
        </Button>
      </div>
    </div>
  );
};

export default EditModal;
