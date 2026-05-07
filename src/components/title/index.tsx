import { Text } from "@mantine/core";
import { ITitle } from "@/types/common";

import classes from "./index.module.css";

const Title = ({
  children,
  variant = "dark",
  margin = true,
  big = false,
}: ITitle) => {
  return (
    <Text
      className={`${classes.title} ${classes[variant]} ${margin ? classes.margin : ""} ${big ? classes.big : ""}`}
    >
      {children}
    </Text>
  );
};

export default Title;
