import { Card, Flex, Image, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";

import classes from "./index.module.css";
import SectionTitle from "@/components/section-title";
import Description from "@/components/description";
import PrimaryButton from "@/components/primary-button";
import { AppConstants } from "@/constants";
import { LETTER_IMAGE } from "@/constants/app";
import { ISupportDescription } from "@/types/common";

const Letter = () => {
  const { t, i18n } = useTranslation();

  const letterTexts = t("pricing.support.descriptions", {
    returnObjects: true,
  }) as ISupportDescription[];

  const briefDocuments: Record<string, string> = {
    de: AppConstants.BRIEF_DOCUMENT_DE,
    en: AppConstants.BRIEF_DOCUMENT_EN,
    us: AppConstants.BRIEF_DOCUMENT_US,
    ch: AppConstants.BRIEF_DOCUMENT_CH,
  };

  const briefDocument =
    briefDocuments[i18n.language] ?? AppConstants.BRIEF_DOCUMENT_DE;

  return (
    <Stack gap={48} mt={48}>
      <Card className={classes.card}>
        <SectionTitle margin>{t("pricing.support.title")}</SectionTitle>

        {letterTexts.map((text, index) => (
          <Description align='left' margin key={index}>
            {text.text}
          </Description>
        ))}
      </Card>

      <Card className={classes.card}>
        <Flex gap={"100"}>
          <Image src={LETTER_IMAGE} w={"20%"} />

          <Stack align='flex-start'>
            <Description>{t("pricing.letter.subtitle")}</Description>

            <SectionTitle>{t("pricing.letter.title")}</SectionTitle>

            <Description align='left' margin>
              {t("pricing.letter.description")}
            </Description>

            <PrimaryButton variant='dark' download href={briefDocument}>
              {t("pricing.letter.cta")}
            </PrimaryButton>
          </Stack>
        </Flex>
      </Card>
    </Stack>
  );
};

export default Letter;
