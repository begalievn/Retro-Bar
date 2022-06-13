import React from 'react';

import classes from "./SearchBtn.module.css";
import {ReactComponent as SearchIcon} from "../../assets/Header/search.svg";

const SearchBtn = (props) => {
    return (
        <button className={[classes.searchBtn, props.className].join(' ')}>
            <SearchIcon width="15px" />
        </button>
    );
};

export default SearchBtn;