import { Box, Image, SimpleGrid } from "@mantine/core";
import { AppConstants } from "@/constants";
const { NUMBER_OF_PEDAGOGIC_CARDS, ILLUSTRATION_IMAGE_MAP } = AppConstants;
import { useTranslation } from "react-i18next";
import { ICard, ICardIllustrationName } from "@/types/common";
import Title from "@/components/title";
import classes from "./index.module.css";
import Description from "@/components/description";

const PedagogicCard = ({ index, illustration }: ICard) => {
  const { t } = useTranslation();

  const illustrationImg = ILLUSTRATION_IMAGE_MAP[illustration];

  return (
    <Box className={classes.card}>
      <Box className={classes.front}>
        <Title>{t(`aboutUs.pedagogic.cards.${index}.title`)}</Title>
        <Image src={illustrationImg} className={classes.cardImg} />
      </Box>
      <Box className={classes.back}>
        <Description variant='light' align='left'>
          {t(`aboutUs.pedagogic.cards.${index}.description`)}
        </Description>
      </Box>
    </Box>
  );
};

const PedagogicCards = () => {
  const { t } = useTranslation();

  return (
    <SimpleGrid cols={3} className={classes.wrapper}>
      {Array(NUMBER_OF_PEDAGOGIC_CARDS)
        .fill(null)
        .map((_, index) => (
          <PedagogicCard
            index={index}
            key={index}
            illustration={
              t(
                `aboutUs.pedagogic.cards.${index}.illustration`,
              ) as ICardIllustrationName
            }
          />
        ))}
    </SimpleGrid>
  );
};

export default PedagogicCards;
