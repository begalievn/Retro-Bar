import React, { FC } from "react";

import classes from "./AdminEstablishment.module.css";
import AdminGeneral from "../AdminGeneral/AdminGeneral";
import DescriptionComponent from "../DescriptionComponent/DescriptionComponent";
import { IPageBody } from "../../../../types/adminPage/adminPage";
import ContactsComponent from "../ContactsComponent/ContactsComponent";
import AdminInput from "../AdminInput/AdminInput";

interface EstablishmentProps {
  page?: IPageBody;
  postHandler: () => void;
  inputValue: any;
  setInputValue: (some: any) => void;
  currentPage: string;
  setCurrent: (some: any) => void;
}
const AdminEstablishment: FC<EstablishmentProps> = ({
  page,
  setInputValue,
  inputValue,
  setCurrent,
  currentPage,
  postHandler,
}) => {
  return (
    <div className={classes.establishmentBlock}>
      <AdminGeneral
        postHandler={postHandler}
        currentPage={currentPage}
        page={page}
        setInputValue={setInputValue}
        inputValue={inputValue}
        setCurrent={setCurrent}
      />
      <div className={classes.descriptionWrapper}>
        <h3>Описание</h3>
        <div className={classes.descriptionBlocks}>
          <div className={classes.descriptionBlock}>
            <AdminInput
              color={"white"}
              title={"Время работы"}
              name={"workingHours"}
              page={page!}
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
            {/*<AdminInput*/}
            {/*    title={"Время работы"}*/}
            {/*    name={'workingHours'}*/}
            {/*  page={page!}*/}
            {/*  inputValue={inputValue}*/}
            {/*  setInputValue={setInputValue}*/}
            {/*/>*/}
          </div>
          <div className={classes.descriptionBlock}>
            <AdminInput
              color={"white"}
              title={"Номер"}
              name={"contacts"}
              page={page!}
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          </div>
        </div>
      </div>

      <div className={classes.contactsWrapper}>
        <h3>Контакты</h3>
        <div className={classes.contacts}>
          <AdminInput
            color={"white"}
            title={"Номер"}
            name={"contacts"}
            page={page!}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </div>
      </div>

      <ContactsComponent />
    </div>
  );
};

export default AdminEstablishment;
