import React, { FC, useState } from "react";

import classes from "./AdminEstablishment.module.css";
import AdminGeneral from "../AdminGeneral/AdminGeneral";
import DescriptionComponent from "../DescriptionComponent/DescriptionComponent";
import {
  AdminPageTypes,
  Establishment,
  IPageBody,
  PhotoCard,
} from "../../../../types/adminPage/adminPage";
import ContactsComponent from "../ContactsComponent/ContactsComponent";
import AdminInput from "../AdminInput/AdminInput";
import { useDispatch } from "react-redux";
import { AdminApi } from "../../../../API/adminApi/adminApi";
import {
  createAlert,
  deleteAlert,
} from "../../../../store/alertSlice/alertSlice";
import { Button } from "../../../../UI";

const establishmentPage = {
  name: "establishment",
  title: "Заведение",
  add: "logo",
  addLink: false,
  viewersRange: false,
  fields: [
    { title: "Название", name: "name", type: "input" },
    { title: "О заведении", name: "description", type: "textArea" },
  ],
  description: [
    { title: "Время работы", name: "workingHours" },
    { title: "Средниии чек", name: "check" },
    { title: "Услуги", name: "services" },
  ],
  contacts: [{ title: "Номер", name: "contacts" }],
};

const AdminEstablishment = () => {
  const [inputValue, setInputValue] = useState<AdminPageTypes | object>({});
  const dispatch = useDispatch();
  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.toString().includes("TextArea")) {
      e.target.style.height = e.target.scrollHeight + "px";
    }

    setInputValue((prevInputs: AdminPageTypes) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const postHandler = () => {
    AdminApi.addEstablishment(inputValue as Establishment)
      .then(() => {
        dispatch(
          createAlert({ message: "Успешно опубликовано", type: "success" })
        );
        setTimeout(() => dispatch(deleteAlert()), 2000);
      })
      .catch((e) => {
        dispatch(
          createAlert({ message: e.response.data.message, type: "error" })
        );
        setTimeout(() => dispatch(deleteAlert()), 2000);
      });
  };

  console.log(inputValue);
  return (
    <div className={classes.establishmentBlock}>
      <AdminGeneral
        handler={inputHandler}
        postHandler={postHandler}
        page={establishmentPage}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <div className={classes.descriptionWrapper}>
        <h3>Описание</h3>
        <div className={classes.descriptionBlocks}>
          <div className={classes.descriptionBlock}>
            <AdminInput
              inputHandler={inputHandler}
              color={"white"}
              title={"Время работы"}
              name={"workingHours"}
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          </div>
          <div className={classes.descriptionBlock}>
            <AdminInput
              inputHandler={inputHandler}
              color={"white"}
              title={"Номер"}
              name={"contacts"}
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          </div>
        </div>
      </div>

      <div className={classes.contactsWrapper}>
        <h3>Контакты</h3>
        <div className={classes.contacts}>
          <AdminInput
            inputHandler={inputHandler}
            color={"white"}
            title={"Номер"}
            name={"contacts"}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </div>
      </div>
      <div className={classes.btnBlock}>
        <Button onClick={postHandler}>Опубликовать</Button>
      </div>
    </div>
  );
};

export default AdminEstablishment;
