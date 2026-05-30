import { useTranslation } from "react-i18next";
import { LOGO_IMAGE } from "@/constants/app";
import { Burger, Flex, Image } from "@mantine/core";
import { LanguagePicker, Navigation, PrimaryButton } from "@/components";

import classes from "./index.module.css";
import { IHeader } from "@/types/common";

const Header = ({ opened, onClick }: IHeader) => {
  const { t } = useTranslation();

  return (
    <Flex className={classes.wrapper}>
      <Flex className={classes.inner}>
        <Burger opened={opened} onClick={onClick} hiddenFrom='lg' size='sm' />
        <Image src={LOGO_IMAGE} className={classes.logo} />
        <Navigation visibleFrom='lg' />
      </Flex>
      <Flex className={classes.right}>
        <LanguagePicker />
        <PrimaryButton icon>{t("cta.start")}</PrimaryButton>
      </Flex>
    </Flex>
  );
};

export default Header;
