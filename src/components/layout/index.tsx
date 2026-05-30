import { Outlet } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { HEADER_HEIGHT } from "@/constants/app";
import { AppShell } from "@mantine/core";
import { Header, Navigation } from "@/components";

import classes from "./index.module.css";

const Layout = () => {
  const [opened, { toggle }] = useDisclosure();

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
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
