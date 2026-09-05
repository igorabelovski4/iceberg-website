import Description from "@/components/description";
import SectionTitle from "@/components/section-title";
import { Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";

const Routine = () => {
  const { t } = useTranslation();

  return (
    <Stack align='flex-start'>
      <SectionTitle margin>{t("home.routine.title")}</SectionTitle>
      <Description align='left'>{t("home.routine.description")}</Description>
    </Stack>
  );
};

export default Routine;
