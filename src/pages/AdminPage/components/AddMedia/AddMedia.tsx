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

const AddMedia: FC<AddMediaProps> = ({
  page,
  inputValue,
  setInputValue,
  currentPage,
}) => {
  const [drag, setDrag] = useState(false);
  const [defaultFiles, setDefaultFiles] = useState<any | null>(null);

  useEffect(() => {
    return () => setDefaultFiles(null);
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
    let files = [...e.dataTransfer.files];
    let file = files || files[0];
    setDefaultFiles(file);
    setInputValue((prev: any) => ({ ...prev, [page.add]: file }));
    setDrag(false);
  };
  console.log(file);
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
            {page?.add == "video" ? <VideoIcon /> : <PhotoIcon />}
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
            {page?.add == "video" ? <VideoIcon /> : <PhotoIcon />}
          </i>
          {file ? (
            <span>{file.name ? file.name : file}</span>
          ) : (
            <span className={classes.adminAddTitle}>
              {page?.add == "video" ? "Добавить видео" : "Добавить картинки"}
            </span>
          )}
        </div>
      )}
      {page.addLink && (
        <AdminInput
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
