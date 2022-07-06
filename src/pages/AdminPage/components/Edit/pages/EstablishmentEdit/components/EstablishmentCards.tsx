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
import { establishmentsAPI } from "../../../../../../../store/features/establishments/establishmentsQuery";
import { IEstablishment } from "../../../../../../../types/apiTypes/establishment";

interface EstabPropsType {
    item: IEstablishment;
}

const EstablishmentCards: FC<EstabPropsType> = ({ item }) => {
  const [logo, setLogo] = React.useState(item?.logo);
  const [name, setName] = React.useState(item?.name);
  const [description, setDescription] = React.useState(item?.description);
  const [workingHours, setWhours] = React.useState(item?.workingHours);
  const [contacts, setContacts] = React.useState(item?.contacts);
  const [category, setCategory] = React.useState(item?.category);
  const [show, setShow] = React.useState(false);
  const [deleteEstablishment, {}] =
    establishmentsAPI.useDeleteEstablishmentMutation();
  const [editEstablishments, {}] =
    establishmentsAPI.useEditEstablishmentMutation();

  async function deleteEstab(establishment: IEstablishment): Promise<void> {
    await deleteEstablishment(establishment);
  }
  async function editEstab(establishment: IEstablishment): Promise<void> {
    await editEstablishments(establishment);
  }
  function editEstabCard(): void {
    editEstab({ ...item, logo, name, description, workingHours, contacts, category });
  }
  function scrollTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <Card
        onClick={() => {
          editEstabCard();
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
          image={item.logo}
          alt="photos"
        />
        <CardContent>
          <Typography
            className={classes.details}
            variant="body2"
            color="text.secondary"
          >
            <span>
              Name: <strong>{item.name}</strong>{" "}
            </span>
            <span style={{ maxHeight: "60px", overflow: "hidden" }}>
              Description: <strong>{item.description}</strong>{" "}
            </span>
            <span>
              Working hours: <strong>{item.workingHours}</strong>{" "}
            </span>
            <span>
              Contacts: <strong>{item.contacts}</strong>{" "}
            </span>
            <span>
              Category: <strong>{item?.category}</strong>{" "}
            </span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              deleteEstab(item);
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
              value={logo}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setLogo(e.target.value);
              }}
              className={classes.modalInput}
              id="standard-basic"
              variant="standard"
            />
            <TextField
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
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
              value={workingHours}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setWhours(e.target.value);
              }}
              className={classes.modalInput}
              id="standard-basic"
              variant="standard"
            />
            <TextField
              value={contacts}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setContacts(e.target.value);
              }}
              className={classes.modalInput}
              id="standard-basic"
              variant="standard"
            />
            <TextField
              value={category}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setCategory(e.target.value);
              }}
              className={classes.modalInput}
              id="standard-basic"
              variant="standard"
            />
            <Button
              onClick={() => {
                editEstabCard();
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

export default EstablishmentCards;