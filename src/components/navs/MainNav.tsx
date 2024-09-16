import { logout } from "@/redux/actions/auth";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ExpandMore } from "@mui/icons-material";
import { Avatar, Box, GlobalStyles } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const drawerWidth = 340;

const styles = (
  <GlobalStyles
    styles={{
      ".header": {
        display: "flex",
        padding: "15px 3vw",
        alignItems: "center",
        background: "#fff",
        borderBottom: "1px solid #eee",
      },
    }}
  />
);

function MainNav({ children }: any) {
  const route = usePathname();
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((s) => s.auth);

  const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  const signOutHandler = async () => {
    dispatch(logout());
  };

  return (
    <div className="wrapper">
      {styles}
      <nav className="header">
        <Image
          style={{ height: 50, width: "auto" }}
          src={require("../../../public/images/logo.png")}
          alt=""
        />

        <Box
          ml="auto"
          className="flex"
          onMouseEnter={(e) => {
            setAnchor(e.currentTarget);
          }}
          onMouseLeave={() => {
            setAnchor(null);
          }}
        >
          <Avatar alt="" sx={{ background: "var(--primary)" }} />

          <ExpandMore sx={{ fontSize: 36, color: "var(--grey)" }} />
        </Box>
      </nav>
      <main className="main">{children}</main>
    </div>
  );
}
export default MainNav;
