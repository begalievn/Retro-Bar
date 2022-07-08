import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import deleteIcon from "../../../../../../../assets/adminPage/delete.png";
import { Container, TextField } from "@mui/material";
import classes from "../style.module.css";
import { IPhoto, IPhotos } from "../../../../../../../types/apiTypes/photo";
import { photoAPI } from "../../../../../../../store/features/photos/photoQuery";

interface PhotoPropsType {
  item: IPhotos;
}

const EditCards: React.FC<PhotoPropsType> = ({ item }) => {
  const [eventName, setEventName] = React.useState<string>(item?.eventName);
  const [views, setViews] = React.useState<number>(+item?.views);
  const [date, setDate] = React.useState<string>(item?.date);
  const [show, setShow] = React.useState<boolean>(false);
  const [deletePhoto, {}] = photoAPI.useDeletePhotoMutation();
  const [editPhoto, {}] = photoAPI.useEditPhotoMutation();
  const photoArray = item?.photos;
  async function deletePhotos(photo: IPhotos): Promise<void> {
    await deletePhoto(photo);
  }
  async function editPhotos(photo: IPhotos): Promise<void> {
    await editPhoto(photo);
    console.log(photo);
  }
  function editPhotoCard(): void {
    editPhotos({ ...item, eventName, views, date });
  }
  function scrollTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <Card className={classes.cards} key={item.id}>
        <CardMedia
          onClick={() => {
            setShow(true);
            scrollTop();
          }}
          className={classes.imgCard}
          component="img"
          image={photoArray[0]?.url}
          alt="photos"
        />
        <CardContent sx={{ minHeight: "90px" }}>
          <Typography
            className={classes.details}
            variant="body2"
            color="text.secondary"
          >
            <span>
              EventName: <strong>{item.eventName}</strong>{" "}
            </span>
            <span>
              Views: <strong>{item.views}</strong>{" "}
            </span>
            <span>
              Date: <strong>{item?.date}</strong>{" "}
            </span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              deletePhotos(item);
            }}
            size="small"
          >
            <img src={deleteIcon} alt="" />
          </Button>
        </CardActions>
      </Card>
      {show && (
        <div className={classes.mainDiv}>
          <div className={classes.modalDiv}>
            <TextField
              value={eventName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEventName(e.target.value);
              }}
              className={classes.modalInput}
              id="standard-basic"
              variant="standard"
            />
            <TextField
              value={views}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setViews(+e.target.value);
              }}
              className={classes.modalInput}
              id="standard-basic"
              variant="standard"
            />
            <TextField
              value={date}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setDate(e.target.value);
              }}
              className={classes.modalInput}
              id="standard-basic"
              variant="standard"
            />
            <Button
              onClick={() => {
                editPhotoCard();
                setShow(false);
              }}
              className={classes.btnEdit}
              variant="contained"
              color="success"
            >
              Сохранить изменения
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditCards;
