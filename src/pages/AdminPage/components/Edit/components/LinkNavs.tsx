import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import classes from '../pages/PhotoEdit/style.module.css'
const LinkNavs = () => {
  return (
    <div style={{textAlign:'center'}}>
      <Link to="/admin/edit">
        <Button className={classes.btnNav} variant="contained" color="success">
          Photo
        </Button>
      </Link>
      <Link to="/admin/edit/video">
        <Button className={classes.btnNav} variant="contained" color="success">
          Video
        </Button>
      </Link>
      <Link to="/admin/edit/establishment">
        <Button className={classes.btnNav} variant="contained">
          Establishment
        </Button>
      </Link>
      <Link to="/admin/edit/contacts">
        <Button className={classes.btnNav} variant="contained">
          Contacts
        </Button>
      </Link>
    </div>
  );
};

export default LinkNavs;
