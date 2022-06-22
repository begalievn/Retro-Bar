import React from 'react';
import style from "../AdminPage.module.css";
const AddPhoto = () => {
  return (
    <div className={style.content_block}>
      <h3>Фото</h3>
      <div>
        <div>  
            <div className={style.content_image} >  </div>
        </div>  
        <div></div>
      </div>
    </div>
  );
};

export default AddPhoto;