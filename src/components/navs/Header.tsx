"use client";

import { theme } from "@/theme";
import Menu from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  SwipeableDrawer,
  ThemeProvider,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cloneElement, useState } from "react";
import styles from "./Heade.module.css";

interface Props {
  watchScroll?: boolean;
}

function Header({ watchScroll }: Props) {
  const route = usePathname();

  const routes = [
    {
      href: "/",
      label: "Home",
      active: route === "/",
    },
    {
      href: "/#tutor",
      label: "For tutors",
      active: route.includes("#tutor"),
    },
  ];

  function ElevationScroll(props: any) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
      target: window ? window() : undefined,
    });

    return cloneElement(
      children,
      watchScroll
        ? {
            className: [styles.root, trigger ? styles.scrolled : ""].join(" "),
          }
        : {
            className: [
              styles.root,
              trigger ? styles.scrolled : "",
              styles.noScroll,
            ].join(" "),
          }
    );
  }

  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" color="transparent" elevation={0}>
        <ElevationScroll>
          <Toolbar className={styles.root}>
            <Box
              display={"flex"}
              className="section-inner"
              flex={1}
              alignItems={"center"}
            >
              <Link href="/" className={styles.logo}>
                <img className={styles.logo} alt="" src="/images/logo.png" />
              </Link>
              <SwipeableDrawer
                anchor={"top"}
                open={showDrawer}
                onClose={() => setShowDrawer(false)}
                onOpen={() => setShowDrawer(true)}
              >
                <List
                  onClick={() => setShowDrawer(false)}
                  onKeyDown={() => setShowDrawer(false)}
                >
                  {routes.map((cur) => (
                    <Link href={cur.href!} key={cur.label}>
                      <ListItem
                        sx={{
                          background: cur.active ? "#f7f7f7" : "#fff",
                        }}
                      >
                        <ListItemButton>
                          <span>{cur.label}</span>
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
                <Box p={1}>
                  <Link href="/book">
                    <Button
                      variant="outlined"
                      size="large"
                      fullWidth
                      color="secondary"
                      onClick={() => setShowDrawer(false)}
                      sx={{ borderRadius: 3 }}
                    >
                      Book a service
                    </Button>
                  </Link>
                </Box>
              </SwipeableDrawer>

              <Hidden lgDown>
                <nav className={styles.nav}>
                  {routes.map((cur) => (
                    <Link
                      key={cur.label}
                      href={cur.href!}
                      className={[
                        styles.item,
                        cur.active ? styles.active : "",
                      ].join(" ")}
                    >
                      {cur.label}
                    </Link>
                  ))}
                </nav>
              </Hidden>
              <Hidden lgDown>
                <Link style={{ color: "#000", marginRight: 20 }} href="/login">
                  Login
                </Link>
                <Link href="/get-started">
                  <Button
                    size="large"
                    variant="contained"
                    sx={{ borderRadius: 20 }}
                  >
                    Get Started
                  </Button>
                </Link>
              </Hidden>
              <Hidden lgUp>
                <IconButton onClick={() => setShowDrawer(true)}>
                  <Menu fontSize="large" />
                </IconButton>
              </Hidden>
            </Box>
          </Toolbar>
        </ElevationScroll>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
