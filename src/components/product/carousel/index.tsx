import { Carousel } from "@mantine/carousel";
import { useTranslation } from "react-i18next";
import { AppConstants } from "@/constants";
import { IBenefitItem, IOutcomeSlide } from "@/types/common";
import Title from "@/components/title";
import Description from "@/components/description";
import { Grid, Image } from "@mantine/core";

const { OUTCOME_IMAGE_MAP } = AppConstants;

import classes from "./index.module.css";

const OutcomeCarouselSlide = ({ benefit, index }: IOutcomeSlide) => {
  const illustrationKey =
    benefit.illustration as keyof typeof OUTCOME_IMAGE_MAP;
  const illustrationSrc = OUTCOME_IMAGE_MAP[illustrationKey];

  return (
    <Carousel.Slide key={benefit.illustration} className={classes.slide}>
      <Grid>
        {index % 2 === 0 && (
          <Grid.Col span={5}>
            <Image src={illustrationSrc} className={classes.illustration} />
          </Grid.Col>
        )}
        <Grid.Col span={7}>
          <Title alignLeft>{benefit.title}</Title>
          <Description align='left'>{benefit.description}</Description>
        </Grid.Col>
        {index % 2 !== 0 && (
          <Grid.Col span={5}>
            <Image src={illustrationSrc} className={classes.illustration} />
          </Grid.Col>
        )}
      </Grid>
    </Carousel.Slide>
  );
};

const OutcomeCarousel = () => {
  const { t } = useTranslation();

  const benefits = t("product.benefits.items", {
    returnObjects: true,
  }) as IBenefitItem[];

  return (
    <Carousel
      slideGap='md'
      withIndicators
      slideSize='100%'
      controlSize={40}
      className={classes.carousel}
      classNames={{
        indicators: classes.indicators,
        indicator: classes.indicator,
      }}
      controlsOffset='0'
      emblaOptions={{
        loop: true,
        dragFree: false,
        slidesToScroll: 1,
      }}
    >
      {benefits.map((benefit, index) => (
        <OutcomeCarouselSlide benefit={benefit} index={index} key={index} />
      ))}
    </Carousel>
  );
};

export default OutcomeCarousel;
