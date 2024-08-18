import { AppShell, Group, Burger } from "@mantine/core";

import Footer from "./Footer.tsx";
import { useDisclosure } from "@mantine/hooks";
import Navbar from "./Navbar.tsx";
import { Outlet } from "react-router-dom";

function Layout() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      padding="md"
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 200, md: 300, lg: 400 },
        breakpoint: "sm",
        collapsed: { mobile: !opened }
      }}
      footer={{ height: { base: 30, md: 40, lg: 50 } }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      {/*<AppShell.Footer>*/}
      {/*  <Footer />*/}
      {/*</AppShell.Footer>*/}
    </AppShell>
  );
}

export default Layout;
