import { Divider, Flex } from "@mantine/core";
import NavigationLink from "../navigation-link";
import { RouteConstants } from "@/constants";
import { useTranslation } from "react-i18next";

const {
  ROUTE_FAQ,
  ROUTE_LANDING,
  ROUTE_PRICING,
  ROUTE_PRODUCT,
  ROUTE_TEAM,
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
        path={ROUTE_PRICING}
        label={t("navigation.pricing")}
        onClick={onClick}
      />
      <NavigationLink
        device={device}
        path={ROUTE_FAQ}
        label={t("navigation.faq")}
        onClick={onClick}
      />
      <NavigationLink
        device={device}
        path={ROUTE_TEAM}
        label={t("navigation.team")}
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
