import clsx from "clsx";
import { Title } from "@mantine/core";
import { IEyebrow } from "@/types/common";

import classes from "./index.module.css";

const Eyebrow = ({ children, variant = "default" }: IEyebrow) => {
  return (
    <Title order={6} className={clsx(classes.eyebrow, classes[variant])}>
      {children}
    </Title>
  );
};

export default Eyebrow;
