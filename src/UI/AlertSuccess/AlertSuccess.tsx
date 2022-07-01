import React, { FC } from "react";

import classes from "./AlertSuccess.module.css";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { AlertBody } from "../../types/adminPage/adminPage";

interface AlertSuccessProps {
  alertBody: AlertBody;
}

const AlertComponent: FC<AlertSuccessProps> = ({ alertBody }) => {
  return (
    <div className={`${classes.alertBlock}`}>
      <Alert
        severity={alertBody.type == "success" ? "success" : "error"}
        className={classes.alert}
      >
        <AlertTitle>{alertBody?.message}</AlertTitle>
      </Alert>
    </div>
  );
};

export default AlertComponent;
