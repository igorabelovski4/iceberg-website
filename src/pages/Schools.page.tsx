import {
  Eyebrow,
  HeroDescription,
  HeroTitle,
  PrimaryButton,
  Section,
  SectionTitle,
} from "@/components";
import { useTranslation } from "react-i18next";

export function SchoolsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <HeroTitle>{t("schools.hero.title")}</HeroTitle>
        <HeroDescription>{t("schools.hero.description")}</HeroDescription>
      </Section>
      <Section variant='dark'>
        <Eyebrow variant='light'>{t("schools.consultation.eyebrow")}</Eyebrow>
        <SectionTitle variant='light' margin>
          {t("schools.consultation.title")}
        </SectionTitle>
        <PrimaryButton variant='white-dark' icon>
          {t("schools.consultation.cta")}
        </PrimaryButton>
      </Section>
      <Section>
        <Eyebrow>{t("schools.shift.eyebrow")}</Eyebrow>
        <SectionTitle>{t("schools.shift.title")}</SectionTitle>
      </Section>
      <Section>
        <Eyebrow>{t("schools.work.eyebrow")}</Eyebrow>
        <SectionTitle>{t("schools.work.title")}</SectionTitle>
      </Section>
      <Section>
        <SectionTitle>{t("schools.strategy.title")}</SectionTitle>
      </Section>
      <Section>
        <SectionTitle>{t("schools.booking.title")}</SectionTitle>
      </Section>
      <Section variant='dark'>
        <Eyebrow variant='light'>{t("schools.faq.eyebrow")}</Eyebrow>
        <SectionTitle variant='light' margin>
          {t("schools.faq.title")}
        </SectionTitle>
      </Section>
    </>
  );
}
