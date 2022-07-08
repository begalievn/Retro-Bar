import React, { useState } from "react";

import classes from "../../AdminPage.module.css";
import { Button } from "../../../../UI";
import {
  AdminPageTypes,
  Contacts,
  Establishment,
  PhotoCard,
} from "../../../../types/adminPage/adminPage";
import { useDispatch } from "react-redux";
import { AdminApi } from "../../../../API/adminApi/adminApi";
import {
  createAlert,
  deleteAlert,
} from "../../../../store/alertSlice/alertSlice";
import DropFileInput from "../DropFileInput/DropFileInput";
import AdminFields from "../AdminFields/AdminFields";
import { getFormData } from "../../../../utils/helpers/createFormData";
import { alertBodySuccess } from "../../../../utils/helpers/alertBody";
import { startTimer } from "../../../../utils/helpers/timer";

const AdminContacts = () => {
  const [inputValue, setInputValue] = useState<Contacts>({});
  const dispatch = useDispatch();

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.toString().includes("TextArea")) {
      e.target.style.height = e.target.scrollHeight + "px";
    }
    setInputValue((prevInputs: Contacts) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formData } = getFormData(inputValue as Establishment);
    // console.log("value", inputValue);
    // await createEstablishmentCard(formData)
    //   .unwrap()
    //   .then(() => {
    //     dispatch(createAlert(alertBodySuccess));
    //     startTimer(dispatch, deleteAlert);
    //   })
    //   .catch((e) => {
    //     dispatch(createAlert({ message: e.data.message, type: "error" }));
    //     startTimer(dispatch, deleteAlert);
    //   });
  };

  return (
    <form className={classes.generalBlock} onSubmit={handleSubmit}>
      <div className={classes.adminGeneralBlock}>
        <h3 className={classes.adminTitle}>Контакты</h3>
        <div className={classes.adminContent}>
          <DropFileInput
            type={"photos"}
            children={"Добавить картинки"}
            setInputValue={setInputValue}
          />

        </div>
        <div className={classes.buttonBlock}>
          <Button type={"submit"}>Опубликовать</Button>
        </div>
      </div>
    </form>
  );
};

export default AdminContacts;
