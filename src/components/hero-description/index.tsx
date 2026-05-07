import clsx from "clsx";
import { IHeroDescription } from "@/types/common";
import { Text } from "@mantine/core";

import classes from "./index.module.css";

const HeroDescription = ({
  children,
  variant = "dark",
  margin,
  shadow = true,
}: IHeroDescription) => {
  return (
    <Text
      className={clsx(
        `${classes.description} ${classes[variant]} ${margin ? classes.margin : ""} ${shadow ? classes.shadow : ""}`,
      )}
    >
      {children}
    </Text>
  );
};

export default HeroDescription;
