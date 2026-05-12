import BenefitItem from "@/components/benefit-item";
import { NUMBER_OF_GROUP_MEMBERSHIP_BENEFITS } from "@/constants/app";
import { Box, Divider, Stack } from "@mantine/core";

import classes from "./index.module.css";
import { useTranslation } from "react-i18next";
import Title from "@/components/title";
import PrimaryButton from "@/components/primary-button";

const MembershipGroup = () => {
  const { t } = useTranslation();

  return (
    <Stack align='flex-start' className={classes.wrapper}>
      <Box className={classes.titleBox}>
        <Title variant='primary' margin={false}>
          {t(`membership.group.includes.title`)}
        </Title>
      </Box>
      <Stack gap='xs' className={classes.benefits}>
        {Array(NUMBER_OF_GROUP_MEMBERSHIP_BENEFITS)
          .fill(null)
          .map((_, index) => (
            <BenefitItem
              value={t(`membership.group.includes.items.${index}.title`)}
              key={index}
            />
          ))}
      </Stack>
      <PrimaryButton icon>{t(`membership.group.cta`)}</PrimaryButton>
    </Stack>
  );
};

export default MembershipGroup;
