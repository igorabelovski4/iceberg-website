import { useTranslation } from "react-i18next";
import { AppConstants } from "@/constants";

import {
  Description,
  Eyebrow,
  HeroDescription,
  HeroImage,
  HeroTitle,
  PricingOffer,
  PrimaryButton,
  Section,
  SectionTitle,
  Title,
} from "@/components";
import { SimpleGrid, Stack } from "@mantine/core";
import { BRIEF_DOCUMENT } from "@/constants/app";

const { CERTIFICATION_IMAGE } = AppConstants;

export function PricingPage() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <HeroTitle shadow={false}>{t("pricing.hero.title")}</HeroTitle>
        <HeroDescription shadow={false}>
          {t("pricing.hero.description")}
        </HeroDescription>
        <HeroImage
          src={CERTIFICATION_IMAGE}
          alt={t("pricing.hero.illustrationText")}
          bigger
          noMargin
        />
      </Section>
      <Section variant='dark'>
        <SectionTitle variant='light' margin>
          {t("pricing.pricing.title")}
        </SectionTitle>
        <SimpleGrid cols={3}>
          <PricingOffer index={0} />
          <PricingOffer index={1} />
          <PricingOffer index={2} />
        </SimpleGrid>
      </Section>
      <Section>
        <Description margin>{t("pricing.brief.description")}</Description>
        <PrimaryButton variant='dark' download href={BRIEF_DOCUMENT}>
          {t("pricing.brief.cta")}
        </PrimaryButton>
      </Section>
      <Section variant='secondary'>
        <SectionTitle variant='light' margin>
          {t("pricing.leadership.title")}
        </SectionTitle>
        <Description variant='light' align='left' margin>
          {t("pricing.leadership.description_1")}
        </Description>
        <Description variant='light' align='left' margin>
          {t("pricing.leadership.description_2")}
        </Description>
        <Description variant='light' align='left' margin>
          {t("pricing.leadership.description_3")}
        </Description>
        <Stack align='center'>
          <PrimaryButton variant='white-secondary'>
            {t("pricing.leadership.cta")}
          </PrimaryButton>
          <Description align='left' variant='light'>
            {t("pricing.leadership.additional")}
          </Description>
        </Stack>
      </Section>
      <Section>
        <SectionTitle>{t("pricing.differences.title")}</SectionTitle>
        <Stack gap='lg' mt='xl'>
          <Description align='left'>
            {t("pricing.differences.description_1")}
          </Description>
          <Description align='left'>
            {t("pricing.differences.description_2")}
          </Description>
        </Stack>
      </Section>
      <Section variant='primary'>
        <SectionTitle variant='light'>
          {t("pricing.schools.title")}
        </SectionTitle>
        <Description variant='light' margin>
          {t("pricing.schools.description")}
        </Description>
        <PrimaryButton variant='white-primary'>
          {t("pricing.schools.cta")}
        </PrimaryButton>
      </Section>
      <Section>
        <Title big>{t("pricing.webinar.title")}</Title>
        <Description margin>{t("pricing.webinar.description_1")}</Description>
        <Description margin>{t("pricing.webinar.description_2")}</Description>
        <PrimaryButton href='https://xn--lerngesprche-ocb.com/lerngespraech-workshop/'>
          {t("pricing.webinar.cta")}
        </PrimaryButton>
      </Section>
    </>
  );
}
