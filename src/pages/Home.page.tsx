import { useTranslation } from "react-i18next";
import { AppConstants } from "@/constants";
import {
  BackgroundSection,
  Eyebrow,
  HeroDescription,
  HeroTitle,
  PrimaryButton,
  Section,
  SectionTitle,
} from "@/components";

const { LANDING_HERO_IMAGE } = AppConstants;

export function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <BackgroundSection imageSrc={LANDING_HERO_IMAGE}>
        <HeroTitle variant='light' subtitle={t("home.hero.subtitle")}>
          {t("home.hero.title")}
        </HeroTitle>
        <HeroDescription variant='light' margin>
          {t("home.hero.description")}
        </HeroDescription>
        <PrimaryButton variant='secondary' icon>
          {t("cta.start")}
        </PrimaryButton>
      </BackgroundSection>
      <Section variant='secondary'>
        <Eyebrow variant='light'>{t("home.nutshell.eyebrow")}</Eyebrow>
        <SectionTitle variant='light' margin>
          {t("home.nutshell.title")}
        </SectionTitle>
        <PrimaryButton variant='white-secondary' icon>
          {t("cta.try")}
        </PrimaryButton>
      </Section>
      <Section>
        <Eyebrow variant='primary'>{t("home.difference.eyebrow")}</Eyebrow>
        <SectionTitle>{t("home.difference.title")}</SectionTitle>
      </Section>
      <Section variant='dark'>
        <Eyebrow variant='light'>{t("home.howWorks.eyebrow")}</Eyebrow>
        <SectionTitle variant='light'>{t("home.howWorks.title")}</SectionTitle>
      </Section>
      <Section>
        <SectionTitle>{t("home.forWho.title")}</SectionTitle>
      </Section>
      <Section>
        <Eyebrow>{t("home.support.eyebrow")}</Eyebrow>
        <SectionTitle>{t("home.support.title")}</SectionTitle>
      </Section>
      <Section>
        <Eyebrow>{t("home.founder.eyebrow")}</Eyebrow>
        <SectionTitle>{t("home.founder.title")}</SectionTitle>
      </Section>
      <Section variant='primary'></Section>
    </>
  );
}
