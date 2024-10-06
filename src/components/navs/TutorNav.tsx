"use client";

import { logout } from "@/redux/actions/auth";
import { toggleDrawer } from "@/redux/slices/authSlices";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { HomeOutlined, Logout, Money, School } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Drawer,
  GlobalStyles,
  Hidden,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const drawerWidth = 340;

const styles = (
  <GlobalStyles
    styles={{
      ".wrapper": {
        display: "flex",
        background: "#FAFAFA",
      },
      ".drawer": {
        ["@media (min-width : 900px)"]: {
          background: "#FAFAFA",
          width: drawerWidth,
        },
      },
      ".drawerPaper": {
        width: drawerWidth,
        padding: "30px 15px",
        backgroundColor: "#FAFAFA !important",
      },
      ".item": {
        borderRadius: "10px !important",
        transition: "0.3s",
        padding: "15px 20px !important",
        color: "#555",
        "&:hover": {
          background: "#0001 !important",
        },
        "&.Mui-selected": {
          background: "#DEF8E8 !important",
          color: "var(--primary)",
          "&:hover": {
            color: "#555",
          },
        },
      },
      ".main": {
        flexGrow: 1,
        background: "#fff",
        minHeight: "100vh",
        maxWidth: "100%",
        ["@media (min-width : 900px)"]: {
          width: `calc(100% - ${drawerWidth}px)`,
          borderRadius: 20,
          overflow: "hidden",
          border: "6px solid #FAFAFA",
        },
      },
    }}
  />
);

function MainNav({ children }: any) {
  const route = usePathname();
  const dispatch = useAppDispatch();
  const { openDrawer, data } = useAppSelector((s) => s.auth);

  const signOutHandler = async () => {
    dispatch(logout());
  };

  const Routes = {
    Tutor: [
      {
        icon: <HomeOutlined color="inherit" />,
        label: "Dashboard",
        active: route === "/tutor/account",
        href: "/tutor/account",
      },
      {
        icon: <School color="inherit" />,
        label: "My Courses",
        active: route === "/tutor/account/courses",
        href: "/tutor/account/courses",
      },
      {
        icon: <Money color="inherit" />,
        label: "Earnings",
        active: route === "/tutor/account/earnings",
        href: "/tutor/account/earnings",
      },
    ],
    Student: [],
  };

  const routes = Routes[data?.role || "Tutor"] || [];

  const drawer = (
    <Box flex={1} className="flex-column">
      <Image
        style={{
          width: "50%",
          alignSelf: "flex-start",
          marginBottom: 40,
          marginLeft: 20,
          height: "auto",
        }}
        src={require("../../../public/images/logo.png")}
        alt=""
      />
      <List sx={{ alignSelf: "stretch" }}>
        {routes.map((cur) => (
          <Link href={cur.href} key={cur.href}>
            <ListItemButton selected={cur.active} className={"item"}>
              <ListItemIcon style={{ color: "inherit" }}>
                {cur.icon}
              </ListItemIcon>
              <ListItemText primary={cur.label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="wrapper">
      {styles}
      <nav className="drawer">
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            open={openDrawer}
            classes={{
              paper: "drawerPaper",
            }}
            onClose={() => dispatch(toggleDrawer())}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown>
          <Drawer
            classes={{
              paper: "drawerPaper",
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className="main">{children}</main>
    </div>
  );
}
export default MainNav;
