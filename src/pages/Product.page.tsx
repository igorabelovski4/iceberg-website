import { useTranslation } from "react-i18next";
import {
  Eyebrow,
  HeroDescription,
  HeroTitle,
  PrimaryButton,
  Section,
  SectionTitle,
} from "@/components";

export function ProductPage() {
  const { t } = useTranslation();

  return (
    <>
      <Section variant='primary'>
        <HeroTitle variant='light'>{t("product.hero.title")}</HeroTitle>
        <HeroDescription variant='light'>
          {t("product.hero.description")}
        </HeroDescription>
      </Section>
      <Section>
        <Eyebrow>{t("product.features.eyebrow")}</Eyebrow>
        <SectionTitle>{t("product.features.title")}</SectionTitle>
      </Section>
      <Section>
        <Eyebrow>{t("product.experience.eyebrow")}</Eyebrow>
        <SectionTitle>{t("product.experience.title")}</SectionTitle>
      </Section>
      <Section>
        <Eyebrow>{t("product.methodology.eyebrow")}</Eyebrow>
        <SectionTitle>{t("product.methodology.title")}</SectionTitle>
      </Section>
      <Section>
        <Eyebrow>{t("product.benefits.eyebrow")}</Eyebrow>
        <SectionTitle>{t("product.benefits.title")}</SectionTitle>
      </Section>
      <Section variant='secondary'>
        <Eyebrow variant='light'>{t("product.start.eyebrow")}</Eyebrow>
        <SectionTitle variant='light' margin>
          {t("product.start.title")}
        </SectionTitle>
        <PrimaryButton variant='white-secondary' icon>
          {t("cta.try")}
        </PrimaryButton>
      </Section>
    </>
  );
}
