import BenefitItem from "@/components/benefit-item";
import Description from "@/components/description";
import Eyebrow from "@/components/eyebrow";
import { NUMBER_OF_MEMBERSHIP_BENEFITS } from "@/constants/app";
import { Card, Divider, Group, Stack, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

import classes from "./index.module.css";
import PrimaryButton from "@/components/primary-button";

const MembershipOffer = () => {
  const { t } = useTranslation();

  return (
    <Card className={classes.card}>
      <Stack align='center' gap='sm' mb='xl'>
        <Eyebrow>{t("membership.offer.offer.title")}</Eyebrow>
        <Group>
          <Text className={classes.price}>
            {t("membership.offer.offer.price")}
          </Text>
          <Text className={classes.interval}>
            {t("membership.offer.offer.interval")}
          </Text>
        </Group>
        <Description>{t("membership.offer.offer.included")}</Description>
      </Stack>
      <Divider />
      <Stack gap='xs' className={classes.benefits}>
        {Array(NUMBER_OF_MEMBERSHIP_BENEFITS)
          .fill(null)
          .map((_, index) => (
            <BenefitItem
              value={t(`membership.offer.offer.items.${index}.title`)}
              key={index}
            />
          ))}
      </Stack>
      <Divider />
      <Group align='center' justify='space-between' mt='xl' wrap='nowrap'>
        <PrimaryButton icon block>
          {t(`membership.offer.offer.cta.start`)}
        </PrimaryButton>
        <PrimaryButton variant='white-primary' block>
          {t(`membership.offer.offer.cta.contact`)}
        </PrimaryButton>
      </Group>
    </Card>
  );
};

export default MembershipOffer;
