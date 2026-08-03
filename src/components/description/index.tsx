import { IDescription } from "@/types/common";
import { Text } from "@mantine/core";

import classes from "./index.module.css";

const Description = ({
  children,
  variant = "dark",
  align = "center",
  margin = false,
}: IDescription) => {
  return (
    <Text
      className={`${classes.description} ${classes[variant]} ${classes[align]} ${margin ? classes.margin : ""}`}
    >
      {children}
    </Text>
  );
};

export default Description;
