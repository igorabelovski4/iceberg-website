import { Divider, Flex } from "@mantine/core";
import NavigationLink from "../navigation-link";
import { RouteConstants } from "@/constants";
import { useTranslation } from "react-i18next";

const {
  ROUTE_ABOUT_US,
  ROUTE_FAQ,
  ROUTE_LANDING,
  ROUTE_MEMBERSHIP,
  ROUTE_PRODUCT,
  ROUTE_SCHOOLS,
} = RouteConstants;

import classes from "./index.module.css";
import { INavigation } from "@/types/common";

const Navigation = ({ visibleFrom, device = false, onClick }: INavigation) => {
  const { t } = useTranslation();

  return (
    <Flex
      className={`${classes.navigation} ${device ? classes.device : ""}`}
      visibleFrom={visibleFrom ? visibleFrom : ""}
    >
      <NavigationLink
        device={device}
        path={ROUTE_LANDING}
        label={t("navigation.home")}
        onClick={onClick}
      />
      <NavigationLink
        device={device}
        path={ROUTE_PRODUCT}
        label={t("navigation.product")}
        onClick={onClick}
      />
      <NavigationLink
        device={device}
        path={ROUTE_ABOUT_US}
        label={t("navigation.aboutUs")}
        onClick={onClick}
      />
      <NavigationLink
        device={device}
        path={ROUTE_MEMBERSHIP}
        label={t("navigation.membership")}
        onClick={onClick}
      />
      <NavigationLink
        device={device}
        path={ROUTE_FAQ}
        label={t("navigation.faq")}
        onClick={onClick}
      />
      <Divider size='sm' orientation='vertical' className={classes.divider} />
      <NavigationLink
        device={device}
        path={ROUTE_SCHOOLS}
        label={t("navigation.schools")}
        highlight
        onClick={onClick}
      />
    </Flex>
  );
};

export default Navigation;
