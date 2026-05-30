import { STORY_STEPS_IMAGE_MAP } from "@/constants/app";
import { IStepItem, IStoryCard } from "@/types/common";
import {
  Box,
  Divider,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
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
      <Group justify='center' align='center' gap='xl'>
        <Text className={classes.step}>{num + 1}</Text>
        <Image src={illustrationSrc} className={classes.illustration} />
      </Group>
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
      <SimpleGrid cols={{ base: 2, sm: 3 }}>
        {steps.map((step, index) => (
          <StoryCard
            key={index}
            num={index}
            activeStep={activeStep}
            onClick={handleClick}
            illustration={step.illustration}
          />
        ))}
      </SimpleGrid>
      <Stack gap={12} align='flex-start'>
        <Group>
          <Divider className={classes.divider} />
          <Text className={classes.activeStep}>
            {t("home.story.heading")} {activeStep + 1}
          </Text>
        </Group>
        <Title alignLeft>{t(`home.story.steps.${activeStep}.title`)}</Title>
        <Description align='left'>
          {t(`home.story.steps.${activeStep}.description`)}
        </Description>
      </Stack>
    </Stack>
  );
};

export default Story;
