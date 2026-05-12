import { Group } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import Description from "../description";
import { IBenefitItem } from "@/types/common";

import classes from "./index.module.css";

const BenefitItem = ({ value }: IBenefitItem) => {
  return (
    <Group className={classes.box}>
      <IconCheck className={classes.icon} />
      <Description>{value}</Description>
    </Group>
  );
};

export default BenefitItem;
