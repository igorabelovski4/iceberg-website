import Description from "@/components/description";
import Title from "@/components/title";
import { AppConstants } from "@/constants";
import { Card, SimpleGrid, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";

import classes from "./index.module.css";
import { Icon123 } from "@tabler/icons-react";

const { NUMBER_OF_PHASE_CARDS, PHASES_ICON_MAP } = AppConstants;

const PhaseCard = () => {
  const { t } = useTranslation();

  return (
    <SimpleGrid cols={3} spacing='xl'>
      {Array.from({ length: NUMBER_OF_PHASE_CARDS }).map((_, index) => {
        const iconKey = t(
          `home.howWorks.phases.${index}.icon`,
        ) as keyof typeof PHASES_ICON_MAP;
        const Icon = PHASES_ICON_MAP[iconKey];

        return (
          <Card key={index} className={classes.card}>
            <Stack className={classes.inner}>
              <Icon
                size={36}
                stroke={2}
                className={`${classes.icon} ${classes[`icon${index + 1}`]}`}
              />
              <Title margin={false}>
                {t(`home.howWorks.phases.${index}.title`)}
              </Title>
              <Description align='left'>
                {t(`home.howWorks.phases.${index}.description`)}
              </Description>
            </Stack>
          </Card>
        );
      })}
    </SimpleGrid>
  );
};

export default PhaseCard;
