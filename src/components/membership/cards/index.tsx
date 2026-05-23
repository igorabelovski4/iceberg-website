import { useTranslation } from "react-i18next";
import { AppConstants } from "@/constants";
import { Grid, SimpleGrid } from "@mantine/core";
import FeatureCard from "@/components/feature-card";
import { IFeatureCardIconName } from "@/types/common";
const { MEMBERSHIP_CARDS_ICON_MAP, NUMBER_OF_MEMBERSHIP_ITEMS } = AppConstants;

import classes from "./index.module.css";

const MembershipCards = () => {
  const { t } = useTranslation();

  return (
    <Grid className={classes.grid} gap={48}>
      {Array(NUMBER_OF_MEMBERSHIP_ITEMS)
        .fill(null)
        .map((_, index) => (
          <Grid.Col span={6}>
            <FeatureCard
              title={t(`membership.included.items.${index}.title`)}
              description={t(`membership.included.items.${index}.description`)}
              key={index}
              map={MEMBERSHIP_CARDS_ICON_MAP}
              icon={
                t(
                  `membership.included.items.${index}.icon`,
                ) as IFeatureCardIconName
              }
            />
          </Grid.Col>
        ))}
      <Grid.Col span={12}>
        <FeatureCard
          title={t(`membership.included.items.4.title`)}
          description={t(`membership.included.items.4.description`)}
          map={MEMBERSHIP_CARDS_ICON_MAP}
          alternative
          icon={t(`membership.included.items.4.icon`) as IFeatureCardIconName}
        />
      </Grid.Col>
    </Grid>
  );
};

export default MembershipCards;
