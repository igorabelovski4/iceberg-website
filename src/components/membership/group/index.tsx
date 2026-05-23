import { useTranslation } from "react-i18next";
import { Box, Stack } from "@mantine/core";
import { NUMBER_OF_GROUP_MEMBERSHIP_BENEFITS } from "@/constants/app";
import ProsConsSection from "@/components/pros-cons";
import PrimaryButton from "@/components/primary-button";

const MembershipGroup = () => {
  const { t } = useTranslation();

  return (
    <Box mt='xl'>
      <ProsConsSection
        title='membership.group.includes.title'
        itemsNum={NUMBER_OF_GROUP_MEMBERSHIP_BENEFITS}
        itemsTitle='membership.group.includes.items'
      />
      <Box mt='xl'>
        <PrimaryButton icon>{t(`membership.group.cta`)}</PrimaryButton>
      </Box>
    </Box>
  );
};

export default MembershipGroup;
