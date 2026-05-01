import clsx from "clsx";
import { IButton } from "@/types/common";
import { Button } from "@mantine/core";

import classes from "./index.module.css";
import { IconArrowNarrowRight } from "@tabler/icons-react";

const PrimaryButton = ({ children, variant = "primary", icon }: IButton) => {
  return (
    <Button
      variant='filled'
      className={clsx(classes.button, classes[variant])}
      {...(icon && { rightSection: <IconArrowNarrowRight /> })}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
