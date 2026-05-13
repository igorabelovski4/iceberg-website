import { Flex, Group, SimpleGrid, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { AppConstants } from "@/constants";
import { IGridItem, IGridItemIconName } from "@/types/common";
import { GRID_ICON_MAP } from "@/constants/app";
import Title from "@/components/title";
import Description from "@/components/description";
import classes from "./index.module.css";

const { NUMBER_OF_TRUST_ITEMS } = AppConstants;

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

  return (
    <SimpleGrid cols={2} className={classes.wrapper}>
      {Array(NUMBER_OF_TRUST_ITEMS)
        .fill(null)
        .map((_, index) => (
          <GridItem
            title={t(`aboutUs.trust.items.${index}.title`)}
            description={t(`aboutUs.trust.items.${index}.description`)}
            key={index}
            icon={t(`aboutUs.trust.items.${index}.icon`) as IGridItemIconName}
          />
        ))}
    </SimpleGrid>
  );
};

export default TrustGrid;
