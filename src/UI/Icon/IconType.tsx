import React from "react";

import { ReactComponent as LogoIcon } from "../../assets/Header/logo.svg";
import { ReactComponent as Instagram } from "../../assets/Header/social/instagram.svg";
import { ReactComponent as Telegram } from "../../assets/Header/social/telegram.svg";
import { ReactComponent as Mail } from "../../assets/Header/social/mail.svg";
import { ReactComponent as Youtube } from "../../assets/Header/social/youtube.svg";

export type IconType = "LogoIcon";

const random = () => Math.floor(Math.random() * 100);

export const iconTypes = new Map([
  ["LogoIcon", <LogoIcon key={random()} />],
  ["Instagram", <Instagram key={random()} />],
  ["Telegram", <Telegram key={random()} />],
  ["Mail", <Mail key={random()} />],
  ["Youtube", <Youtube key={random()} />],
]);
