import Description from "@/components/description";
import Title from "@/components/title";
import { AppConstants } from "@/constants";
import { Card, SimpleGrid, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";

import classes from "./index.module.css";
import { IPhaseItem } from "@/types/common";

const { PHASES_ICON_MAP } = AppConstants;

const PhaseCard = () => {
  const { t } = useTranslation();

  const phases = t("home.howWorks.phases", {
    returnObjects: true,
  }) as IPhaseItem[];

  return (
    <SimpleGrid cols={3} spacing='xl'>
      {phases.map((phase, index) => {
        const iconKey = phase.icon as keyof typeof PHASES_ICON_MAP;
        const Icon = PHASES_ICON_MAP[iconKey];

        return (
          <Card key={index} className={classes.card} withBorder shadow='xl'>
            <Stack className={classes.inner}>
              <Icon
                size={36}
                stroke={2}
                className={`${classes.icon} ${classes[`icon${index + 1}`]}`}
              />
              <Title margin={false}>{phase.title}</Title>
              <Description align='left'>{phase.description}</Description>
            </Stack>
          </Card>
        );
      })}
    </SimpleGrid>
  );
};

export default PhaseCard;
