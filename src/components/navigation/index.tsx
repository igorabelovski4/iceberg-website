import { useTranslation } from "react-i18next";
import { RouteConstants } from "@/constants";
import { LOGO_IMAGE } from "@/constants/app";
import { Divider, Flex, Image } from "@mantine/core";
import { LanguagePicker, NavigationLink, PrimaryButton } from "@/components";

import classes from "./index.module.css";

const {
  ROUTE_LANDING,
  ROUTE_PRODUCT,
  ROUTE_ABOUT_US,
  ROUTE_MEMBERSHIP,
  ROUTE_FAQ,
  ROUTE_SCHOOLS,
} = RouteConstants;

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <Flex className={classes.wrapper}>
      <Flex className={classes.inner}>
        <Image src={LOGO_IMAGE} className={classes.logo} />
        <Flex className={classes.navigation}>
          <NavigationLink path={ROUTE_LANDING} label={t("navigation.home")} />
          <NavigationLink
            path={ROUTE_PRODUCT}
            label={t("navigation.product")}
          />
          <NavigationLink
            path={ROUTE_ABOUT_US}
            label={t("navigation.aboutUs")}
          />
          <NavigationLink
            path={ROUTE_MEMBERSHIP}
            label={t("navigation.membership")}
          />
          <NavigationLink path={ROUTE_FAQ} label={t("navigation.faq")} />
          <Divider
            size='sm'
            orientation='vertical'
            className={classes.divider}
          />
          <NavigationLink
            path={ROUTE_SCHOOLS}
            label={t("navigation.schools")}
            highlight
          />
        </Flex>
      </Flex>
      <Flex className={classes.right}>
        <LanguagePicker />
        <PrimaryButton icon>{t("cta.start")}</PrimaryButton>
      </Flex>
    </Flex>
  );
};

export default Navigation;
