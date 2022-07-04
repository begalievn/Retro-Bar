import React, { FC, useEffect, useState } from "react";
import classes from "../AdminGeneral/AdminGeneral.module.css";
import { ReactComponent as VideoIcon } from "../../../../assets/adminPage/addVideo.svg";
import { ReactComponent as PhotoIcon } from "../../../../assets/adminPage/addPic.svg";
import AdminInput from "../AdminInput/AdminInput";
import { IPageBody } from "../../../../types/adminPage/adminPage";
import set = Reflect.set;
import { useLocation } from "react-router-dom";
import { blob } from "stream/consumers";

interface AddMediaProps {
  page: IPageBody;
  inputValue: any;
  setInputValue: (prev: any) => void;
  children: React.ReactNode;
  inputHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const AddMedia: FC<AddMediaProps> = ({
  page,
  inputValue,
  setInputValue,
  children,
  inputHandler,
}) => {
  const [drag, setDrag] = useState(false);
  const [fileList, setFileList] = useState<any | null>([]);

  const onDragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(true);
  };
  const onDragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(false);
  };
  const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    let newFile = e.dataTransfer.files[0];
    if (newFile) {
      const updatedFiles = [...fileList, newFile];
      setFileList(updatedFiles);
      setInputValue((prev: any) => ({ ...prev, [page.add]: updatedFiles }));
    }
    setDrag(false);
  };

  return (
    <div
      className={classes.adminAddBlock}
      style={{ width: `${!page?.add ? "90%" : "auto"}` }}
    >
      {drag ? (
        <div
          onDragStart={(e) => onDragStartHandler(e)}
          onDragLeave={(e) => onDragLeaveHandler(e)}
          onDragOver={(e) => onDragStartHandler(e)}
          onDrop={(e) => onDropHandler(e)}
          className={`${classes.adminAdd} ${!page?.add && classes.adminAddRow}`}
        >
          <i className={classes.icon}>
            {page.add === "video" ? <VideoIcon /> : <PhotoIcon />}
          </i>
          <span className={classes.adminAddTitle}>Отпустите файл</span>
        </div>
      ) : (
        <div
          onDragStart={(e) => onDragStartHandler(e)}
          onDragLeave={(e) => onDragLeaveHandler(e)}
          onDragOver={(e) => onDragStartHandler(e)}
          onDrop={(e) => onDropHandler(e)}
          className={`${classes.adminAdd} ${!page?.add && classes.adminAddRow}`}
        >
          <i className={classes.icon}>
            {page.add === "video" ? <VideoIcon /> : <PhotoIcon />}
          </i>
          {fileList?.length == 1 ? (
            <span>{fileList[0].name}</span>
          ) : (
            <span className={classes.adminAddTitle}>{children}</span>
          )}
        </div>
      )}

      {fileList?.length > 1 && (
        <div className={classes.fileList}>
          {fileList.map((file: File, index: number) => {
            return <p key={index}>{file.name}</p>;
          })}
        </div>
      )}
      {/*{fileList?.length && fileList.map((i: File) => <span>{i.name}</span>)}*/}
      {page.addLink && (
        <AdminInput
          inputHandler={inputHandler}
          inputValue={inputValue}
          setInputValue={setInputValue}
          page={page!}
          title="Вставить ссылку"
          name="link"
        />
      )}
    </div>
  );
};

export default AddMedia;
