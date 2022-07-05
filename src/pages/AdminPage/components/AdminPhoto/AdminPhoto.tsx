import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import classes from "../../AdminPage.module.css";
import {
  AdminPageTypes,
  PhotoCard,
} from "../../../../types/adminPage/adminPage";
import { AdminApi } from "../../../../API/adminApi/adminApi";
import {
  createAlert,
  deleteAlert,
} from "../../../../store/alertSlice/alertSlice";
import { Button } from "../../../../UI";
import DropFileInput from "../DropFileInput/DropFileInput";
import AdminFields from "../AdminFields/AdminFields";
import useDebounce from "../../../../hooks/useDebounce";
import {$host} from "../../../../utils/helpers/host";
import {establishmentsAPI} from "../../../../store/features/establishments/establishmentsQuery";

const fields = [
  { title: "Название Заведения", name: "establishmentId" },
  { title: "Название Вечеринки", name: "eventName" },
  { title: "Фотограф", name: "photographerId" },
  { title: "Дата", name: "date" },
];

const AdminPhoto = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<AdminPageTypes | object>({});
  const {data } = establishmentsAPI.useF


  useEffect(() => {
    if ("establishmentId" in inputValue) {
      const debounceEstablishment = useDebounce(
          inputValue.establishmentId,
          500
      );
      const fetchData = async () => {
        const {data} = await $host.get()
      };
      if(debounceEstablishment!) fetchData()
    }
    if ("photographerId" in inputValue) {
      const debouncePhotographer = useDebounce(inputValue.photographerId, 500);
    }
  }, []);

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
    AdminApi.addPhoto(inputValue as PhotoCard)
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

  return (
    <div className={classes.generalBlock}>
      <div className={classes.adminGeneralBlock}>
        <h3 className={classes.adminTitle}>Фото</h3>
        <div className={classes.adminContent}>
          <DropFileInput
            type={"photos"}
            children={"Добавить картинки"}
            setInputValue={setInputValue}
          />
          <AdminFields
            fields={fields}
            inputHandler={inputHandler}
            inputValue={inputValue}
          />
        </div>
        <div className={classes.buttonBlock}>
          <Button onClick={postHandler}>Опубликовать</Button>
        </div>
      </div>
    </div>
  );
};

export default AdminPhoto;
