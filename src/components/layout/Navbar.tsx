import { useState } from "react";
import { Group, Code, Text } from "@mantine/core";
import {
  IconSwitchHorizontal,
  IconUser,
  IconCategory,
  IconBrandProducthunt
} from "@tabler/icons-react";
import classes from "./Navbar.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import Logout from "../authenticate/Logout.tsx";

const data = [
  { link: "/account", label: "Account Management", icon: IconUser },
  { link: "/category", label: "Category Matching", icon: IconCategory },
  { link: "/product", label: "Product Matching", icon: IconBrandProducthunt }
];

function Navbar() {
  const { pathname } = useLocation();
  const [active, setActive] = useState(
    pathname === "/" ? "/category" : pathname
  );
  const navigate = useNavigate();

  const links = data.map(item => (
    <a
      className={classes.link}
      data-active={item.link === active || undefined}
      href="#"
      key={item.label}
      onClick={event => {
        event.preventDefault();
        setActive(item.link);
        navigate(item.link);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Text>Dashboard</Text>
          <Code fw={700}>v1.0.0</Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={event => {
            event.preventDefault();
            navigate("/login");
          }}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>
        <Logout classes={classes} />
      </div>
    </nav>
  );
}

export default Navbar;
