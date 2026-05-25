import { useTranslation } from "react-i18next";
import { AppConstants } from "@/constants";

import {
  Eyebrow,
  HeroDescription,
  HeroImage,
  HeroTitle,
  PrimaryButton,
  Section,
  Description,
  SectionTitle,
  ShiftCarousel,
  WorkCards,
  StrategyGrid,
  SchoolFaq,
  Title,
  Calendly,
} from "@/components";

const { TEAM_IMAGE } = AppConstants;

export function SchoolsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <HeroTitle shadow={false}>{t("schools.hero.title")}</HeroTitle>
        <HeroDescription shadow={false}>
          {t("schools.hero.description")}
        </HeroDescription>
        <HeroImage src={TEAM_IMAGE} alt={t("schools.hero.illustrationText")} />
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
        <SectionTitle margin>{t("schools.shift.title")}</SectionTitle>
        <Description>{t("schools.shift.description")}</Description>
        <ShiftCarousel />
      </Section>
      <Section>
        <Eyebrow>{t("schools.work.eyebrow")}</Eyebrow>
        <SectionTitle margin>{t("schools.work.title")}</SectionTitle>
        <WorkCards />
      </Section>
      <Section>
        <SectionTitle margin>{t("schools.strategy.title")}</SectionTitle>
        <Description>{t("schools.strategy.description")}</Description>
        <StrategyGrid />
      </Section>
      <Section>
        <SectionTitle>{t("schools.booking.title")}</SectionTitle>
        <Calendly />
      </Section>
      <Section variant='dark'>
        <Eyebrow variant='light'>{t("schools.faq.eyebrow")}</Eyebrow>
        <SectionTitle variant='light' margin>
          {t("schools.faq.title")}
        </SectionTitle>
        <SchoolFaq />
      </Section>
      <Section variant='primary'>
        <Title variant='light' big>
          {t("schools.cta.title")}
        </Title>
        <SectionTitle variant='light' margin>
          {t("schools.cta.subtitle")}
        </SectionTitle>
        <Description variant='light' margin>
          {t("schools.cta.description")}
        </Description>
        <PrimaryButton variant='secondary'>
          {t("schools.cta.cta")}
        </PrimaryButton>
      </Section>
    </>
  );
}
