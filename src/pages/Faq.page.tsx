import {
  AccordionBox,
  AccordionItem,
  BackgroundSection,
  HeroDescription,
  HeroTitle,
  Section,
} from "@/components";
import { FAQ_BACKGROUND_IMAGE } from "@/constants/app";
import { IFaqQuestionItem } from "@/types/common";
import { useTranslation } from "react-i18next";

export function FaqPage() {
  const { t } = useTranslation();

  const questions = t("faq.questions", {
    returnObjects: true,
  }) as IFaqQuestionItem[];

  return (
    <>
      <BackgroundSection imageSrc={FAQ_BACKGROUND_IMAGE}>
        <HeroTitle variant='primary'>{t("faq.hero.title")}</HeroTitle>
        <HeroDescription margin>{t("faq.hero.description")}</HeroDescription>
        <Section>
          <AccordionBox dark>
            {questions.map((question, index) => (
              <AccordionItem
                key={question.id}
                title={question.id}
                question={question.question}
                answer={question.answer}
                dark
              />
            ))}
          </AccordionBox>
        </Section>
      </BackgroundSection>
    </>
  );
}
