import {
  Eyebrow,
  HeroDescription,
  HeroTitle,
  PrimaryButton,
  Section,
  SectionTitle,
} from "@/components";
import { useTranslation } from "react-i18next";

export function AboutUsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <HeroTitle>{t("aboutUs.hero.title")}</HeroTitle>
        <HeroDescription>{t("aboutUs.hero.description")}</HeroDescription>
      </Section>
      <Section variant='dark'>
        <Eyebrow variant='light'>{t("aboutUs.exist.eyebrow")}</Eyebrow>
        <SectionTitle variant='light'>{t("aboutUs.exist.title")}</SectionTitle>
      </Section>
      <Section>
        <Eyebrow>{t("aboutUs.pedagogic.eyebrow")}</Eyebrow>
        <SectionTitle>{t("aboutUs.pedagogic.title")}</SectionTitle>
      </Section>
      <Section variant='secondary'>
        <Eyebrow variant='light'>{t("aboutUs.membership.eyebrow")}</Eyebrow>
        <SectionTitle variant='light' margin>
          {t("aboutUs.membership.title")}
        </SectionTitle>
        <PrimaryButton variant='white-secondary' icon>
          {t("aboutUs.membership.cta")}
        </PrimaryButton>
      </Section>
      <Section>
        <Eyebrow>{t("aboutUs.founder.eyebrow")}</Eyebrow>
        <SectionTitle>{t("aboutUs.founder.title")}</SectionTitle>
      </Section>
      <Section>
        <Eyebrow>{t("aboutUs.trust.eyebrow")}</Eyebrow>
        <SectionTitle>{t("aboutUs.trust.title")}</SectionTitle>
      </Section>
      <Section variant='primary'>
        <Eyebrow variant='light'>{t("aboutUs.development.eyebrow")}</Eyebrow>
        <SectionTitle variant='light'>
          {t("aboutUs.development.title")}
        </SectionTitle>
      </Section>
    </>
  );
}
