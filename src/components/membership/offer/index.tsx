import ProsConsItem from "@/components/pros-cons";
import Description from "@/components/description";
import Eyebrow from "@/components/eyebrow";
import { NUMBER_OF_MEMBERSHIP_BENEFITS } from "@/constants/app";
import { Box, Card, Divider, Group, Stack, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

import classes from "./index.module.css";
import PrimaryButton from "@/components/primary-button";
import ProsConsSection from "@/components/pros-cons";

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
      <Box my='xl'>
        <ProsConsSection
          header={false}
          itemsNum={NUMBER_OF_MEMBERSHIP_BENEFITS}
          itemsTitle='membership.offer.offer.items'
        />
      </Box>
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
