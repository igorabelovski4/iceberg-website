import { IButton } from "@/types/common";
import { Button } from "@mantine/core";

import classes from "./index.module.css";

const PrimaryButton = ({ children, icon }: IButton) => {
  return (
    <Button
      variant='filled'
      className={classes.button}
      {...(icon && { rightSection: icon })}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
