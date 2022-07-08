import React, { FC, useRef, useState } from "react";

import classes from "./DropFileInput.module.css";
import { ReactComponent as VideoIcon } from "../../../../assets/adminPage/addVideo.svg";
import { ReactComponent as PhotoIcon } from "../../../../assets/adminPage/addPic.svg";
import { AdminPageTypes } from "../../../../types/adminPage/adminPage";

interface DropFileInputProps {
  type: string;
  children: React.ReactNode;
  setInputValue: (prevInputs: any) => void;
  boxType?: string;
}

const boxTypes = ["logo", "poster"];
const DropFileInput: FC<DropFileInputProps> = ({
  children,
  type,
  setInputValue,
  boxType,
}) => {
  const [drag, setDrag] = useState(false);
  const [fileList, setFileList] = useState<File[] | null>([]);
  const checkBoxType = boxTypes && boxTypes.includes(boxType!) ? boxType : "";

  const onDragEnter = () => setDrag(true);
  const onDragLeave = () => setDrag(false);
  const onDrop = () => setDrag(false);

  const onDropFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFile = e.target.files[0];
    const fileType = newFile.type.split("/")[0];
    if (newFile) {
      const updatedFiles = [...(fileList as File[]), newFile];
      setFileList(updatedFiles);
      setInputValue((prev: AdminPageTypes) => ({
        ...prev,
        [type]: updatedFiles,
      }));
    }
  };

  const fileRemove = (file: File) => {
    const updatedFiles = [...(fileList as File[])];
    updatedFiles.splice((fileList as File[]).indexOf(file), 1);
    setFileList(updatedFiles);
    setInputValue((prev: AdminPageTypes) => ({
      ...prev,
      [type]: updatedFiles,
    }));
  };

  return (
    <div
      className={classes.dropFileInputWrapper}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <div
        className={classes.adminAddBlock}
        style={{ width: `${!type ? "90%" : "auto"}` }}
      >
        <div
          className={`${classes.adminAdd} ${
            (checkBoxType && classes[checkBoxType!]) || ""
          }`}
        >
          <i className={classes.icon}>
            {type == "video" ? <VideoIcon /> : <PhotoIcon />}
          </i>
          {drag ? (
            <span className={classes.adminAddTitle}>Отпустите файл</span>
          ) : (
            <span className={classes.adminAddTitle}>{children}</span>
          )}
        </div>
        <input type={"file"} onChange={(e) => onDropFile(e)} />
      </div>
      {fileList!?.length > 0 && (
        <ul className={classes.fileList}>
          {fileList!.map((file: File, index: number) => {
            return (
              <li key={index}>
                {file.name} <span onClick={() => fileRemove(file)}>✖</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropFileInput;
