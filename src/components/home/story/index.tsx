import { Flex, Image, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";

import { AppConstants } from "@/constants";
import { Description, SectionTitle } from "@/components";

const { STORY_1_IMAGE, STORY_2_IMAGE, STORY_ARROW } = AppConstants;

const Story = () => {
  const { t } = useTranslation();

  return (
    <Stack gap='xl'>
      <SectionTitle>{t("home.story.heading_1")}</SectionTitle>
      <Flex align='center' gap='xl'>
        <Image src={STORY_1_IMAGE} alt='Illustration' w={"80%"} />
        <Stack>
          <Description align='left'>
            {t("home.story.description_1")}
          </Description>
          <Description align='left'>
            {t("home.story.description_2")}
          </Description>
        </Stack>
      </Flex>
      <Flex my={80} justify='center'>
        <Image src={STORY_ARROW} alt='Illustration' w={64} />
      </Flex>
      <SectionTitle>{t("home.story.heading_2")}</SectionTitle>
      <Flex align='center' gap='xl'>
        <Description align='left'>{t("home.story.description_3")}</Description>
        <Image src={STORY_2_IMAGE} alt='Illustration' w={"80%"} />
      </Flex>
    </Stack>
  );
};

export default Story;
