import React, { FC } from "react";

import classes from "./DescriptionComponent.module.css";
import { IField, IPageBody } from "../../../../types/adminPage/adminPage";
import AdminInput from "../AdminInput/AdminInput";
import { Simulate } from "react-dom/test-utils";
import input = Simulate.input;

interface DescriptionComponentProps {
  descriptions: IField[];
  page: IPageBody;
  inputValue: any;
  setInputValue: (some: any) => void;
}

const DescriptionComponent: FC<DescriptionComponentProps> = ({
  descriptions,
  page,
  setInputValue,
  inputValue,
}) => {
  return (
    <div className={classes.descriptionBlock}>
      <h3>Описание</h3>

      {/*<div className={classes.descriptionList}>*/}
      {/*  {descriptions.map((description) => {*/}
      {/*    return (*/}
      {/*      <AdminInput*/}
      {/*        title={description.title}*/}
      {/*        name={description.name}*/}
      {/*        page={page}*/}
      {/*        inputValue={inputValue}*/}
      {/*        setInputValue={setInputValue}*/}
      {/*      />*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</div>*/}
    </div>
  );
};

export default DescriptionComponent;
