import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import classes from "../../AdminPage.module.css";
import { IField, PhotoCard } from "../../../../types/adminPage/adminPage";
import { Button } from "../../../../UI";
import DropFileInput from "../DropFileInput/DropFileInput";
import AdminFields from "../AdminFields/AdminFields";
import useDebounce from "../../../../hooks/useDebounce";
import { establishmentsAPI } from "../../../../store/features/establishments/establishmentsQuery";
import { photoAPI } from "../../../../store/features/photos/photoQuery";
import { getFormData } from "../../../../utils/helpers/createFormData";
import {
  createAlert,
  deleteAlert,
} from "../../../../store/alertSlice/alertSlice";
import { alertBodySuccess } from "../../../../utils/helpers/alertBody";
import { AdminInput } from "../index";
import { photographersAPI } from "../../../../store/features/photographers/photographersQuery";
import AdminSelect from "../../AdminSelect/AdminSelect";

const fields: IField[] = [
  {
    title: "Название Заведения",
    name: "establishmentId",
    errorMessage: "Название Заведения обязательное поле!",
    required: true,
    search: true,
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
    search: true,
  },
  {
    title: "Дата",
    name: "date",
    errorMessage: "Дата обязательное поле!",
    type: "date",
    required: true,
    pattern: "\\d{4}-\\d{2}-\\d{2}",
  },
  {
    title: "Посмотры",
    name: "views",
    errorMessage: "Посмотры обязательное поле!",
    type: "text",
    required: true,
  },
];

const AdminPhoto = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<PhotoCard>({
    establishmentId: "",
    photographerId: "",
  });

  const [createPhotoCard, {}] = photoAPI.useCreatePhotoCardMutation();
  const { data: establishmentsData = [], isLoading: isEstablishmentsLoading } =
    establishmentsAPI.useFetchAllEstablishmentsQuery("");

  const { data: photographersData = [], isLoading: isPhotographersLoading } =
    photographersAPI.useFetchAllPhotographersQuery("");

  // const debounceEstablishment = useDebounce(inputValue?.establishmentId, 400);
  // const debouncePhotographers = useDebounce(inputValue?.photographerId, 400);

  // const [fetchEstablishment, { data: establishmentsData = [] }] =
  //   establishmentsAPI.useLazyFetchAllEstablishmentsQuery();
  //
  // const [fetchPhotographers, { data: photographersData = [] }] =
  //   photographersAPI.useLazyFetchAllPhotographersQuery();

  // useEffect(() => {
  //   if (inputValue.establishmentId.length > 0) {
  //     fetchEstablishment(debounceEstablishment);
  //   } else {
  //     fetchEstablishment(null);
  //   }
  //   if (inputValue.photographerId.length > 0) {
  //     fetchPhotographers(debouncePhotographers);
  //   } else {
  //     fetchPhotographers();
  //   }
  // }, [debounceEstablishment, debouncePhotographers]);

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
    let timer: () => void;

    const startTimer = () => {
      //@ts-ignore
      clearTimeout(timer);
      //@ts-ignore
      timer = setTimeout(() => dispatch(deleteAlert()), 1500);
    };
    await createPhotoCard(formData)
      .unwrap()
      .then(() => {
        dispatch(createAlert(alertBodySuccess));
        startTimer();
      })
      .catch((e) => {
        dispatch(createAlert({ message: e.data.message, type: "error" }));
        startTimer();
      });
  };
  console.log(inputValue);
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
                inputValue={inputValue}
                title={"Название Заведения"}
                name={"establishmentId"}
                required={true}
                options={
                  isEstablishmentsLoading
                    ? []
                    : establishmentsData.establishments
                }
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
                inputValue={inputValue}
                title={"Фотограф"}
                name={"photographerId"}
                required={true}
                options={
                  isPhotographersLoading ? [] : photographersData.photographers
                }
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
