import {
  Eyebrow,
  HeroDescription,
  HeroTitle,
  Section,
  SectionTitle,
} from "@/components";
import { useTranslation } from "react-i18next";

export function MembershipPage() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <HeroTitle>{t("membership.hero.title")}</HeroTitle>
        <HeroDescription>{t("membership.hero.description")}</HeroDescription>
      </Section>
      <Section>
        <Eyebrow>{t("membership.included.eyebrow")}</Eyebrow>
        <SectionTitle>{t("membership.included.title")}</SectionTitle>
      </Section>
      <Section variant='secondary'>
        <Eyebrow variant='light'>{t("membership.pricing.eyebrow")}</Eyebrow>
        <SectionTitle variant='light'>
          {t("membership.pricing.title")}
        </SectionTitle>
      </Section>
      <Section>
        <Eyebrow>{t("membership.group.eyebrow")}</Eyebrow>
        <SectionTitle>{t("membership.group.title")}</SectionTitle>
      </Section>
    </>
  );
}
