import React, { ReactHTML, useEffect, useState } from "react";
import classes from "../../AdminPage.module.css";
import { Button } from "../../../../UI";
import { Advertisement } from "../../../../types/adminPage/adminPage";
import { useDispatch } from "react-redux";
import {
  createAlert,
  deleteAlert,
} from "../../../../store/alertSlice/alertSlice";
import { AdminInput, AdminPoster } from "../index";
import DropFileInput from "../DropFileInput/DropFileInput";
import { advertisementsAPI } from "../../../../store/features/advertisement/advertisementsQuery";
import { getFormData } from "../../../../utils/helpers/createFormData";
import { alertBodySuccess } from "../../../../utils/helpers/alertBody";
import { startTimer } from "../../../../utils/helpers/timer";
import Loader from "../../../../UI/Loader/Loader";

const AdminAdvertising = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<Advertisement>({});
  const [createAd, { isSuccess, isLoading }] =
    advertisementsAPI.useCreateAdvertisementsMutationMutation();

  useEffect(() => {
    setInputValue({});
  }, [isSuccess]);

  if (isLoading) {
    return <Loader />;
  }
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
    <>
      {isSuccess ? (
        <form className={classes.generalBlock} onSubmit={handleSubmit}>
          <div className={classes.adminGeneralBlock}>
            <h3 className={`${classes.adminTitle} ${classes.adminTitleAd}`}>
              <span className={classes.active}>Реклама</span>/<span>Афиша</span>
            </h3>
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
                  />
                  <AdminInput
                    required={true}
                    errorMessage={"Номер телефона обязательное поле!"}
                    inputHandler={inputHandler}
                    inputValue={inputValue}
                    type={"tel"}
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
        </form>
      ) : (
        <AdminPoster />
      )}
    </>
  );
};

export default AdminAdvertising;
