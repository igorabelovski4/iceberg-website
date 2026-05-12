import clsx from "clsx";
import { IButton } from "@/types/common";
import { Button } from "@mantine/core";

import classes from "./index.module.css";
import { IconArrowNarrowRight } from "@tabler/icons-react";

const PrimaryButton = ({
  children,
  variant = "primary",
  icon,
  block,
  onClick,
}: IButton) => {
  return (
    <Button
      variant='filled'
      className={clsx(
        `${classes.button} ${classes[variant]} ${block ? classes.block : ""}`,
      )}
      {...(icon && { rightSection: <IconArrowNarrowRight /> })}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
