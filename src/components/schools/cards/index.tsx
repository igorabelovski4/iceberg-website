import { Box, Image, SimpleGrid } from "@mantine/core";
import { AppConstants } from "@/constants";
const { ILLUSTRATION_IMAGE_MAP } = AppConstants;
import { useTranslation } from "react-i18next";
import { ICard, ICardIllustrationName, ISchoolsWorkItem } from "@/types/common";
import Title from "@/components/title";
import classes from "./index.module.css";
import Description from "@/components/description";

const Card = ({ index, illustration }: ICard) => {
  const { t } = useTranslation();

  const illustrationImg = ILLUSTRATION_IMAGE_MAP[illustration];

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

  const cards = t("schools.work.items", {
    returnObjects: true,
  }) as ISchoolsWorkItem[];

  return (
    <SimpleGrid cols={3} className={classes.wrapper}>
      {cards.map((card, index) => (
        <Card
          index={index}
          key={index}
          illustration={card.illustration as ICardIllustrationName}
        />
      ))}
    </SimpleGrid>
  );
};

export default WorkCards;
