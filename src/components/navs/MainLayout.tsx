import { getCurrentUser } from "@/redux/actions/auth";
import { toggleDrawer } from "@/redux/slices/authSlices";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Menu } from "@mui/icons-material";
import {
  Avatar,
  Box,
  GlobalStyles,
  Hidden,
  IconButton,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { FC, ReactNode, useEffect } from "react";
import Spinner from "../UI/Spinner";
import client from "@/api/client";

interface Props {
  loading?: boolean;
  children: ReactNode;
  title: string;
  icon: ReactNode;
}

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
      ".layout-spinner": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 10vw",
        flex: 1,
      },
      ".content": {
        padding: "25px 3vw",
        position: "relative",
      },
    }}
  />
);

const MainLayout: FC<Props> = ({
  children,
  icon,
  title = "Untitled",
  loading,
}) => {
  const router = useRouter();
  const { data, loggedIn, token } = useAppSelector((s) => s.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }, [token]);

  useEffect(() => {
    setTimeout(() => {
      if (!loggedIn) {
        router.push("/login");
      } else {
        dispatch(getCurrentUser());
      }
    }, 1000);
  }, [loggedIn]);

  return (
    <>
      {styles}

      <div className="header">
        <Hidden mdUp implementation="css">
          <IconButton onClick={() => dispatch(toggleDrawer())}>
            <Menu />
          </IconButton>
        </Hidden>
        {icon}
        <Typography ml={1} variant="h6" fontWeight={400} color={"#101928"}>
          {title}
        </Typography>

        <Box ml="auto" className="flex">
          <Avatar alt="" sx={{ background: "var(--primary)" }} />
          <Box ml={1} mr={2}>
            <Typography textTransform={"capitalize"} fontWeight={500}>
              {data?.name}
            </Typography>
            <Typography
              textTransform={"capitalize"}
              fontWeight={200}
              variant="body2"
            >
              {data?.role}
            </Typography>
          </Box>
        </Box>
      </div>

      <div className="content">
        <div className="section-inner">{children}</div>

        {(!loggedIn || loading) && (
          <Box position={"fixed"} height={"100%"} width="100%" top={0} left={0}>
            <Spinner />
          </Box>
        )}
      </div>
    </>
  );
};
export default MainLayout;
