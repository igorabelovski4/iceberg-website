import clsx from "clsx";
import { IHeroTitle } from "@/types/common";
import { Stack, Text, Title } from "@mantine/core";

import classes from "./index.module.css";

const HeroTitle = ({
  children,
  subtitle,
  variant = "dark",
  shadow = true,
}: IHeroTitle) => {
  return (
    <Stack className={classes.stack}>
      {subtitle && (
        <Text
          className={`${clsx(classes.subtitle, classes[variant])} ${shadow ? classes.shadow : ""}`}
        >
          {subtitle}
        </Text>
      )}
      <Title
        order={1}
        className={`${clsx(classes.title, classes[variant])} ${shadow ? classes.shadow : ""}`}
      >
        {children}
      </Title>
    </Stack>
  );
};

export default HeroTitle;
