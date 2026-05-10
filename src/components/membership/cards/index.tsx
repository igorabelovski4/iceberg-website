import { useTranslation } from "react-i18next";
import { AppConstants } from "@/constants";
import { SimpleGrid } from "@mantine/core";
import FeatureCard from "@/components/feature-card";
import { IFeatureCardIconName } from "@/types/common";
const { MEMBERSHIP_CARDS_ICON_MAP, NUMBER_OF_MEMBERSHIP_ITEMS } = AppConstants;

import classes from "./index.module.css";

const MembershipCards = () => {
  const { t } = useTranslation();

  return (
    <SimpleGrid cols={2} className={classes.grid}>
      {Array(NUMBER_OF_MEMBERSHIP_ITEMS)
        .fill(null)
        .map((_, index) => (
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
        ))}
    </SimpleGrid>
  );
};

export default MembershipCards;
