import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import deleteIcon from "../../../../../assets/adminPage/delete.png";
import { photoAPI } from "../../../../../store/features/photos/photoQuery";
import { Container } from "@mui/material";
import { IPhotos } from "../../../../PhotoPage/components/PhotoMain/interfaces";
import classes from "../style.module.css";
import { Link, useNavigate } from "react-router-dom";
import EditModal from "./EditModal";
export default function EditCards() {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const {
    data: photos,
    error,
    isLoading,
    refetch,
  } = photoAPI.useFetchAllPhotosQuery(20);
  let array = photos?.photoCards;
  const [deletePhoto, {}] = photoAPI.useDeletePhotoMutation();

  async function deletePhotos(photo: IPhotos) {
    await deletePhoto(photo);
  }

  return (
    <Container className={classes.cont}>
      {array?.map((item: any) => (
        <Card className={classes.cards} key={item.id}>
          <CardMedia
            onClick={() => {
              setShow(true);
            }}
            sx={{ cursor: "pointer" }}
            component="img"
            height="140"
            image={item.establishment.logo}
            alt="photos"
          />
          <CardContent>
            <Typography
              className={classes.details}
              variant="body2"
              color="text.secondary"
            >
              <span>
                EventName: <strong>{item.eventName}</strong>{" "}
              </span>
              <span>
                Date: <strong>{item.date}</strong>{" "}
              </span>
              <span>
                Created: <strong>{item.created}</strong>{" "}
              </span>
              <span>
                Views: <strong>{item.views}</strong>{" "}
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
      ))}
      {array.map((item: any) => show && <EditModal item={item} />)}
    </Container>
  );
}
