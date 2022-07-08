import React, { useState } from "react";

import classes from "../../AdminPage.module.css";
import styles from "../AdminEstablishment/AdminEstablishment.module.css";
import { Button } from "../../../../UI";
import { Contacts, Establishment } from "../../../../types/adminPage/adminPage";
import { useDispatch } from "react-redux";
import {
  createAlert,
  deleteAlert,
} from "../../../../store/alertSlice/alertSlice";
import DropFileInput from "../DropFileInput/DropFileInput";
import { getFormData } from "../../../../utils/helpers/createFormData";
import { startTimer } from "../../../../utils/helpers/timer";
import AdminInput from "../AdminInput/AdminInput";
import AdminTextarea from "../AdminTextarea/AdminTextarea";
import { ReactComponent as LinkIcon } from "../../../../assets/adminPage/link.svg";
import { ReactComponent as PlusIcon } from "../../../../assets/adminPage/plusIcon.svg";
import { ReactComponent as YoutubeIcon } from "../../../../assets/adminPage/youtube.svg";
import { ReactComponent as MailIcon } from "../../../../assets/adminPage/mail.svg";
import { ReactComponent as InstagramIcon } from "../../../../assets/adminPage/instagram.svg";
import { ReactComponent as TelegramIcon } from "../../../../assets/adminPage/telegram.svg";
import { alertBodySuccess } from "../../../../utils/helpers/alertBody";
import { contactsAPI } from "../../../../store/features/contacts/contactsQuery";

const AdminContacts = () => {
  const [inputValue, setInputValue] = useState<Contacts>({});
  const dispatch = useDispatch();

  const [createContact, {}] = contactsAPI.useCreateContactMutation();

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
    const { formData } = getFormData(inputValue as Contacts);
    console.log("value", inputValue);
    await createContact(formData)
      .unwrap()
      .then(() => {
        dispatch(createAlert(alertBodySuccess));
        startTimer(dispatch, deleteAlert);
      })
      .catch((e) => {
        dispatch(createAlert({ message: e.data.message, type: "error" }));
        startTimer(dispatch, deleteAlert);
      });
  };

  return (
    <form className={classes.generalBlock} onSubmit={handleSubmit}>
      <div className={classes.adminGeneralBlock}>
        <h3 className={classes.adminTitle}>Контакты</h3>
        <div className={classes.adminContent}>
          <div>
            <DropFileInput
              type={"photo"}
              children={"Добавить картинку"}
              setInputValue={setInputValue}
            />
            <AdminInput
              color={"white"}
              icon={<LinkIcon />}
              required={false}
              errorMessage={"Вставьте ссылку на фото!"}
              inputHandler={inputHandler}
              inputValue={inputValue}
              title={"Вставить ссылку"}
              name={"photoUrl"}
            />
          </div>

          <div className={classes.adminFields}>
            <div className={classes.adminInputs}>
              <AdminTextarea
                required={true}
                errorMessage={"О нас обязательное поле!"}
                inputHandler={inputHandler}
                name={"description"}
                title={"О нас"}
              />
              <AdminInput
                required={true}
                icon={<PlusIcon />}
                errorMessage={"Номер обязательное поле!"}
                inputHandler={inputHandler}
                inputValue={inputValue}
                title={"Номер"}
                name={"phoneNumber"}
              />
              <AdminInput
                color={"white"}
                required={false}
                icon={<LinkIcon />}
                errorMessage={"Вставьте ссылку!"}
                inputHandler={inputHandler}
                inputValue={inputValue}
                title={"Вставить ссылку"}
                name={"link"}
              />
            </div>
          </div>
        </div>
        <div className={styles.descriptionWrapper}>
          <h3>Социальные сети</h3>
          <div className={styles.descriptionBlocks}>
            <div className={styles.descriptionBlock}>
              <AdminInput
                icon={<TelegramIcon />}
                required={false}
                inputHandler={inputHandler}
                color={"white"}
                title={"Telegram"}
                name={"telegram"}
                inputValue={inputValue}
              />
            </div>

            <div className={styles.descriptionBlock}>
              <AdminInput
                icon={<YoutubeIcon />}
                required={false}
                errorMessage={"Вид кухни обязательное поле!"}
                inputHandler={inputHandler}
                color={"white"}
                title={"Youtube"}
                name={"youtube"}
                inputValue={inputValue}
              />
            </div>
            <div className={styles.descriptionBlock}>
              <AdminInput
                icon={<InstagramIcon />}
                required={false}
                errorMessage={"Услуги обязательное поле!"}
                inputHandler={inputHandler}
                color={"white"}
                title={"Instagram"}
                name={"instagram"}
                inputValue={inputValue}
              />
            </div>
            <div className={styles.descriptionBlock}>
              <AdminInput
                icon={<MailIcon />}
                required={false}
                errorMessage={"Категория обязательное поле!"}
                inputHandler={inputHandler}
                color={"white"}
                title={"Mail"}
                name={"mail"}
                inputValue={inputValue}
              />
            </div>
          </div>
        </div>

        <div className={classes.buttonBlock}>
          <Button type={"submit"}>Опубликовать</Button>
        </div>
      </div>
    </form>
  );
};

export default AdminContacts;
