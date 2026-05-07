import { Box, Image, SimpleGrid } from "@mantine/core";
import { AppConstants } from "@/constants";
const { NUMBER_OF_WORK_CARDS, SCHOOL_WORK_IMAGE_MAP } = AppConstants;
import { useTranslation } from "react-i18next";
import { ICard, ICardIllustrationName } from "@/types/common";
import Title from "@/components/title";
import classes from "./index.module.css";
import Description from "@/components/description";

const Card = ({ index, illustration }: ICard) => {
  const { t } = useTranslation();

  const illustrationImg = SCHOOL_WORK_IMAGE_MAP[illustration];

  return (
    <Box className={classes.card}>
      <Box className={classes.front}>
        <Title>{t(`schools.work.items.${index}.title`)}</Title>
        <Image src={illustrationImg} className={classes.cardImg} />
      </Box>
      <Box className={classes.back}>
        <Description variant='light' align='left'>
          {t(`schools.work.items.${index}.description`)}
        </Description>
      </Box>
    </Box>
  );
};

const WorkCards = () => {
  const { t } = useTranslation();

  return (
    <SimpleGrid cols={3} className={classes.wrapper}>
      {Array(NUMBER_OF_WORK_CARDS)
        .fill(null)
        .map((_, index) => (
          <Card
            index={index}
            key={index}
            illustration={
              t(
                `schools.work.items.${index}.illustration`,
              ) as ICardIllustrationName
            }
          />
        ))}
    </SimpleGrid>
  );
};

export default WorkCards;
