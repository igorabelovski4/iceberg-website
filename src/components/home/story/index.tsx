import { Carousel } from "@mantine/carousel";
import { Center, Flex, Image, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";
import Autoplay from "embla-carousel-autoplay";

import { AppConstants } from "@/constants";
import { Description, SectionTitle } from "@/components";
import { IStoryCarouselSlide } from "@/types/common";
import { STORY_0_IMAGES, STORY_1_IMAGES } from "@/constants/app";
import { useRef } from "react";

const { STORY_ARROW } = AppConstants;

const StoryCarouselSlide = ({ image, index }: IStoryCarouselSlide) => {
  return (
    <Carousel.Slide key={index}>
      <Center>
        <Image src={image} w={"70%"} bdrs={"lg"} />
      </Center>
    </Carousel.Slide>
  );
};

const StoryCarousel = ({ images }: any) => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Carousel
      slideSize='100%'
      slideGap='md'
      withIndicators
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
      {images.map((image: any, index: any) => (
        <StoryCarouselSlide image={image} index={index} key={index} />
      ))}
    </Carousel>
  );
};

const Story = () => {
  const { t } = useTranslation();

  return (
    <Stack gap='xl'>
      <SectionTitle>{t("home.story.heading_1")}</SectionTitle>
      <Flex align='center' gap='xl'>
        <StoryCarousel images={STORY_0_IMAGES} />
        <Stack>
          <Description align='left'>
            {t("home.story.description_1")}
          </Description>
        </Stack>
      </Flex>
      <Flex my={48} justify='center'>
        <Image src={STORY_ARROW} alt='Illustration' w={64} />
      </Flex>
      <SectionTitle>{t("home.story.heading_2")}</SectionTitle>
      <Flex align='center' gap='xl'>
        <Description align='left'>{t("home.story.description_2")}</Description>
        <StoryCarousel images={STORY_1_IMAGES} />
      </Flex>
    </Stack>
  );
};

export default Story;
