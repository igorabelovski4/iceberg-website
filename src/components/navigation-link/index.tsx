import { NavLink } from "react-router-dom";

import { UnstyledButton } from "@mantine/core";

interface INavigationLink {
  path: string;
  label: string;
}

const NavigationLink = ({ path, label }: INavigationLink) => {
  return (
    <UnstyledButton component={NavLink} to={path}>
      {label}
    </UnstyledButton>
  );
};

export default NavigationLink;
