import React, { useEffect, useState } from "react";

import classes from "../../AdminPage.module.css";

import {
  AdminPageTypes,
  IField,
  VideoCard,
} from "../../../../types/adminPage/adminPage";
import { useDispatch } from "react-redux";
import {
  createAlert,
  deleteAlert,
} from "../../../../store/alertSlice/alertSlice";
import { Button } from "../../../../UI";
import DropFileInput from "../DropFileInput/DropFileInput";
import AdminInput from "../AdminInput/AdminInput";
import { videoAPI } from "../../../../store/features/videos/videoQuery";
import { getFormData } from "../../../../utils/helpers/createFormData";
import { alertBodySuccess } from "../../../../utils/helpers/alertBody";
import AdminSelect from "../AdminSelect/AdminSelect";
import { useAppSelector } from "../../../../app/hooks";
import { ReactComponent as LinkIcon } from "../../../../assets/adminPage/link.svg";
import { startTimer } from "../../../../utils/helpers/timer";
import Loader from "../../../../UI/Loader/Loader";
import { useLocation } from "react-router-dom";

const AdminVideo = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<VideoCard>({
    establishmentId: "",
    photographerId: "",
  });
  const [createVideoCard, { isLoading, isSuccess }] =
    videoAPI.useCreateVideoCardMutation();
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
    setInputValue((prevInputs: VideoCard) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formData } = getFormData(inputValue as VideoCard);

    await createVideoCard(formData)
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
        <h3 className={classes.adminTitle}>Видео</h3>
        <div className={classes.adminContent}>
          <div>
            <DropFileInput
              required={true}
              type={"video"}
              children={"Добавить превью для видео"}
              setInputValue={setInputValue}
            />
            <AdminInput
              color={"white"}
              icon={<LinkIcon />}
              required={true}
              errorMessage={"Вставьте ссылку на видео!"}
              inputHandler={inputHandler}
              inputValue={inputValue}
              title={"Вставить ссылку"}
              name={"url"}
            />
          </div>

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
                errorMessage={"Видеограф обязательное поле!"}
                inputHandler={inputHandler}
                title={"Видеограф"}
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
          <Button type="submit">Опубликовать</Button>
        </div>
      </div>
    </form>
  );
};

export default AdminVideo;
