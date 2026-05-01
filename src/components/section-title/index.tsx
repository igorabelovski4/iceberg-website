import clsx from "clsx";
import { ISectionTitle } from "@/types/common";
import { Text } from "@mantine/core";

import classes from "./index.module.css";

const SectionTitle = ({ children, variant = "dark" }: ISectionTitle) => {
  return (
    <Text className={clsx(classes.title, classes[variant])}>{children}</Text>
  );
};

export default SectionTitle;
