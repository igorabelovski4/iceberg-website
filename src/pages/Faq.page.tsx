import {
  AccordionBox,
  AccordionItem,
  BackgroundSection,
  HeroDescription,
  HeroTitle,
  Section,
} from "@/components";
import { FAQ_BACKGROUND_IMAGE } from "@/constants/app";
import { useTranslation } from "react-i18next";

import { AppConstants } from "@/constants";

const { NUMBER_OF_FAQ_ITEMS } = AppConstants;

export function FaqPage() {
  const { t } = useTranslation();

  return (
    <>
      <BackgroundSection imageSrc={FAQ_BACKGROUND_IMAGE}>
        <HeroTitle variant='primary'>{t("faq.hero.title")}</HeroTitle>
        <HeroDescription margin>{t("faq.hero.description")}</HeroDescription>
        <Section>
          <AccordionBox dark>
            {Array(NUMBER_OF_FAQ_ITEMS)
              .fill(null)
              .map((_, index) => (
                <AccordionItem
                  key={t(`faq.questions.${index}.title`)}
                  title={t(`faq.questions.${index}.title`)}
                  question={t(`faq.questions.${index}.question`)}
                  answer={t(`faq.questions.${index}.answer`)}
                  dark
                />
              ))}
          </AccordionBox>
        </Section>
      </BackgroundSection>
    </>
  );
}
