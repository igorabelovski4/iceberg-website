import { useTranslation } from "react-i18next";
import { AppConstants } from "@/constants";

import {
  Description,
  Eyebrow,
  HeroDescription,
  HeroImage,
  HeroTitle,
  MembershipCards,
  MembershipGroup,
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
        <Eyebrow variant='light'>{t("membership.offer.eyebrow")}</Eyebrow>
        <SectionTitle variant='light'>
          {t("membership.offer.title")}
        </SectionTitle>
        <MembershipOffer />
      </Section>
      <Section>
        <Eyebrow>{t("membership.group.eyebrow")}</Eyebrow>
        <SectionTitle margin>{t("membership.group.title")}</SectionTitle>
        <Description align='left'>
          {t("membership.group.description")}
        </Description>
        <MembershipGroup />
      </Section>
    </>
  );
}
