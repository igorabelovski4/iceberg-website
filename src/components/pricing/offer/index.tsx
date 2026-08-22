import { Box, Card, Divider, Title, Group, Stack, Text } from "@mantine/core";
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
    <Card
      className={`${classes.card} ${highlight ? classes.highlightCard : ""}`}
    >
      <Stack align='center' gap='36' mb='xl'>
        <Title className={classes.title}>
          {t(`pricing.pricing.plans.${index}.title`)}
        </Title>
        {highlight && (
          <Text className={classes.highlight}>
            {t(`pricing.pricing.plans.${index}.highlight`)}
          </Text>
        )}
        <Text className={classes.subtitle}>
          {t(`pricing.pricing.plans.${index}.subtitle`)}
        </Text>
        <Text className={classes.description}>
          {t(`pricing.pricing.plans.${index}.description`)}
        </Text>
        <Box className={classes.box}>
          <Stack gap='sm' mb={28}>
            <Text className={classes.additional}>
              {t(`pricing.pricing.plans.${index}.additional.title`)}
            </Text>
            <Text className={classes.note}>
              {t(`pricing.pricing.plans.${index}.additional.note`)}
            </Text>
          </Stack>
          <Stack gap='0'>
            <Text className={classes.before}>
              {t(`pricing.pricing.plans.${index}.price.before`)}
            </Text>
            <Text className={classes.price}>
              {t(`pricing.pricing.plans.${index}.price.price`)}
            </Text>
          </Stack>
        </Box>
      </Stack>
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
          variant={highlight ? "white-primary" : "primary"}
          icon
          block
        >
          {t(`pricing.pricing.plans.${index}.cta`)}
        </PrimaryButton>
        {i18n.exists(`pricing.pricing.plans.${index}.link`) && (
          <PrimaryButton variant='white-primary' block>
            {t(`pricing.pricing.plans.${index}.link`)}
          </PrimaryButton>
        )}
      </Stack>
    </Card>
  );
};

export default PricingOffer;
