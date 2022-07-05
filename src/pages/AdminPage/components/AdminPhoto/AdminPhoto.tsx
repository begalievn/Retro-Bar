import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import classes from "../../AdminPage.module.css";
import {
  AdminPageTypes,
  IField,
  PhotoCard,
} from "../../../../types/adminPage/adminPage";
import { AdminApi } from "../../../../API/adminApi/adminApi";
import {
  createAlert,
  deleteAlert,
} from "../../../../store/alertSlice/alertSlice";
import { AlertComponent, Button } from "../../../../UI";
import DropFileInput from "../DropFileInput/DropFileInput";
import AdminFields from "../AdminFields/AdminFields";
import useDebounce from "../../../../hooks/useDebounce";
import { $host } from "../../../../utils/helpers/host";
import { establishmentsAPI } from "../../../../store/features/establishments/establishmentsQuery";
import { photoAPI } from "../../../../store/features/photos/photoQuery";
import { getFormData } from "../../../../utils/helpers/createFormData";

const fields: IField[] = [
  {
    title: "Название Заведения",
    name: "establishmentId",
    errorMessage: "Название Заведения обязательное поле!",
    required: true,
  },
  {
    title: "Название Вечеринки",
    name: "eventName",
    errorMessage: "Название Вечеринки обязательное поле!",
    required: true,
  },
  {
    title: "Фотограф",
    name: "photographerId",
    errorMessage: "Фотограф обязательное поле!",
    required: true,
  },
  {
    title: "Дата",
    name: "date",
    errorMessage: "Дата обязательное поле!",
    type: "date",
    required: true,
  },
];

const AdminPhoto = () => {
  const dispatch = useDispatch();
  const [createPhotoCard, {}] = photoAPI.useCreatePhotoCardMutation();
  const [inputValue, setInputValue] = useState<PhotoCard>({
    establishmentId: "",
    photographerId: "",
  });
  const debounceEstablishment = useDebounce(inputValue?.establishmentId, 1000);
  const { data, isLoading, error } =
    establishmentsAPI.useFetchAllEstablishmentsQuery(
      `${debounceEstablishment}`
    );

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.toString().includes("TextArea")) {
      e.target.style.height = e.target.scrollHeight + "px";
    }
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const postHandler = async () => {
    const { formData } = getFormData(inputValue as PhotoCard);

    const data = await createPhotoCard(formData);

    console.log(data);
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
      {/*<AlertComponent alertBody={error} />*/}
    </div>
  );
};

export default AdminPhoto;
