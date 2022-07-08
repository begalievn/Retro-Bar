import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import classes from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={classes.loader}>
      <Box sx={{ display: "flex" }} color={"orange"}>
        <CircularProgress color={"inherit"} />
      </Box>
    </div>
  );
}
