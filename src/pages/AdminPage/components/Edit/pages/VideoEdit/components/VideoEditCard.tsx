import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import classes from "../style.module.css";
import deleteIcon from "../../../../../../../assets/adminPage/delete.png";
import { videoAPI } from "../../../../../../../store/features/videos/videoQuery";
import { IVideo } from "../../../../../../../types/apiTypes/video";

interface VideoPropsType {
  item: IVideo;
}
const VideoEditCard: FC<VideoPropsType> = ({ item }: any) => {
  const [video, setVideo] = React.useState(item?.category);
  const [eventName, setEventName] = React.useState(item?.name);
  const [views, setViews] = React.useState(item?.description);
  const [date, setDate] = React.useState(item?.contacts);
  const [show, setShow] = React.useState(false);
  const [deleteVideo, {}] = videoAPI.useDeleteVideoMutation();
  const [editVideos, {}] = videoAPI.useEditVideoMutation();

  async function deleteVi(video: IVideo): Promise<void> {
    await deleteVideo(video);
  }
  async function editVi(video: IVideo): Promise<void> {
    await editVideos(video);
  }
  function editVideoCard(): void {
    editVi({ ...item, video, eventName, views, date });
  }
  function scrollTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <Card
        onClick={() => {
          editVideoCard();
          setShow(true);
          scrollTop();
        }}
        className={classes.cards}
        key={item.id}
      >
        <CardMedia
          sx={{ cursor: "pointer" }}
          component="img"
          height="140"
          image={item.url}
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
            <span style={{ maxHeight: "60px", overflow: "hidden" }}>
              Views: <strong>{item.viewes}</strong>{" "}
            </span>
            <span>
              Date: <strong>{item.date}</strong>{" "}
            </span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              deleteVi(item);
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
              value={video}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setVideo(e.target.value);
                console.log(e);
              }}
              className={classes.modalInput}
              id="standard-basic"
              variant="standard"
            />
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
                setViews(e.target.value);
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
                editVideoCard();
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

export default VideoEditCard;
