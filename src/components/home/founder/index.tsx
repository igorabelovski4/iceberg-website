import Description from "@/components/description";
import Title from "@/components/title";
import { FOUNDER_IMAGE } from "@/constants/app";
import { Image, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";

import classes from "./index.module.css";

const Founder = () => {
  const { t } = useTranslation();

  return (
    <Stack gap={64} className={classes.wrapper}>
      <Image
        src={FOUNDER_IMAGE}
        alt={t("home.founder.name")}
        className={classes.image}
      />
      <Description align='left'>{t("home.founder.text")}</Description>
      <Stack gap={0} align='flex-start'>
        <Title margin={false}>{t("home.founder.name")}</Title>
        <Description>{t("home.founder.role")}</Description>
      </Stack>
    </Stack>
  );
};

export default Founder;
