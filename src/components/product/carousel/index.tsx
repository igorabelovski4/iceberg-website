import { Carousel } from "@mantine/carousel";
import { useTranslation } from "react-i18next";
import { AppConstants } from "@/constants";
import { IArrayItem } from "@/types/common";
import Title from "@/components/title";
import Description from "@/components/description";
import { Grid, Image } from "@mantine/core";

const { NUMBER_OF_BENEFITS, OUTCOME_IMAGE_MAP } = AppConstants;

import classes from "./index.module.css";

const OutcomeCarouselSlide = ({ index }: IArrayItem) => {
  const { t } = useTranslation();

  const illustrationKey = t(
    `product.benefits.items.${index}.illustration`,
  ) as keyof typeof OUTCOME_IMAGE_MAP;

  const illustration = OUTCOME_IMAGE_MAP[illustrationKey];

  return (
    <Carousel.Slide
      key={t(`product.benefits.items.${index}.illustration`)}
      className={classes.slide}
    >
      <Grid>
        {index % 2 === 0 && (
          <Grid.Col span={5}>
            <Image src={illustration} className={classes.illustration} />
          </Grid.Col>
        )}
        <Grid.Col span={7}>
          <Title alignLeft>{t(`product.benefits.items.${index}.title`)}</Title>
          <Description align='left'>
            {t(`product.benefits.items.${index}.description`)}
          </Description>
        </Grid.Col>
        {index % 2 !== 0 && (
          <Grid.Col span={5}>
            <Image src={illustration} className={classes.illustration} />
          </Grid.Col>
        )}
      </Grid>
    </Carousel.Slide>
  );
};

const OutcomeCarousel = () => {
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
      {Array(NUMBER_OF_BENEFITS)
        .fill(null)
        .map((_, index) => (
          <OutcomeCarouselSlide index={index} key={index} />
        ))}
    </Carousel>
  );
};

export default OutcomeCarousel;
