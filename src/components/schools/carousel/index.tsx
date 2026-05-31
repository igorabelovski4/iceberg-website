import { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { useTranslation } from "react-i18next";

import classes from "./index.module.css";
import { Box, Text } from "@mantine/core";
import PrimaryButton from "@/components/primary-button";
import { IShiftCarouselSlideItem, IShiftItem } from "@/types/common";
import Title from "@/components/title";

const ShiftCarouselSlide = ({ item }: IShiftCarouselSlideItem) => {
  const { t } = useTranslation();

  const [impactShown, setImpactShown] = useState(false);

  function handleToggleImpact() {
    setImpactShown((prev) => !prev);
  }

  return (
    <Carousel.Slide
      key={item.good.title}
      className={`${classes.slide} ${impactShown ? classes.good : classes.bad}`}
    >
      <Box className={classes.stars}></Box>
      <Box className={classes.stars2}></Box>
      <Box className={classes.stars3}></Box>
      <Title variant='light'>
        {impactShown ? item.good.title : item.bad.title}
      </Title>
      <Text className={classes.description}>
        {impactShown ? item.good.description : item.bad.description}
      </Text>
      <PrimaryButton variant='white-dark' onClick={handleToggleImpact}>
        {t(`schools.shift.${impactShown ? "backReality" : "seeImpact"}`)}
      </PrimaryButton>
    </Carousel.Slide>
  );
};

const ShiftCarousel = () => {
  const { t } = useTranslation();

  const shiftItems = t("schools.shift.items", {
    returnObjects: true,
  }) as IShiftItem[];

  return (
    <Carousel
      withIndicators
      slideSize='100%'
      controlSize={40}
      className={classes.carousel}
      classNames={{ controls: classes.controls, control: classes.control }}
      emblaOptions={{
        loop: true,
        dragFree: false,
        slidesToScroll: 1,
      }}
    >
      {shiftItems.map((item, index) => (
        <ShiftCarouselSlide item={item} key={index} />
      ))}
    </Carousel>
  );
};

export default ShiftCarousel;
