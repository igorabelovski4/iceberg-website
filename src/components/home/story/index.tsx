import { Image, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";

import { AppConstants } from "@/constants";

const { STORY_1_IMAGE, STORY_2_IMAGE, STORY_ARROW } =AppConstants;

import classes from "./index.module.css";
import Title from "@/components/title";
import Description from "@/components/description";


const Story = () => {
  const { t } = useTranslation();

  return (
    <Stack gap={100} align="center">
      <Title margin={false}>
        {t(`home.story.steps.0.title`)}
      </Title>
      <Image src={STORY_1_IMAGE} className={classes.illustration} />
      <Description align='left'>
        {t(`home.story.steps.0.description`)}
      </Description>
      <Image src={STORY_ARROW} className={classes.arrow} />
      <Title margin={false}>
        {t(`home.story.steps.1.title`)}
      </Title>
      <Image src={STORY_2_IMAGE} className={classes.illustration} />
      <Description align='left'>
        {t(`home.story.steps.1.description`)}
      </Description>
      <Image src={STORY_ARROW} className={classes.arrow} />
    </Stack>
  );
};

export default Story;
