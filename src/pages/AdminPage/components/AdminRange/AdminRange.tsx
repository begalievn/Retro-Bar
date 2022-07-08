import React, { FC } from "react";
import { Slider } from "@mui/material";
import "./AdminRange.css";
import classes from "./AdminRange.module.css";

interface AdminRangeProps {
  setInputValue: (some: any) => void;
  inputValue: any;
}

const AdminRange: FC<AdminRangeProps> = ({ setInputValue, inputValue }) => {
  const marks = [
    {
      value: 1,
      label: "1x",
    },
    {
      value: 2,
      label: "2x",
    },
    {
      value: 3,
      label: "3x",
    },
  ];
  function valuetext(value: number) {
    return `${value}x`;
  }
  function valueLabelFormat(value: number) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }
  const handleChange = (value: number | number[]) => {
    setInputValue({ ...inputValue, incViews: value });
  };

  return (
    <div className={classes.range}>
      <h4>Просмотры</h4>
      <Slider
        onChange={(e, val) => handleChange(val)}
        aria-label="Custom marks"
        getAriaValueText={valuetext}
        valueLabelFormat={valueLabelFormat}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        min={1}
        max={3}
      />
    </div>
  );
};

export default AdminRange;
