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
import { Stack } from "@mantine/core";
const { EDUCATOR_IMAGE, NUMBER_OF_PEDAGOGIC_TEXTS } = AppConstants;
import { useTranslation } from "react-i18next";

export function AboutUsPage() {
  const { t } = useTranslation();

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
        <Eyebrow variant='light'>{t("aboutUs.exist.eyebrow")}</Eyebrow>
        <SectionTitle variant='light' margin>
          {t("aboutUs.exist.title")}
        </SectionTitle>
        <Description variant='light' align='left'>
          {t("aboutUs.exist.more")}
        </Description>
      </Section>
      <Section>
        <Eyebrow>{t("aboutUs.pedagogic.eyebrow")}</Eyebrow>
        <SectionTitle>{t("aboutUs.pedagogic.title")}</SectionTitle>
        <Stack gap='lg' mt='xl'>
          {Array(NUMBER_OF_PEDAGOGIC_TEXTS)
            .fill(null)
            .map((_, index) => (
              <Description align='left'>
                {t(`aboutUs.pedagogic.descriptions.${index}.text`)}
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
