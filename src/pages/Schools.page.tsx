import { useTranslation } from "react-i18next";
import { AppConstants } from "@/constants";

import {
  Eyebrow,
  HeroTitle,
  PrimaryButton,
  Section,
  Description,
  SectionTitle,
  SchoolFaq,
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
        <Calendly />
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
      <Section variant='dark'>
        <Eyebrow variant='light'>{t("schools.faq.eyebrow")}</Eyebrow>
        <SectionTitle variant='light' margin>
          {t("schools.faq.title")}
        </SectionTitle>
        <SchoolFaq />
      </Section>
      <Section variant='primary'>
        <SectionTitle variant='light'>{t("schools.cta.title")}</SectionTitle>
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
