import { Carousel } from "@mantine/carousel";
import { Center, Flex, Group, Image, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";
import Autoplay from "embla-carousel-autoplay";

import { Description, Title } from "@/components";
import { useRef } from "react";
import { IFeedbackItem } from "@/types/common";

import classes from "./index.module.css";
import { AVATAR_IMAGE, STAR_IMAGE } from "@/constants/app";

const FeedbackCaourselSlide = ({ feedback, index }: any) => {
  return (
    <Carousel.Slide key={index}>
      <Stack className={classes.box}>
        <Center className={classes.inner}>
          <Image src={AVATAR_IMAGE} w={64} h={"auto"} />
        </Center>
        <Stack className={classes.wrapper} align='center'>
          <Group gap={"md"}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Image src={STAR_IMAGE} w={24} />
            ))}
          </Group>
          <Description>{feedback.message}</Description>
          <Title small>{feedback.author}</Title>
        </Stack>
      </Stack>
    </Carousel.Slide>
  );
};

const FeedbackCarousel = () => {
  const { t } = useTranslation();
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  const feedbacks = t("home.feedback.items", {
    returnObjects: true,
  }) as IFeedbackItem[];

  return (
    <Carousel
      slideSize='100%'
      slideGap='md'
      withIndicators={false}
      withControls={false}
      emblaOptions={{
        loop: true,
        dragFree: false,
        slidesToScroll: 1,
      }}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
    >
      {feedbacks.map((feedback, index) => (
        <FeedbackCaourselSlide feedback={feedback} key={index} />
      ))}
    </Carousel>
  );
};

const Feedback = () => {
  const { t } = useTranslation();

  return (
    <Flex gap={"100"} align={"center"}>
      <Description align='left'>{t("home.feedback.description")}</Description>
      <FeedbackCarousel />
    </Flex>
  );
};

export default Feedback;
