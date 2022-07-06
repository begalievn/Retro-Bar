import React, { FC } from "react";

import classes from "./SearchList.module.css";

interface SearchListProps {
  searchList: any;
}

const SearchList: FC<SearchListProps> = ({ searchList }) => {
  return (
    <div>
      <ul>
        {searchList.map((listItem: any) => {
          return <li>{listItem.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchList;
