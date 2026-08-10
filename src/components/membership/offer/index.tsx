import { Box, Card, Divider, Title, Group, Stack, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "@/components";

import classes from "./index.module.css";
import { IMembershipPlanBenefitItem } from "@/types/common";
import ProsConsSection from "@/components/pros-cons";

interface MembershipOfferProps {
  index: number;
}

const MembershipOffer = ({ index }: MembershipOfferProps) => {
  const { t, i18n } = useTranslation();

  const benefits = t(`membership.pricing.plans.${index}.included`, {
    returnObjects: true,
  }) as IMembershipPlanBenefitItem[];

  const highlight = i18n.exists(`membership.pricing.plans.${index}.highlight`);

  return (
    <Card
      className={`${classes.card} ${highlight ? classes.highlightCard : ""}`}
    >
      <Stack align='center' gap='36' mb='xl'>
        <Title className={classes.title}>
          {t(`membership.pricing.plans.${index}.title`)}
        </Title>
        {highlight && (
          <Text className={classes.highlight}>
            {t(`membership.pricing.plans.${index}.highlight`)}
          </Text>
        )}
        <Text className={classes.subtitle}>
          {t(`membership.pricing.plans.${index}.subtitle`)}
        </Text>
        <Text className={classes.description}>
          {t(`membership.pricing.plans.${index}.description`)}
        </Text>
        <Box className={classes.box}>
          <Stack gap='sm' mb={28}>
            <Text className={classes.additional}>
              {t(`membership.pricing.plans.${index}.additional.title`)}
            </Text>
            <Text className={classes.note}>
              {t(`membership.pricing.plans.${index}.additional.note`)}
            </Text>
          </Stack>
          <Stack gap='0' mb='lg'>
            <Text className={classes.before}>
              {t(`membership.pricing.plans.${index}.price.monthly.before`)}
            </Text>
            <Text className={classes.price}>
              {t(`membership.pricing.plans.${index}.price.monthly.price`)}
            </Text>
            <Text className={classes.after}>
              {t(`membership.pricing.plans.${index}.price.monthly.after`)}
            </Text>
          </Stack>
          <Stack gap='0'>
            <Text className={classes.before}>
              {t(`membership.pricing.plans.${index}.price.annual.before`)}
            </Text>
            <Text className={classes.price}>
              {t(`membership.pricing.plans.${index}.price.annual.price`)}
            </Text>
          </Stack>
        </Box>
      </Stack>
      <Box my='xl'>
        <ProsConsSection
          header={false}
          itemsNum={benefits.length}
          white={highlight}
          itemsTitle={`membership.pricing.plans.${index}.included`}
        />
      </Box>
      <Stack>
        <PrimaryButton
          variant={highlight ? "white-primary" : "primary"}
          icon
          block
        >
          {t(`membership.pricing.plans.${index}.cta`)}
        </PrimaryButton>
        {i18n.exists(`membership.pricing.plans.${index}.link`) && (
          <PrimaryButton
            variant='white-primary'
            block
            href='https://xn--lerngesprche-ocb.com/lerngespraech-workshop/'
          >
            {t(`membership.pricing.plans.${index}.link`)}
          </PrimaryButton>
        )}
      </Stack>
    </Card>
  );
};

export default MembershipOffer;
