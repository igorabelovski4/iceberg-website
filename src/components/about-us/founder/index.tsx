import Description from "@/components/description";
import Title from "@/components/title";
import { FOUNDER_IMAGE } from "@/constants/app";
import { Flex, Image, Stack, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

import classes from "./index.module.css";
import { IBiographyItem } from "@/types/common";

const Founder = () => {
  const { t } = useTranslation();

  const biographyTexts = t("aboutUs.founder.biography", {
    returnObjects: true,
  }) as IBiographyItem[];

  return (
    <Flex className={classes.wrapper}>
      <Image src={FOUNDER_IMAGE} alt={t("aboutUs.founder.name")} />
      <Stack align='flex-start' className={classes.inner}>
        <Title>{t("aboutUs.founder.name")}</Title>
        {biographyTexts.map((text, index) => (
          <Description key={index} align='left'>
            {text.text}
          </Description>
        ))}
      </Stack>
    </Flex>
  );
};

export default Founder;
