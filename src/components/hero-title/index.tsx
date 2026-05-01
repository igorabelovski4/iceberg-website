import clsx from "clsx";
import { IHeroTitle } from "@/types/common";
import { Title } from "@mantine/core";

import classes from "./index.module.css";

const HeroTitle = ({ title, variant = "dark" }: IHeroTitle) => {
  return (
    <Title order={1} className={clsx(classes.title, classes[variant])}>
      {title}
    </Title>
  );
};

export default HeroTitle;
