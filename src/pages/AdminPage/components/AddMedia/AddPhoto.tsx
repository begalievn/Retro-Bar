import React, { FC, useEffect, useState } from "react";
import classes from "../AdminGeneral/AdminGeneral.module.css";
import { ReactComponent as VideoIcon } from "../../../../assets/adminPage/addVideo.svg";
import { ReactComponent as PhotoIcon } from "../../../../assets/adminPage/addPic.svg";
import AdminInput from "../AdminInput/AdminInput";
import { IPageBody } from "../../../../types/adminPage/adminPage";
import set = Reflect.set;

interface AddMediaProps {
  page: IPageBody;
  inputValue: any;
  setInputValue: (prev: any) => void;
  currentPage: string;
}

const AddPhoto: FC<AddMediaProps> = ({
  page,
  inputValue,
  setInputValue,
  currentPage,
}) => {
  const [drag, setDrag] = useState(false);

  const [files, setFiles] = useState<any | null>([]);

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
    // TODO addSOmePhotos
    setFiles(targetFiles);
    setInputValue((prev: any) => ({ ...prev, [page.add]: targetFiles[0] }));

    console.log(targetFiles);
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
            <PhotoIcon />
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
            <PhotoIcon />
          </i>
          {files?.length == 1 ? (
            <span>{files[0].name}</span>
          ) : (
            <span className={classes.adminAddTitle}>Добавить картинки</span>
          )}
        </div>
      )}

      {files?.length > 1 && (
        <div>
          {files.map((file: File) => {
            return <div key={file.name}>{file.name}</div>;
          })}
        </div>
      )}
      {/*{files?.length && files.map((i: File) => <span>{i.name}</span>)}*/}
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

export default AddPhoto;
