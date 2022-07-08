import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import deleteIcon from "../../../../../../../assets/adminPage/delete.png";
import {  TextField } from "@mui/material";
import classes from "../style.module.css";
import { photoAPI } from "../../../../../../../store/features/photos/photoQuery";
import { IContacts } from "../../../../../../../types/apiTypes/contacts";
import { contactsAPI } from "../../../../../../../store/features/contacts/contactsQuery";

interface ContactPropsType {
  item: IContacts;
}

const ContactsCard: React.FC<ContactPropsType> = ({ item }) => {
  const [photo, setPhoto] = React.useState<string>(item?.photo);
  const [photoUrl, setPhotoUrl] = React.useState<string>(item?.photoUrl);
  const [description, setDescription] = React.useState<string>(item?.description);
  const [phoneNumber, setPhoneNumber] = React.useState<string|number>(item?.phoneNumber);
  const [link, setLink] = React.useState<string>(item?.link);
  const [telegram, setTelegram] = React.useState<string>(item?.telegram);
  const [youtube, setYoutube] = React.useState<string>(item?.youtube);
  const [mail, setMail] = React.useState<string>(item?.mail);
  const [instagram, setInstagram] = React.useState<string>(item?.instagram);
  const [show, setShow] = React.useState<boolean>(false);
  const [deleteContact, {}] = contactsAPI.useDeleteContactMutation();
  const [editContact, {}] = contactsAPI.useEditContactMutation();
  const [des,setDes] = React.useState<boolean>(false)
  async function deleteCont(contact: IContacts): Promise<void> {
    await deleteContact(contact);
  }
  async function editPhotos(contact: IContacts): Promise<void> {
    await editContact(contact);
  }
  function editContactCard(): void {
    editPhotos({ ...item, photo,photoUrl,description,phoneNumber,link, telegram,youtube,mail,instagram});
  }
  function scrollTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function change(): void{
    setDes(!des)
  }
  return (
    <>
      <Card className={des?classes.cardsBig:classes.cards} key={item.id}>
        <CardMedia
          onClick={() => {
            setShow(true);
            scrollTop();
          }}
          className={classes.imgCard}
          component="img"
          image={item.photo}
          alt="photos"
        />
        <CardContent sx={{ minHeight: "90px" }}>
          <Typography
            className={classes.details}
            variant="body2"
            color="text.secondary"
          >
            <span onClick={change} className={des?classes.descSpan:classes.descSpanNorm} >
              Description: <strong>{item.description}</strong>{" "}
            </span>
            <span>
              PhoneNumber: <strong>{item.phoneNumber}</strong>{" "}
            </span>
            {/* <span>
              Link: <strong>{item?.link}</strong>{" "}
            </span>
            <span>
              Telegram: <strong>{item?.telegram}</strong>{" "}
            </span>
            <span>
              Youtube: <strong>{item?.youtube}</strong>{" "}
            </span> */}
            <span>
              Mail: <strong>{item?.mail}</strong>{" "}
            </span>
            {/* <span>
              Instagram: <strong>{item?.instagram}</strong>{" "}
            </span> */}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
                deleteCont(item);
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
              value={photo}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPhoto(e.target.value);
              }}
              className={classes.modalInput}
              id="standard-basic"
              variant="standard"
            />
            <TextField
              value={photoUrl}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPhotoUrl(e.target.value);
              }}
              className={classes.modalInput}
              id="standard-basic"
              variant="standard"
            />
            <TextField
              value={description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setDescription(e.target.value);
              }}
              className={classes.modalInput}
              id="standard-basic"
              variant="standard"
            />
            <TextField
              value={phoneNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPhoneNumber(e.target.value);
              }}
              className={classes.modalInput}
              id="standard-basic"
              variant="standard"
            />
            {/* <TextField
              value={link}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setLink(e.target.value);
              }}
              className={classes.modalInput}
              id="standard-basic"
              variant="standard"
            />
            <TextField
              value={telegram}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTelegram(e.target.value);
              }}
              className={classes.modalInput}
              id="standard-basic"
              variant="standard"
            />
            <TextField
              value={youtube}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setYoutube(e.target.value);
              }}
              className={classes.modalInput}
              id="standard-basic"
              variant="standard"
            /> */}
            <TextField
              value={mail}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setMail(e.target.value);
              }}
              className={classes.modalInput}
              id="standard-basic"
              variant="standard"
            />
            {/* <TextField
              value={instagram}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInstagram(e.target.value);
              }}
              className={classes.modalInput}
              id="standard-basic"
              variant="standard"
            /> */}
            <Button
              onClick={() => {
                editContactCard();
                setShow(false);
              }}
              className={classes.btnEdit}
              variant="contained"
            >
              Сохранить изменения
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactsCard;
