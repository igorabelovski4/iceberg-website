import {
  Description,
  Eyebrow,
  Founder,
  HeroDescription,
  HeroImage,
  HeroTitle,
  PedagogicCards,
  PrimaryButton,
  Section,
  SectionTitle,
  TrustGrid,
} from "@/components";
import { AppConstants } from "@/constants";
import { IPedgagogicDescriptionItem } from "@/types/common";
import { Stack } from "@mantine/core";
const { EDUCATOR_IMAGE } = AppConstants;
import { useTranslation } from "react-i18next";

export function AboutUsPage() {
  const { t } = useTranslation();

  const pedagogicDescriptions = t("aboutUs.pedagogic.descriptions", {
    returnObjects: true,
  }) as IPedgagogicDescriptionItem[];

  return (
    <>
      <Section>
        <HeroTitle shadow={false}>{t("aboutUs.hero.title")}</HeroTitle>
        <HeroDescription shadow={false}>
          {t("aboutUs.hero.description")}
        </HeroDescription>
        <HeroImage
          src={EDUCATOR_IMAGE}
          alt={t("aboutUs.hero.illustrationText")}
        />
      </Section>
      <Section variant='dark'>
        <Eyebrow variant='light'>{t("aboutUs.mission.eyebrow")}</Eyebrow>
        <SectionTitle variant='light' margin>
          {t("aboutUs.mission.title")}
        </SectionTitle>
        <Description variant='light' align='left'>
          {t("aboutUs.mission.description")}
        </Description>
      </Section>
      <Section>
        <Eyebrow>{t("aboutUs.pedagogic.eyebrow")}</Eyebrow>
        <SectionTitle>{t("aboutUs.pedagogic.title")}</SectionTitle>
        <Stack gap='lg' mt='xl'>
          {pedagogicDescriptions.map((description, index) => (
            <Description align='left' key={index}>
              {description.text}
            </Description>
          ))}
        </Stack>
        <PedagogicCards />
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
        <SectionTitle margin>{t("aboutUs.founder.title")}</SectionTitle>
        <Founder />
      </Section>
      <Section>
        <Eyebrow>{t("aboutUs.trust.eyebrow")}</Eyebrow>
        <SectionTitle>{t("aboutUs.trust.title")}</SectionTitle>
        <TrustGrid />
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
