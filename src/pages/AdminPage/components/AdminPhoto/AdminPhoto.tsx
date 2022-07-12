import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import classes from "../../AdminPage.module.css";
import { PhotoCard } from "../../../../types/adminPage/adminPage";
import { Button } from "../../../../UI";
import DropFileInput from "../DropFileInput/DropFileInput";
import { photoAPI } from "../../../../store/features/photos/photoQuery";
import { getFormData } from "../../../../utils/helpers/createFormData";
import {
  createAlert,
  deleteAlert,
} from "../../../../store/alertSlice/alertSlice";
import { alertBodySuccess } from "../../../../utils/helpers/alertBody";
import { AdminInput } from "../index";
import AdminSelect from "../AdminSelect/AdminSelect";
import { useAppSelector } from "../../../../app/hooks";
import { startTimer } from "../../../../utils/helpers/timer";
import Loader from "../../../../UI/Loader/Loader";
import { useLocation } from "react-router-dom";

const AdminPhoto = () => {
  const dispatch = useDispatch();
  const path = useLocation();
  const [inputValue, setInputValue] = useState<PhotoCard>({
    establishmentId: "",
    photographerId: "",
  });
  const [createPhotoCard, { isLoading, isSuccess }] =
    photoAPI.useCreatePhotoCardMutation();
  let establishments = useAppSelector((state) => state.establishments.value);
  let photographers = useAppSelector((state) => state.photographers.value);

  useEffect(() => {
    setInputValue({});
  }, [isSuccess]);

  if (isLoading) {
    return <Loader />;
  }

  const inputHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    if (e.target.toString().includes("TextArea")) {
      e.target.style.height = e.target.scrollHeight + "px";
    }
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formData } = getFormData(inputValue as PhotoCard);
    await createPhotoCard(formData)
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
    <form onSubmit={handleSubmit} className={classes.generalBlock}>
      <div className={classes.adminGeneralBlock}>
        <h3 className={classes.adminTitle}>Фото</h3>
        <div className={classes.adminContent}>
          <DropFileInput
            type={"photos"}
            children={"Добавить картинки"}
            setInputValue={setInputValue}
          />
          <div className={classes.adminFields}>
            <div className={classes.adminInputs}>
              <AdminSelect
                errorMessage={"Название Вечеринки обязательное поле!"}
                inputHandler={inputHandler}
                title={"Название Заведения"}
                name={"establishmentId"}
                required={true}
                options={establishments || []}
              />
              <AdminInput
                required={true}
                errorMessage={"Название Вечеринки обязательное поле!"}
                inputHandler={inputHandler}
                inputValue={inputValue}
                title={"Название Вечеринки"}
                name={"eventName"}
              />
              <AdminSelect
                errorMessage={"Фотограф обязательное поле!"}
                inputHandler={inputHandler}
                title={"Фотограф"}
                name={"photographerId"}
                required={true}
                options={photographers || []}
              />
              <AdminInput
                required={true}
                type={"date"}
                errorMessage={"Дата обязательное поле!"}
                inputHandler={inputHandler}
                inputValue={inputValue}
                title={"Дата"}
                name={"date"}
              />{" "}
              <AdminInput
                required={true}
                errorMessage={"Просмотры обязательное поле!"}
                inputHandler={inputHandler}
                inputValue={inputValue}
                title={"Просмотры"}
                name={"views"}
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

export default AdminPhoto;
