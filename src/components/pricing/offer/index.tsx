import { Box, Card, Title, Group, Stack, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "@/components";

import classes from "./index.module.css";
import { IPricingBenefitItem } from "@/types/common";
import ProsConsSection from "@/components/pros-cons";

interface PricingOfferProps {
  index: number;
}

const PricingOffer = ({ index }: PricingOfferProps) => {
  const { t, i18n } = useTranslation();

  const benefits = t(`pricing.pricing.plans.${index}.included`, {
    returnObjects: true,
  }) as IPricingBenefitItem[];

  const highlight = i18n.exists(`pricing.pricing.plans.${index}.highlight`);

  return (
    <Card className={classes.card}>
      <Box ta='left'>
        <Text
          className={`${classes.label} ${index === 0 ? "" : classes.secondary}`}
        >
          {t(`pricing.pricing.plans.${index}.label`)}
        </Text>
        <Text className={classes.subtitle}>
          {t(`pricing.pricing.plans.${index}.subtitle`)}
        </Text>
        <Title className={classes.title} ta='left'>
          {t(`pricing.pricing.plans.${index}.title`)}
        </Title>
        <Group gap={"md"} align='center' mb={24}>
          <Text className={classes.price}>
            {t(`pricing.pricing.plans.${index}.price`)}
          </Text>
          <Text className={classes.sufix}>
            {t(`pricing.pricing.plans.${index}.sufix`)}
          </Text>
        </Group>
      </Box>
      <Box my='xl'>
        <ProsConsSection
          header={false}
          itemsNum={benefits.length}
          white={highlight}
          itemsTitle={`pricing.pricing.plans.${index}.included`}
        />
      </Box>
      <Stack>
        <PrimaryButton
          icon
          block
          variant={index === 0 ? "primary" : "secondary"}
        >
          {t(`pricing.pricing.plans.${index}.cta`)}
        </PrimaryButton>
        <Text className={classes.additional}>
          {t(`pricing.pricing.plans.${index}.note`)}
        </Text>
      </Stack>
    </Card>
  );
};

export default PricingOffer;
