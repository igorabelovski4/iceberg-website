import { useTranslation } from "react-i18next";

import {
  Description,
  PricingOffer,
  PrimaryButton,
  Section,
  SectionTitle,
  Title,
  Letter,
} from "@/components";
import { SimpleGrid, Stack } from "@mantine/core";

export function PricingPage() {
  const { t } = useTranslation();

  return (
    <>
      <Section variant='dark'>
        <SectionTitle variant='light'>
          {t("pricing.pricing.title")}
        </SectionTitle>
        <Description variant='light' margin>
          {t("pricing.pricing.description")}
        </Description>
        <SimpleGrid cols={2} mt={"64"}>
          <PricingOffer index={0} />
          <PricingOffer index={1} />
        </SimpleGrid>
        <Letter />
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
