import React, { FC } from "react";
import classes from "../../AdminPage.module.css";
import AdminInput from "../AdminInput/AdminInput";
import { AdminPageTypes, IField } from "../../../../types/adminPage/adminPage";
import AdminTextarea from "../AdminTextarea/AdminTextarea";

interface AdminFieldsProps {
  fields: IField[];
  inputValue: AdminPageTypes | object;
  inputHandler?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const AdminFields: FC<AdminFieldsProps> = ({
  fields,
  inputHandler,
  inputValue,
}) => {
  return (
    <div className={classes.adminFields}>
      <div className={classes.adminInputs}>
        {fields.map((field) => {
          return (
            <>
              {field.type == "textarea" ? (
                <AdminTextarea
                  title={field.title}
                  name={field.name}
                  inputHandler={inputHandler}
                />
              ) : (
                <AdminInput
                  pattern={field.pattern}
                  required={field.required}
                  key={field.name}
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
