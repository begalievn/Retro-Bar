import React, { FC, useEffect, useState } from "react";
import classes from "../AdminGeneral/AdminGeneral.module.css";
import { ReactComponent as VideoIcon } from "../../../../assets/adminPage/addVideo.svg";
import { ReactComponent as PhotoIcon } from "../../../../assets/adminPage/addPic.svg";
import AdminInput from "../AdminInput/AdminInput";
import { IPageBody } from "../../../../types/adminPage/adminPage";

interface AddMediaProps {
  page: IPageBody;
  inputValue: any;
  setInputValue: (prev: any) => void;
  currentPage: string;
}
const AddVideo: FC<AddMediaProps> = ({
  page,
  inputValue,
  setInputValue,
  currentPage,
}) => {
  const [drag, setDrag] = useState(false);
  const [files, setFiles] = useState<any | null>(null);

  useEffect(() => {
    return () => setFiles(null);
  }, [currentPage]);

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
    let targetFiles = [...e.dataTransfer.files];
    setFiles(targetFiles[0]);
    setInputValue((prev: any) => ({ ...prev, [page.add]: targetFiles[0] }));
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
            <VideoIcon />
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
            <VideoIcon />
          </i>
          {files ? (
            <span>{files.name}</span>
          ) : (
            <span className={classes.adminAddTitle}>Добавить видео</span>
          )}
        </div>
      )}
      {page.addLink && (
        <AdminInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          page={page!}
          title="Вставить ссылку"
          name="video"
        />
      )}
    </div>
  );
};

export default AddVideo;
