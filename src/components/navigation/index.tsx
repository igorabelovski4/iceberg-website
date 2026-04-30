import { useTranslation } from "react-i18next";
import { RouteConstants } from "@/constants";

import { Flex } from "@mantine/core";
import { NavigationLink } from "@/components";

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
    <Flex>
      <NavigationLink path={ROUTE_LANDING} label={t("navigation.home")} />
      <NavigationLink path={ROUTE_PRODUCT} label={t("navigation.product")} />
      <NavigationLink path={ROUTE_ABOUT_US} label={t("navigation.aboutUs")} />
      <NavigationLink
        path={ROUTE_MEMBERSHIP}
        label={t("navigation.membership")}
      />
      <NavigationLink path={ROUTE_FAQ} label={t("navigation.faq")} />
      <NavigationLink path={ROUTE_SCHOOLS} label={t("navigation.schools")} />
    </Flex>
  );
};

export default Navigation;
