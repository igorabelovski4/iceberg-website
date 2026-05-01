import clsx from "clsx";
import { IHeroTitle } from "@/types/common";
import { Stack, Text, Title } from "@mantine/core";

import classes from "./index.module.css";

const HeroTitle = ({ children, subtitle, variant = "dark" }: IHeroTitle) => {
  return (
    <Stack className={classes.stack}>
      <Title order={1} className={clsx(classes.title, classes[variant])}>
        {children}
      </Title>
      {subtitle && (
        <Text className={clsx(classes.subtitle, classes[variant])}>
          {subtitle}
        </Text>
      )}
    </Stack>
  );
};

export default HeroTitle;
