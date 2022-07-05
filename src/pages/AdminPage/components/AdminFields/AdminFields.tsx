import React, { FC } from "react";
import classes from "../AdminGeneral/AdminGeneral.module.css";
import AdminInput from "../AdminInput/AdminInput";
import { AdminPageTypes } from "../../../../types/adminPage/adminPage";
interface Fields {
  title: string;
  name: string;
  type?: string;
}

interface AdminFieldsProps {
  fields: Fields[];
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
            <AdminInput
              key={field.name}
              inputValue={inputValue}
              title={field.title}
              name={field.name}
              inputHandler={inputHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AdminFields;
