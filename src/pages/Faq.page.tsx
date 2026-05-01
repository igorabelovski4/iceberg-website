import { BackgroundSection, HeroDescription, HeroTitle } from "@/components";
import { FAQ_BACKGROUND_IMAGE } from "@/constants/app";
import { useTranslation } from "react-i18next";

export function FaqPage() {
  const { t } = useTranslation();

  return (
    <>
      <BackgroundSection imageSrc={FAQ_BACKGROUND_IMAGE}>
        <HeroTitle variant='primary'>{t("faq.hero.title")}</HeroTitle>
        <HeroDescription>{t("faq.hero.description")}</HeroDescription>
      </BackgroundSection>
    </>
  );
}
