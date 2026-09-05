import { NavLink, Outlet } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { HEADER_HEIGHT } from "@/constants/app";
import { AppShell, Box, Flex } from "@mantine/core";
import { Description, Header, Navigation, NavigationLink } from "@/components";

import classes from "./index.module.css";
import { ROUTE_POLICY } from "@/constants/route";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const [opened, { toggle }] = useDisclosure();
  const { t } = useTranslation();

  return (
    <AppShell
      header={{ height: HEADER_HEIGHT }}
      navbar={{
        width: 300,
        breakpoint: "lg",
        collapsed: { desktop: true, mobile: !opened },
      }}
    >
      <AppShell.Header withBorder={false}>
        <Header opened={opened} onClick={toggle} />
      </AppShell.Header>

      <AppShell.Navbar className={classes.navbar}>
        <Navigation device onClick={toggle} />
      </AppShell.Navbar>

      <AppShell.Main px={0} pb={0} pt={HEADER_HEIGHT}>
        <Outlet />
        <Flex className={classes.footer} justify='space-between'>
          <Description>{t("credits")}</Description>
          <NavLink className={classes.link} to={ROUTE_POLICY}>
            {t("navigation.privacy")}{" "}
          </NavLink>
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
