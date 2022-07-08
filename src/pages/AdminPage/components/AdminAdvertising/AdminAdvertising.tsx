import React, { ReactHTML, useState } from "react";
import classes from "../../AdminPage.module.css";
import { Button } from "../../../../UI";
import {
  AdminPageTypes,
  Advertisement,
  PhotoCard,
} from "../../../../types/adminPage/adminPage";
import { useDispatch } from "react-redux";
import { AdminApi } from "../../../../API/adminApi/adminApi";
import {
  createAlert,
  deleteAlert,
} from "../../../../store/alertSlice/alertSlice";
import { AdminFields, AdminInput } from "../index";
import DropFileInput from "../DropFileInput/DropFileInput";
import { advertisementsAPI } from "../../../../store/features/advertisement/advertisementsQuery";
import { getFormData } from "../../../../utils/helpers/createFormData";
import { alertBodySuccess } from "../../../../utils/helpers/alertBody";
import { startTimer } from "../../../../utils/helpers/timer";
import { photoAPI } from "../../../../store/features/photos/photoQuery";

const fields = [
  {
    title: "Название",
    name: "establishmentName",
    errorMessage: "Название Вечеринки обязательное поле!",
    required: true,
  },
  {
    title: "Описание",
    name: "eventName",
    type: "textarea",
    errorMessage: "Название Вечеринки обязательное поле!",
    required: true,
  },
  {
    title: "Привязать номер",
    name: "randomName",
    errorMessage: "Название Вечеринки обязательное поле!",
    required: true,
  },
];

const AdminAdvertising = () => {
  const [inputValue, setInputValue] = useState<Advertisement>({});
  const [isPublished, setIsPublished] = useState<boolean>(false);
  const [createAd, { isSuccess }] =
    advertisementsAPI.useCreateAdvertisementsMutationMutation();
  const dispatch = useDispatch();

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.toString().includes("TextArea")) {
      e.target.style.height = e.target.scrollHeight + "px";
    }
    setInputValue((prevInputs: Advertisement) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  // const postHandler = (e: any) => {
  //   e.preventDefault()
  //   return setIsPublished(true)
  //   AdminApi.addPhoto(inputValue as PhotoCard)
  //     .then(() => {
  //       dispatch(
  //         createAlert({ message: "Успешно опубликовано", type: "success" })
  //       );
  //       setTimeout(() => dispatch(deleteAlert()), 2000);
  //     })
  //     .catch((e) => {
  //       dispatch(
  //         createAlert({ message: e.response.data.message, type: "error" })
  //       );
  //       setTimeout(() => dispatch(deleteAlert()), 2000);
  //     });
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formData } = getFormData(inputValue as Advertisement);
    await createAd(formData)
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
      {(!isSuccess && (
        <div className={classes.adminGeneralBlock}>
          <h3 className={classes.adminTitle}>Реклама</h3>
          <div className={classes.adminContent}>
            <DropFileInput
              required={true}
              type={"photo"}
              children={"Добавить картинки"}
              setInputValue={setInputValue}
            />
            <div className={classes.adminFields}>
              <div className={classes.adminInputs}>
                <AdminInput
                  required={true}
                  errorMessage={"Название обязательное поле!"}
                  inputHandler={inputHandler}
                  inputValue={inputValue}
                  title={"Название"}
                  name={"name"}
                />
                <AdminInput
                  required={true}
                  errorMessage={"Описание обязательное поле!"}
                  inputHandler={inputHandler}
                  inputValue={inputValue}
                  title={"Описание"}
                  name={"description"}
                />{" "}
                <AdminInput
                  required={true}
                  errorMessage={"Номер телефона обязательное поле!"}
                  inputHandler={inputHandler}
                  inputValue={inputValue}
                  title={"Номер телефона"}
                  name={"phoneNumber"}
                />
              </div>
            </div>
          </div>
          <div className={classes.buttonBlock}>
            <Button type={"submit"}>Опубликовать</Button>
          </div>
        </div>
      )) || <AdminAdvertising />}
    </form>
  );
};

export default AdminAdvertising;
