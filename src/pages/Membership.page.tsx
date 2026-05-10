import { useTranslation } from "react-i18next";
import { AppConstants } from "@/constants";

import {
  Eyebrow,
  HeroDescription,
  HeroImage,
  HeroTitle,
  MembershipCards,
  MembershipOffer,
  Section,
  SectionTitle,
} from "@/components";

const { CERTIFICATION_IMAGE } = AppConstants;

export function MembershipPage() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <HeroTitle shadow={false}>{t("membership.hero.title")}</HeroTitle>
        <HeroDescription shadow={false}>
          {t("membership.hero.description")}
        </HeroDescription>
        <HeroImage
          src={CERTIFICATION_IMAGE}
          alt={t("membership.hero.illustrationText")}
        />
      </Section>
      <Section>
        <Eyebrow>{t("membership.included.eyebrow")}</Eyebrow>
        <SectionTitle>{t("membership.included.title")}</SectionTitle>
        <MembershipCards />
      </Section>
      <Section variant='secondary'>
        <Eyebrow variant='light'>{t("membership.pricing.eyebrow")}</Eyebrow>
        <SectionTitle variant='light'>
          {t("membership.pricing.title")}
        </SectionTitle>
        <MembershipOffer />
      </Section>
      <Section>
        <Eyebrow>{t("membership.group.eyebrow")}</Eyebrow>
        <SectionTitle>{t("membership.group.title")}</SectionTitle>
      </Section>
    </>
  );
}
