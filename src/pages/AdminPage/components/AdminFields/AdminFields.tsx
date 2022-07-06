import React, { FC } from "react";
import classes from "../../AdminPage.module.css";
import AdminInput from "../AdminInput/AdminInput";
import { AdminPageTypes, IField } from "../../../../types/adminPage/adminPage";
import AdminTextarea from "../AdminTextarea/AdminTextarea";

interface AdminFieldsProps {
  fields: IField[];
  inputValue: AdminPageTypes | object;
  searchList?: any;
  inputHandler?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const AdminFields: FC<AdminFieldsProps> = ({
  fields,
  inputHandler,
  inputValue,
  searchList,
}) => {
  return (
    <div className={classes.adminFields}>
      <div className={classes.adminInputs}>
        {fields.map((field, index) => {
          return (
            <>
              {field.type == "textarea" ? (
                <AdminTextarea
                  key={index}
                  errorMessage={field.errorMessage}
                  required={field.required}
                  title={field.title}
                  name={field.name}
                  inputHandler={inputHandler}
                />
              ) : (
                <AdminInput
                  searchList={searchList}
                  search={field.search}
                  key={index}
                  pattern={field.pattern}
                  required={field.required}
                  type={field.type}
                  errorMessage={field.errorMessage}
                  inputValue={inputValue}
                  title={field.title}
                  name={field.name}
                  inputHandler={inputHandler}
                />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AdminFields;
