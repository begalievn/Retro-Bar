import React, { FC, useEffect, useState } from "react";

import classes from "./AdminEstablishment.module.css";
import styles from "../../AdminPage.module.css";
import { Establishment } from "../../../../types/adminPage/adminPage";
import AdminInput from "../AdminInput/AdminInput";
import { useDispatch } from "react-redux";
import {
  createAlert,
  deleteAlert,
} from "../../../../store/alertSlice/alertSlice";
import { Button } from "../../../../UI";
import DropFileInput from "../DropFileInput/DropFileInput";
import { establishmentsAPI } from "../../../../store/features/establishments/establishmentsQuery";
import { alertBodySuccess } from "../../../../utils/helpers/alertBody";
import { getFormData } from "../../../../utils/helpers/createFormData";
import AdminTextarea from "../AdminTextarea/AdminTextarea";
import { ReactComponent as LinkIcon } from "../../../../assets/adminPage/link.svg";
import { ReactComponent as PlusIcon } from "../../../../assets/adminPage/plusIcon.svg";
import { startTimer } from "../../../../utils/helpers/timer";
import Loader from "../../../../UI/Loader/Loader";
import AdminSelect from "../AdminSelect/AdminSelect";
import { useAppSelector } from "../../../../app/hooks";

const AdminEstablishment = () => {
  const [inputValue, setInputValue] = useState<Establishment>({});
  const dispatch = useDispatch();
  let categories = useAppSelector((state) => state.categories.value);

  const [createEstablishmentCard, { isLoading, isSuccess }] =
    establishmentsAPI.useCreateEstablishmentCardMutation();

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
    setInputValue((prevInputs: Establishment) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formData } = getFormData(inputValue as Establishment);
    await createEstablishmentCard(formData)
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
    <form className={classes.establishmentBlock} onSubmit={handleSubmit}>
      <div className={styles.adminGeneralBlock}>
        <h3 className={styles.adminTitle}>??????????????????</h3>
        <div className={styles.adminContent}>
          <div className={classes.adminContentMediaBlocks}>
            <DropFileInput
              boxType={"logo"}
              type={"logo"}
              children={"??????????????"}
              setInputValue={setInputValue}
            />
            <DropFileInput
              type={"photos"}
              children={"???????????????? ????????????????"}
              setInputValue={setInputValue}
            />
          </div>

          <div className={classes.adminFields}>
            <div className={classes.adminInputs}>
              <AdminInput
                required={true}
                errorMessage={"???????????????? ?????????????????? ???????????????????????? ????????!"}
                inputHandler={inputHandler}
                inputValue={inputValue}
                title={"???????????????? ??????????????????"}
                name={"name"}
              />
              <AdminTextarea
                required={true}
                errorMessage={"???????????????? ???????????????????????? ????????!"}
                inputHandler={inputHandler}
                name={"description"}
                title={"????????????????"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={classes.descriptionWrapper}>
        <h3>????????????????</h3>
        <div className={classes.descriptionBlocks}>
          <div className={classes.descriptionBlock}>
            <AdminInput
              required={true}
              errorMessage={"?????????? ???????????? ???????????????????????? ????????!"}
              inputHandler={inputHandler}
              color={"white"}
              title={"?????????? ????????????"}
              name={"workingHours"}
              inputValue={inputValue}
            />
          </div>
          <div className={classes.descriptionBlock}>
            <AdminInput
              required={true}
              errorMessage={"???????????? ???????????????????????? ????????!"}
              inputHandler={inputHandler}
              color={"white"}
              title={"????????????"}
              name={"services"}
              inputValue={inputValue}
            />
          </div>
          <div className={classes.descriptionBlock}>
            <AdminInput
              required={true}
              errorMessage={"?????? ?????????? ???????????????????????? ????????!"}
              inputHandler={inputHandler}
              color={"white"}
              title={"?????? ??????????"}
              name={"kitchenType"}
              inputValue={inputValue}
            />
          </div>
          <div className={classes.descriptionBlock}>
            <AdminSelect
              options={categories || []}
              required={true}
              errorMessage={"?????????????????? ???????????????????????? ????????!"}
              inputHandler={inputHandler}
              color={"white"}
              title={"??????????????????"}
              name={"category"}
            />
          </div>
          <div className={classes.descriptionBlock}>
            <AdminInput
              required={true}
              errorMessage={"?????????????? ???????????????????????? ????????!"}
              inputHandler={inputHandler}
              color={"white"}
              title={"??????????????"}
              name={"rate"}
              inputValue={inputValue}
            />
          </div>
        </div>
      </div>

      <div className={classes.contactsWrapper}>
        <h3>????????????????</h3>
        <div className={classes.contacts}>
          <AdminInput
            required={true}
            icon={<LinkIcon />}
            errorMessage={"???????????????? ????????????!"}
            inputHandler={inputHandler}
            color={"white"}
            title={"???????????????? ????????????"}
            name={"link"}
            inputValue={inputValue}
          />
        </div>{" "}
        <div className={classes.contacts}>
          <AdminInput
            icon={<PlusIcon />}
            required={true}
            errorMessage={"????????????????????"}
            inputHandler={inputHandler}
            color={"white"}
            title={"????????????????????"}
            name={"location"}
            inputValue={inputValue}
          />
        </div>
        <div className={classes.contacts}>
          <AdminInput
            required={true}
            icon={<PlusIcon />}
            errorMessage={"?????????? ???????????????????????? ????????!"}
            inputHandler={inputHandler}
            color={"white"}
            title={"??????????"}
            type={"tel"}
            name={"contacts"}
            inputValue={inputValue}
          />
        </div>
      </div>
      <div className={classes.btnBlock}>
        <Button type={"submit"}>????????????????????????</Button>
      </div>
    </form>
  );
};

export default AdminEstablishment;
