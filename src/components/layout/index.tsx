import { Outlet } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { HEADER_HEIGHT } from "@/constants/app";
import { AppShell, Burger } from "@mantine/core";
import { Navigation } from "@/components";

const Layout = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell padding='md' header={{ height: HEADER_HEIGHT }}>
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
        <Navigation />
      </AppShell.Header>
      <AppShell.Main px={0} pb={0} pt={HEADER_HEIGHT}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
