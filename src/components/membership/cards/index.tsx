import { useTranslation } from "react-i18next";
import { AppConstants } from "@/constants";
import { Grid } from "@mantine/core";
import FeatureCard from "@/components/feature-card";
import { IFeatureCardIconName, IMembershipBenefitItem } from "@/types/common";
const { MEMBERSHIP_CARDS_ICON_MAP } = AppConstants;

import classes from "./index.module.css";

const MembershipCards = () => {
  const { t } = useTranslation();

  const membershipBenefits = t("membership.included.items", {
    returnObjects: true,
  }) as IMembershipBenefitItem[];

  return (
    <Grid className={classes.grid} gap={{ base: 16, sm: 20, lg: 36 }}>
      {membershipBenefits.map((benefit, index) => {
        return (
          <Grid.Col span={{ base: 12, sm: 6 }} key={index}>
            <FeatureCard
              title={benefit.title}
              description={benefit.description}
              key={index}
              map={MEMBERSHIP_CARDS_ICON_MAP}
              icon={benefit.icon as IFeatureCardIconName}
            />
          </Grid.Col>
        );
      })}
    </Grid>
  );
};

export default MembershipCards;
