import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from '@mui/material';
import React, { FC } from 'react';
import classes from '../style.module.css';
import deleteIcon from '../../../../../../../assets/adminPage/delete.png';
import { videoAPI } from '../../../../../../../store/features/videos/videoQuery';
import { IVideo } from '../../../../../../../types/apiTypes/video';

interface VideoPropsType {
  item: IVideo;
}
const VideoEditCard: FC<VideoPropsType> = ({ item }) => {
  const [video, setVideo] = React.useState<undefined | string>(item?.video);
  const [eventName, setEventName] = React.useState<string>(item?.eventName);
  const [views, setViews] = React.useState<number | string>(item?.views);
  const [date, setDate] = React.useState<string>(item?.date);
  const [show, setShow] = React.useState<boolean>(false);
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          image={item.video}
          alt="photos"
        />
        <CardContent sx={{ minHeight: '130px' }}>
          <Typography
            className={classes.details}
            variant="body2"
            color="text.secondary"
          >
            <span>
              EventName: <strong>{item.eventName}</strong>{' '}
            </span>
            <span>
              Views: <strong>{item.views}</strong>{' '}
            </span>
            <span>
              Date: <strong>{item.date}</strong>{' '}
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
