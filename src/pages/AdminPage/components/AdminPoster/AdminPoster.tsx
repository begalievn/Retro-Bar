import React, { FC, useState } from "react";
import classes from "../../AdminPage.module.css";
import DropFileInput from "../DropFileInput/DropFileInput";
import { AdminInput } from "../index";
import { Button } from "../../../../UI";
import { Advertisement } from "../../../../types/adminPage/adminPage";
import { advertisementsAPI } from "../../../../store/features/advertisement/advertisementsQuery";
import { useDispatch } from "react-redux";
import { getFormData } from "../../../../utils/helpers/createFormData";
import { ReactComponent as LinkIcon } from "../../../../assets/adminPage/link.svg";
import {
  createAlert,
  deleteAlert,
} from "../../../../store/alertSlice/alertSlice";
import { alertBodySuccess } from "../../../../utils/helpers/alertBody";
import { startTimer } from "../../../../utils/helpers/timer";
import { posterAPI } from "../../../../store/features/poster/posterQuery";
import Loader from "../../../../UI/Loader/Loader";

interface AdminPosterProps {
  // isSuccess?: boolean;
}

const AdminPoster: FC<AdminPosterProps> = ({}) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<Advertisement>({});
  const [createPoster, { isSuccess,isLoading }] =
    posterAPI.useCreatePosterMutationMutation();
  if (isLoading) {
    return <Loader />;
  }
  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.toString().includes("TextArea")) {
      e.target.style.height = e.target.scrollHeight + "px";
    }
    setInputValue((prevInputs: Advertisement) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formData } = getFormData(inputValue as Advertisement);
    await createPoster(formData)
      .unwrap()
      .then(() => {
        dispatch(createAlert(alertBodySuccess));
        startTimer(dispatch, deleteAlert);
      })
      .catch((e) => {
        dispatch(createAlert({ message: e.data.message, type: "error" }));
        startTimer(dispatch, deleteAlert);
      });

    isSuccess && setInputValue({});
  };

  return (
    <form className={classes.generalBlock} onSubmit={handleSubmit}>
      <div className={classes.adminGeneralBlock}>
        <h3 className={classes.adminTitle}>
          <span>Реклама</span>/<span className={classes.active}>Афиша</span>
        </h3>
        <div className={`${classes.adminContent} ${classes.bannerContent}`}>
          <DropFileInput
            required={true}
            boxType={"poster"}
            type={"banner"}
            children={"Добавить Баннер"}
            setInputValue={setInputValue}
          />
          <div className={`${classes.adminFields} ${classes.bannerField}`}>
            <div className={classes.adminInputs}>
              <AdminInput
                color={"white"}
                icon={<LinkIcon />}
                required={false}
                errorMessage={""}
                inputHandler={inputHandler}
                inputValue={inputValue}
                title={"Вставить ссылку"}
                name={"link"}
              />
            </div>
          </div>
        </div>
        <div className={classes.buttonBlock}>
          <Button type={"submit"}>Опубликовать</Button>
        </div>
      </div>
    </form>
  );
};

export default AdminPoster;
