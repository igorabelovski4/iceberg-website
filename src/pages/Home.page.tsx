import { useTranslation } from "react-i18next";
import { AppConstants } from "@/constants";
import {
  BackgroundSection,
  Difference,
  Eyebrow,
  HeroCard,
  HeroDescription,
  HeroTitle,
  MembershipCards,
  PerspectiveSwitch,
  PhaseCard,
  PrimaryButton,
  Section,
  SectionTitle,
  Story,
} from "@/components";
import { Image, SimpleGrid } from "@mantine/core";
import { IBadgeItem } from "@/types/common";

const { LANDING_HERO_IMAGE, HERO_3D_VIDEO_IMAGE, FOUNDER_IMAGE } = AppConstants;

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
          {t("cta.start")}
        </PrimaryButton>
        <Image src={HERO_3D_VIDEO_IMAGE} py={64} />
        <SimpleGrid cols={3} spacing={36}>
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
        <Eyebrow>{t("home.story.eyebrow")}</Eyebrow>
        <Story />
      </Section>
      <Section variant='secondary'>
        <Eyebrow variant='light'>{t("home.nutshell.eyebrow")}</Eyebrow>
        <SectionTitle variant='light' margin>
          {t("home.nutshell.title")}
        </SectionTitle>
        <PrimaryButton variant='white-secondary' icon>
          {t("cta.try")}
        </PrimaryButton>
      </Section>
      <Section>
        <Eyebrow variant='primary'>{t("home.difference.eyebrow")}</Eyebrow>
        <SectionTitle margin>{t("home.difference.title")}</SectionTitle>
        <Difference />
      </Section>
      <Section variant='dark'>
        <Eyebrow variant='light'>{t("home.howWorks.eyebrow")}</Eyebrow>
        <SectionTitle variant='light' margin>
          {t("home.howWorks.title")}
        </SectionTitle>
        <PhaseCard />
      </Section>
      <Section>
        <SectionTitle margin>{t("home.audience.title")}</SectionTitle>
        <PerspectiveSwitch />
      </Section>
      <Section>
        <Eyebrow>{t("home.support.eyebrow")}</Eyebrow>
        <SectionTitle margin>{t("home.support.title")}</SectionTitle>
        <MembershipCards />
      </Section>
      <Section>
        <Eyebrow>{t("home.founder.eyebrow")}</Eyebrow>
        <SectionTitle margin>{t("home.founder.title")}</SectionTitle>
        <Image
          src={FOUNDER_IMAGE}
          alt={t("aboutUs.founder.name")}
          h={500}
          radius='xl'
        />
      </Section>
      <Section variant='primary'></Section>
    </>
  );
}
