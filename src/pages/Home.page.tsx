import { useTranslation } from "react-i18next";
import { AppConstants } from "@/constants";
import {
  BackgroundSection,
  Description,
  Eyebrow,
  Feedback,
  Founder,
  HeroCard,
  HeroTitle,
  PricingCards,
  PrimaryButton,
  Routine,
  Section,
  SectionTitle,
  Story,
  Video,
} from "@/components";
import { Center, Image, SimpleGrid, Stack } from "@mantine/core";
import { IBadgeItem } from "@/types/common";

const {
  LANDING_HERO_IMAGE,
  HERO_3D_VIDEO_IMAGE,
  HOME_VIDEO_MP4,
  HOME_VIDEO_POSTER_DE,
  HOME_VIDEO_POSTER_EN,
  HOME_VIDEO_WEBM,
} = AppConstants;

export function HomePage() {
  const { t, i18n } = useTranslation();

  const videoPoster =
    i18n.language === "de" ? HOME_VIDEO_POSTER_DE : HOME_VIDEO_POSTER_EN;

  const badges = t("home.trust", {
    returnObjects: true,
  }) as IBadgeItem[];

  return (
    <>
      <BackgroundSection imageSrc={LANDING_HERO_IMAGE}>
        <HeroTitle variant='light' subtitle={t("home.hero.subtitle")}>
          {t("home.hero.title")}
        </HeroTitle>
        <Center>
          <Image
            src={HERO_3D_VIDEO_IMAGE}
            py={{ base: 24, sm: 32, lg: 44, xl: 64 }}
            w={"80%"}
          />
        </Center>
        <PrimaryButton variant='white-primary' icon>
          {t("home.hero.cta")}
        </PrimaryButton>
      </BackgroundSection>
      <Section>
        <Story />
      </Section>
      <Section>
        <Eyebrow>{t("home.idea.eyebrow")}</Eyebrow>
        <SectionTitle>{t("home.idea.title")}</SectionTitle>
        <Description margin>{t("home.idea.subtitle")}</Description>
        <Stack align='center' gap='xl'>
          <Video
            srcWebm={HOME_VIDEO_WEBM}
            srcMp4={HOME_VIDEO_MP4}
            srcPoster={videoPoster}
          />
          <PrimaryButton variant='primary' icon>
            {t("home.hero.cta")}
          </PrimaryButton>
        </Stack>
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
        <PricingCards />
      </Section>
      <Section>
        <Feedback />
      </Section>
      <Section variant='secondary'>
        <SectionTitle variant='light' margin>
          {t("home.footer.title")}
        </SectionTitle>
        <PrimaryButton variant='white-secondary'>
          {t("home.footer.button")}
        </PrimaryButton>
      </Section>
      <Section variant='dark'>
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
      </Section>
    </>
  );
}
