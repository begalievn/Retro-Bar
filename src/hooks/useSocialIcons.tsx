import React from 'react';



import {ReactComponent as TelegramIcon} from "../assets/icons/Footer/telegram.svg";
import {ReactComponent as InstagramIcon} from "../assets/icons/Footer/instagram.svg";
import {ReactComponent as YoutubeIcon} from "../assets/icons/Footer/youtube.svg";
import {ReactComponent as WhatsAppIcon} from "../assets/icons/Footer/whatsapp.svg";
import {contactsAPI} from "../store/features/contacts/contactsQuery";
import {getPhoneNumber} from "../utils/helpers/phoneNumberHalper";

export const UseSocialIcons = () => {
    const {
        data: contacts,
        isLoading,
        isSuccess,
    } = contactsAPI.useFetchAllContactsQuery('');

    const number = isSuccess && getPhoneNumber(contacts?.contacts[0].phoneNumber)

  const social = [
        {
            icon: <TelegramIcon/>,
            path: `https://t.me/${contacts?.contacts[0].telegram}`,
        },
        {
            icon: <InstagramIcon/>,
            path: `https://www.instagram.com/${contacts?.contacts[0].instagram}`,
        },
        {
            icon: <YoutubeIcon/>,
            path: `https://www.youtube.com/results?search_query=${contacts?.contacts[0].youtube}`,
        },
        {
            icon: <WhatsAppIcon/>,
            path: `https://api.whatsapp.com/send/?phone=996${number}`,
        },
    ];

    return social

};

