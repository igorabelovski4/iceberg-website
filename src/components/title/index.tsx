import { Text } from "@mantine/core";
import { ITitle } from "@/types/common";

import classes from "./index.module.css";

const Title = ({
  children,
  variant = "dark",
  margin = true,
  big = false,
  small = false,
  alignLeft = false,
  thin = false,
  color = "",
}: ITitle) => {
  return (
    <Text
      className={`${classes.title} ${classes[variant]} ${margin ? classes.margin : ""} ${big ? classes.big : ""} ${small ? classes.small : ""} ${alignLeft ? classes.left : ""} ${thin ? classes.thin : ""}`}
      style={{ color: color ? color : "" }}
    >
      {children}
    </Text>
  );
};

export default Title;
