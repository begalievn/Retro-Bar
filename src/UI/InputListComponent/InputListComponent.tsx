import React, { FC } from "react";

import classes from "./InputListComponent.module.css";

interface InputListComponentProps {
  list: any;
}

const InputListComponent: FC<InputListComponentProps> = ({ list }) => {
  return (
    <div className={classes.InputList}>
      <ul>
        {list.map((item: any) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default InputListComponent;
