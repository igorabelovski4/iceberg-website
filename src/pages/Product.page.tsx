import { useTranslation } from "react-i18next";
import {
  Description,
  Download,
  Eyebrow,
  Features,
  HeroDescription,
  HeroTitle,
  OutcomeCarousel,
  PrimaryButton,
  Section,
  SectionTitle,
  UserInterface,
  Viewports,
} from "@/components";
import { Box, Stack } from "@mantine/core";
import { IMethodologyDescription } from "@/types/common";

export function ProductPage() {
  const { t } = useTranslation();

  const methodologyDescriptions = t("product.methodology.descriptions", {
    returnObjects: true,
  }) as IMethodologyDescription[];

  return (
    <>
      <Section variant='primary' largeBottomPadding>
        <HeroTitle variant='light'>{t("product.hero.title")}</HeroTitle>
        <HeroDescription variant='light'>
          {t("product.hero.description")}
        </HeroDescription>
      </Section>
      <Box style={{ marginTop: "-160px" }}>
        <Section>
          <Viewports />
        </Section>
        <Section>
          <Download />
        </Section>
        <Section>
          <Eyebrow>{t("product.features.eyebrow")}</Eyebrow>
          <SectionTitle>{t("product.features.title")}</SectionTitle>
          <Features />
        </Section>
        <Section>
          <Eyebrow>{t("product.experience.eyebrow")}</Eyebrow>
          <SectionTitle margin>{t("product.experience.title")}</SectionTitle>
          <UserInterface />
        </Section>
        <Section>
          <Eyebrow>{t("product.methodology.eyebrow")}</Eyebrow>
          <SectionTitle>{t("product.methodology.title")}</SectionTitle>
          <Stack gap='lg' mt='xl'>
            {methodologyDescriptions.map((description, index) => (
              <Description align='left' key={index}>
                {description.text}
              </Description>
            ))}
          </Stack>
        </Section>
        <Section>
          <Eyebrow>{t("product.benefits.eyebrow")}</Eyebrow>
          <SectionTitle margin>{t("product.benefits.title")}</SectionTitle>
          <OutcomeCarousel />
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
      </Box>
    </>
  );
}
