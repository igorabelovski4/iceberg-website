import { useTranslation } from "react-i18next";
import { Box } from "@mantine/core";
import ProsConsSection from "@/components/pros-cons";
import PrimaryButton from "@/components/primary-button";
import { IMembershipGroupBenefitItem } from "@/types/common";

const MembershipGroup = () => {
  const { t } = useTranslation();

  const benefits = t("membership.group.includes.items", {
    returnObjects: true,
  }) as IMembershipGroupBenefitItem[];

  return (
    <Box mt='xl'>
      <ProsConsSection
        title='membership.group.includes.title'
        itemsNum={benefits.length}
        itemsTitle='membership.group.includes.items'
      />
      <Box mt='xl'>
        <PrimaryButton icon>{t(`membership.group.cta`)}</PrimaryButton>
      </Box>
    </Box>
  );
};

export default MembershipGroup;
