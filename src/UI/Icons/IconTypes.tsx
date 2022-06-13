import * as React from 'react';

import { ReactComponent as LogoIcon } from "../../assets/Header/logo.svg";

export type IconType = "LogoIcon";

export const iconTypes = new Map([
  ["ArrowDown", <LogoIcon key={new Date()} />],
]);
