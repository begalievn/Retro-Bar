import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { establishmentsAPI } from "../../../../../../store/features/establishments/establishmentsQuery";
import { IEstablishment } from "../../../../../../types/apiTypes/establishment";
import LinkNavs from "../../components/LinkNavs";
import EstablishmentCards from "./components/EstablishmentCards";
import classes from "./style.module.css";
const EstablishmentEditPage = () => {
  const {
    data: establishments,
    error,
    isLoading,
    refetch,
  } = establishmentsAPI.useFetchAllEstablishmentsQuery("");
  const array: IEstablishment[] = establishments?.establishments;
  return (
    <>
        <LinkNavs />
      <div className={classes.cardDiv}>
        {array?.map((item: IEstablishment) => (
          <EstablishmentCards key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default EstablishmentEditPage;
