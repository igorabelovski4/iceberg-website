import { Flex, Group, SimpleGrid, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { IGridItem, IGridItemIconName, ITrustItem } from "@/types/common";
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

const TrustGrid = () => {
  const { t } = useTranslation();

  const trusts = t("aboutUs.trust.items", {
    returnObjects: true,
  }) as ITrustItem[];

  return (
    <SimpleGrid cols={2} className={classes.wrapper}>
      {trusts.map((trust, index) => (
        <GridItem
          title={trust.title}
          description={trust.description}
          key={index}
          icon={trust.icon as IGridItemIconName}
        />
      ))}
    </SimpleGrid>
  );
};

export default TrustGrid;
