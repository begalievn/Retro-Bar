import React, { FC } from "react";

import classes from "./AlertSuccess.module.css";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { AlertBody } from "../../types/adminPage/adminPage";

interface AlertSuccessProps {
  alertBody: AlertBody;
}

const AlertSuccess: FC<AlertSuccessProps> = ({ alertBody }) => {
  return (
    <div className={`${classes.alertBlock} ${classes.activeAlert}`}>
      <Alert severity={"error" || alertBody.type} className={classes.alert}>
        <AlertTitle>{alertBody?.message}</AlertTitle>
      </Alert>
    </div>
  );
};

export default AlertSuccess;