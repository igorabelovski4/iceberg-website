import Description from "@/components/description";
import SectionTitle from "@/components/section-title";
import { IRoutineItem } from "@/types/common";
import { Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";

const Routine = () => {
  const { t } = useTranslation();

  const fits = t("home.routine.items", {
    returnObjects: true,
  }) as IRoutineItem[];

  return (
    <Stack align='flex-start'>
      <SectionTitle margin>{t("home.routine.title")}</SectionTitle>
      {fits.map((fit) => (
        <Stack mb='xl'>
          <Description align='left' strong>
            {fit.title}
          </Description>
          <Description align='left'>{fit.text}</Description>
        </Stack>
      ))}
    </Stack>
  );
};

export default Routine;
