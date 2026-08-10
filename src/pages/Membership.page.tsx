import { useTranslation } from "react-i18next";
import { AppConstants } from "@/constants";

import {
  Description,
  Eyebrow,
  HeroDescription,
  HeroImage,
  HeroTitle,
  MembershipOffer,
  PrimaryButton,
  Section,
  SectionTitle,
  Title,
} from "@/components";
import { SimpleGrid, Stack } from "@mantine/core";

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
      <Section variant='dark'>
        <Eyebrow variant='light'>{t("membership.pricing.eyebrow")}</Eyebrow>
        <SectionTitle variant='light' margin>
          {t("membership.pricing.title")}
        </SectionTitle>
        <SimpleGrid cols={3}>
          <MembershipOffer index={0} />
          <MembershipOffer index={1} />
          <MembershipOffer index={2} />
        </SimpleGrid>
      </Section>
      <Section>
        <SectionTitle>{t("membership.differences.title")}</SectionTitle>
        <Stack gap='lg' mt='xl'>
          <Description align='left'>
            {t("membership.differences.description_1")}
          </Description>
          <Description align='left'>
            {t("membership.differences.description_2")}
          </Description>
        </Stack>
      </Section>
      <Section variant='secondary'>
        <SectionTitle variant='light'>
          {t("membership.schools.title")}
        </SectionTitle>
        <Description variant='light' margin>
          {t("membership.schools.description")}
        </Description>
        <PrimaryButton variant='white-secondary'>
          {t("membership.schools.cta")}
        </PrimaryButton>
      </Section>
      <Section>
        <Title big>{t("membership.webinar.title")}</Title>
        <Description margin>
          {t("membership.webinar.description_1")}
        </Description>
        <Description margin>
          {t("membership.webinar.description_2")}
        </Description>
        <PrimaryButton href='https://xn--lerngesprche-ocb.com/lerngespraech-workshop/'>
          {t("membership.webinar.cta")}
        </PrimaryButton>
      </Section>
    </>
  );
}
