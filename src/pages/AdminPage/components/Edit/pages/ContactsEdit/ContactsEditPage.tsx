import React from "react";
import { contactsAPI } from "../../../../../../store/features/contacts/contactsQuery";
import { IContacts } from "../../../../../../types/apiTypes/contacts";
import Loader from "../../../../../../UI/Loader/Loader";
import LinkNavs from "../../components/LinkNavs";
import ContactsCard from "./components/ContactsCard";
import classes from "./style.module.css";
const ContactsEditPage = () => {
  const {
    data: contacts,
    error,
    isLoading,
    refetch,
  } = contactsAPI.useFetchAllContactsQuery("");
  const array: IContacts[] = contacts?.contacts;
  return (
    <>
      <LinkNavs />
      <div className={classes.cardDiv}>
        {isLoading && <Loader/>}
        {array?.map((item: IContacts) => (
          <ContactsCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default ContactsEditPage;
