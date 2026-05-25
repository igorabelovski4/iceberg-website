import Description from "@/components/description";
import Eyebrow from "@/components/eyebrow";
import { Box, Card, Divider, Group, Stack, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

import classes from "./index.module.css";
import PrimaryButton from "@/components/primary-button";
import ProsConsSection from "@/components/pros-cons";
import { IMembershipPlanBenefitItem } from "@/types/common";

const MembershipOffer = () => {
  const { t } = useTranslation();

  const benefits = t("membership.pricing.plan.items", {
    returnObjects: true,
  }) as IMembershipPlanBenefitItem[];

  return (
    <Card className={classes.card}>
      <Stack align='center' gap='sm' mb='xl'>
        <Eyebrow>{t("membership.pricing.plan.title")}</Eyebrow>
        <Group>
          <Text className={classes.price}>
            {t("membership.pricing.plan.price")}
          </Text>
          <Text className={classes.interval}>
            {t("membership.pricing.plan.interval")}
          </Text>
        </Group>
        <Description>{t("membership.pricing.plan.included")}</Description>
      </Stack>
      <Divider />
      <Box my='xl'>
        <ProsConsSection
          header={false}
          itemsNum={benefits.length}
          itemsTitle='membership.pricing.plan.items'
        />
      </Box>
      <Divider />
      <Group align='center' justify='space-between' mt='xl' wrap='nowrap'>
        <PrimaryButton icon block>
          {t(`membership.pricing.plan.cta.start`)}
        </PrimaryButton>
        <PrimaryButton variant='white-primary' block>
          {t(`membership.pricing.plan.cta.contact`)}
        </PrimaryButton>
      </Group>
    </Card>
  );
};

export default MembershipOffer;
