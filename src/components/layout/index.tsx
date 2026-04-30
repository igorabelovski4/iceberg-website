import { Outlet } from "react-router-dom";

import { AppShell } from "@mantine/core";
import { Navigation } from "@/components";

const Layout = () => {
  return (
    <AppShell header={{ height: 60 }} padding='md'>
      <AppShell.Header>
        <Navigation />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
