import Description from "@/components/description";
import Title from "@/components/title";
import {
  FOUNDER_IMAGE,
  NUMBER_OF_FOUNDER_BIOGRAPHY_TEXTS,
} from "@/constants/app";
import { Flex, Image, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";

import classes from "./index.module.css";

const Founder = () => {
  const { t } = useTranslation();

  return (
    <Flex className={classes.wrapper}>
      <Image src={FOUNDER_IMAGE} alt={t("aboutUs.founder.name")} />
      <Stack align='flex-start' className={classes.inner}>
        <Title>{t("aboutUs.founder.name")}</Title>
        {Array(NUMBER_OF_FOUNDER_BIOGRAPHY_TEXTS)
          .fill(null)
          .map((_, index) => (
            <Description key={index} align='left'>
              {t(`aboutUs.founder.biography.${index}.text`)}
            </Description>
          ))}
      </Stack>
    </Flex>
  );
};

export default Founder;
