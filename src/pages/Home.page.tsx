import { useTranslation } from "react-i18next";
import { AppConstants } from "@/constants";
import {
  BackgroundSection,
  Description,
  Download,
  Eyebrow,
  Founder,
  HeroCard,
  HeroDescription,
  HeroTitle,
  HomeFaq,
  MembershipCards,
  PrimaryButton,
  Routine,
  Section,
  SectionTitle,
  Story,
  UserInterface,
  Video,
} from "@/components";
import { Image, SimpleGrid, Stack } from "@mantine/core";
import { IBadgeItem } from "@/types/common";
import {
  HOME_VIDEO_MP4,
  HOME_VIDEO_POSTER,
  HOME_VIDEO_WEBM,
  ICEBERG_DEEP_IMAGE,
  ICEBERG_OVERVIEW,
} from "@/constants/app";

const { LANDING_HERO_IMAGE, HERO_3D_VIDEO_IMAGE } = AppConstants;

export function HomePage() {
  const { t } = useTranslation();

  const badges = t("home.hero.badges", {
    returnObjects: true,
  }) as IBadgeItem[];

  return (
    <>
      <BackgroundSection imageSrc={LANDING_HERO_IMAGE}>
        <HeroTitle variant='light' subtitle={t("home.hero.subtitle")}>
          {t("home.hero.title")}
        </HeroTitle>
        <HeroDescription variant='light' margin>
          {t("home.hero.description")}
        </HeroDescription>
        <PrimaryButton variant='secondary' icon>
          {t("cta.try")}
        </PrimaryButton>
        <Image
          src={HERO_3D_VIDEO_IMAGE}
          py={{ base: 24, sm: 32, lg: 44, xl: 64 }}
        />
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={{ base: 16, sm: 36 }}>
          {badges.map((badge, index) => (
            <HeroCard
              key={index}
              icon={badge.icon}
              title={badge.title}
              items={badge.items}
            />
          ))}
        </SimpleGrid>
      </BackgroundSection>
      <Section>
        <Story />
      </Section>
      <Section>
        <Eyebrow>{t("home.idea.eyebrow")}</Eyebrow>
        <SectionTitle margin>{t("home.idea.title")}</SectionTitle>
        <Video
          srcWebm={HOME_VIDEO_WEBM}
          srcMp4={HOME_VIDEO_MP4}
          srcPoster={HOME_VIDEO_POSTER}
        />
      </Section>
      <Section>
        <SimpleGrid cols={2} spacing={120}>
          <Routine />
          <Founder />
        </SimpleGrid>
      </Section>
      <Section variant='dark'>
        <Eyebrow variant='light'>{t("home.support.eyebrow")}</Eyebrow>
        <SectionTitle variant='light' margin>
          {t("home.support.title")}
        </SectionTitle>
        <MembershipCards />
      </Section>
      <Section>
        <Eyebrow>{t("home.experience.eyebrow")}</Eyebrow>
        <SectionTitle margin>{t("home.experience.title")}</SectionTitle>
        <Stack gap='80'>
          <UserInterface />
          <Download />
        </Stack>
      </Section>
      <BackgroundSection imageSrc={ICEBERG_DEEP_IMAGE}>
        <SectionTitle margin>{t("home.faq.title")}</SectionTitle>
        <HomeFaq />
      </BackgroundSection>
      <Section>
        <SimpleGrid cols={2} spacing={64}>
          <Image src={ICEBERG_OVERVIEW} w='100%' radius='xl' />
          <Stack>
            <SectionTitle margin>{t("home.iceberg.title")}</SectionTitle>
            <Description align='left'>{t("home.iceberg.text")}</Description>
          </Stack>
        </SimpleGrid>
      </Section>
    </>
  );
}
