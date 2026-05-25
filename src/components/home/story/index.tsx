import { STORY_STEPS_IMAGE_MAP } from "@/constants/app";
import { IStepItem, IStoryCard } from "@/types/common";
import { Box, Flex, Image, Stack, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

import classes from "./index.module.css";
import Title from "@/components/title";
import Description from "@/components/description";
import { useState } from "react";

const StoryCard = ({ num, illustration, activeStep, onClick }: IStoryCard) => {
  const illustrationSrc = STORY_STEPS_IMAGE_MAP[illustration];

  return (
    <Box
      className={`${classes.card} ${activeStep === num ? classes.active : ""}`}
      onClick={() => onClick?.(num)}
    >
      <Stack justify='center' align='center'>
        <Image src={illustrationSrc} className={classes.illustration} />
        <Text className={classes.step}>{num + 1}</Text>
      </Stack>
    </Box>
  );
};

const Story = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useTranslation();

  const steps = t("home.story.steps", {
    returnObjects: true,
  }) as IStepItem[];

  function handleClick(value: number) {
    setActiveStep(value);
  }
  return (
    <Stack gap={80}>
      <Flex justify='space-between' className={classes.wrapper}>
        {steps.map((step, index) => (
          <StoryCard
            key={index}
            num={index}
            activeStep={activeStep}
            onClick={handleClick}
            illustration={step.illustration}
          />
        ))}
      </Flex>
      <Stack gap={12}>
        <Title alignLeft>{t(`home.story.steps.${activeStep}.title`)}</Title>
        <Description align='left'>
          {t(`home.story.steps.${activeStep}.description`)}
        </Description>
      </Stack>
    </Stack>
  );
};

export default Story;
