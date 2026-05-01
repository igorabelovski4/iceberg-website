import { NavLink, useLocation } from "react-router-dom";
import { INavigationLink } from "@/types/common";
import { UnstyledButton } from "@mantine/core";

import classes from "./index.module.css";

const NavigationLink = ({ path, label, highlight }: INavigationLink) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <UnstyledButton
      component={NavLink}
      to={path}
      className={`${classes.link} ${highlight ? classes.highlight : ""} ${isActive ? classes.active : ""}`}
    >
      {label}
    </UnstyledButton>
  );
};

export default NavigationLink;
