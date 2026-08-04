import { useTranslation } from "react-i18next";
import { AppConstants } from "@/constants";

import {
  Eyebrow,
  HeroDescription,
  HeroImage,
  HeroTitle,
  PrimaryButton,
  Section,
  Description,
  SectionTitle,
  SchoolFaq,
  Title,
  Calendly,
  Video,
} from "@/components";

const {
  TEAM_IMAGE,
  SCHOOLS_VIDEO_MP4,
  SCHOOLS_VIDEO_POSTER_DE,
  SCHOOLS_VIDEO_POSTER_EN,
  SCHOOLS_VIDEO_WEBM,
} = AppConstants;

export function SchoolsPage() {
  const { t, i18n } = useTranslation();

  const videoPoster =
    i18n.language === "de" ? SCHOOLS_VIDEO_POSTER_DE : SCHOOLS_VIDEO_POSTER_EN;

  return (
    <>
      <Section>
        <HeroTitle shadow={false}>{t("schools.hero.title")}</HeroTitle>
        <HeroDescription shadow={false}>
          {t("schools.hero.description")}
        </HeroDescription>
        <HeroImage src={TEAM_IMAGE} alt={t("schools.hero.illustrationText")} />
      </Section>
      <Section>
        <Eyebrow>{t("schools.video.eyebrow")}</Eyebrow>
        <SectionTitle>{t("schools.video.title")}</SectionTitle>
        <Description margin>{t("schools.video.subtitle")}</Description>
        <Video
          srcWebm={SCHOOLS_VIDEO_WEBM}
          srcMp4={SCHOOLS_VIDEO_MP4}
          srcPoster={videoPoster}
        />
      </Section>
      <Section>
        <SectionTitle>{t("schools.booking.title")}</SectionTitle>
        <Calendly />
      </Section>
      <Section variant='dark'>
        <Eyebrow variant='light'>{t("schools.faq.eyebrow")}</Eyebrow>
        <SectionTitle variant='light' margin>
          {t("schools.faq.title")}
        </SectionTitle>
        <SchoolFaq />
      </Section>
      <Section variant='primary'>
        <Title variant='light' big>
          {t("schools.cta.title")}
        </Title>
        <SectionTitle variant='light' margin>
          {t("schools.cta.subtitle")}
        </SectionTitle>
        <Description variant='light' margin>
          {t("schools.cta.description")}
        </Description>
        <PrimaryButton variant='secondary'>
          {t("schools.cta.cta")}
        </PrimaryButton>
      </Section>
    </>
  );
}
