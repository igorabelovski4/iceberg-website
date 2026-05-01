import { Container, Image } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { AppConstants } from "@/constants";
import { BackgroundSection } from "@/components";

const { LANDING_HERO_IMAGE } = AppConstants;

export function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <BackgroundSection imageSrc={LANDING_HERO_IMAGE}>
        sadasd
      </BackgroundSection>
    </>
  );
}
