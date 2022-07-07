import React, { FC } from "react";

import classes from "./SearchList.module.css";
import { ListItem, ListItemText, ListItemButton } from "@mui/material";

interface SearchListProps {
  searchList: any;
}

const SearchList: FC<SearchListProps> = ({ searchList }) => {
  return (
    <div className={classes.searchBlock}>
      <ul>
        {searchList.map((listItem: any, index: number) => {
          return (
            <ListItem key={index} component="div" disablePadding>
              <ListItemButton>
                <ListItemText primary={listItem.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchList;
