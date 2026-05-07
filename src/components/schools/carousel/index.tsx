import { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { AppConstants } from "@/constants";
import { useTranslation } from "react-i18next";
const { NUMBER_OF_SHIFT_ITEMS } = AppConstants;

import classes from "./index.module.css";
import { Box, Text } from "@mantine/core";
import PrimaryButton from "@/components/primary-button";
import { IArrayItem } from "@/types/common";
import Title from "@/components/title";

const ShiftCarouselSlide = ({ index }: IArrayItem) => {
  const { t } = useTranslation();
  const [impactShown, setImpactShown] = useState(false);

  function handleToggleImpact() {
    setImpactShown((prev) => !prev);
  }

  return (
    <Carousel.Slide
      key={t(`schools.shift.items.${index}.title`)}
      className={`${classes.slide} ${impactShown ? classes.good : classes.bad}`}
    >
      <Box className={classes.stars}></Box>
      <Box className={classes.stars2}></Box>
      <Box className={classes.stars3}></Box>
      <Title variant='light'>
        {t(
          `schools.shift.items.${index}.${impactShown ? "good" : "bad"}.title`,
        )}
      </Title>
      <Text className={classes.description}>
        {t(
          `schools.shift.items.${index}.${impactShown ? "good" : "bad"}.description`,
        )}
      </Text>
      <PrimaryButton variant='white-dark' onClick={handleToggleImpact}>
        {t(`schools.shift.${impactShown ? "backReality" : "seeImpact"}`)}
      </PrimaryButton>
    </Carousel.Slide>
  );
};

const ShiftCarousel = () => {
  return (
    <Carousel
      withIndicators
      slideSize='100%'
      controlSize={40}
      className={classes.carousel}
      classNames={{ control: classes.control }}
      emblaOptions={{
        loop: true,
        dragFree: false,
        slidesToScroll: 1,
      }}
    >
      {Array(NUMBER_OF_SHIFT_ITEMS)
        .fill(null)
        .map((_, index) => (
          <ShiftCarouselSlide index={index} key={index} />
        ))}
    </Carousel>
  );
};

export default ShiftCarousel;
