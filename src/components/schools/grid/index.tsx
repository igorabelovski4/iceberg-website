import { Flex, Group, SimpleGrid, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";
import {
  IGridItem,
  IGridItemIconName,
  ISchoolStrategyItem,
} from "@/types/common";
import { GRID_ICON_MAP } from "@/constants/app";
import Title from "@/components/title";
import Description from "@/components/description";
import classes from "./index.module.css";

const GridItem = ({ title, description, icon }: IGridItem) => {
  const Icon = GRID_ICON_MAP[icon];

  return (
    <Group className={classes.box}>
      <Flex className={classes.iconBox}>
        <Icon size={28} stroke={2} className={classes.icon} />
      </Flex>
      <Stack className={classes.content}>
        <Title margin={false}>{title}</Title>
        <Description align='left'>{description}</Description>
      </Stack>
    </Group>
  );
};

const StrategyGrid = () => {
  const { t } = useTranslation();

  const strategies = t("schools.strategy.items", {
    returnObjects: true,
  }) as ISchoolStrategyItem[];

  return (
    <SimpleGrid cols={2} className={classes.wrapper}>
      {strategies.map((strategy, index) => (
        <GridItem
          title={strategy.title}
          description={strategy.description}
          key={index}
          icon={strategy.icon as IGridItemIconName}
        />
      ))}
    </SimpleGrid>
  );
};

export default StrategyGrid;
