import { logout } from "@/redux/actions/auth";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ExpandMore } from "@mui/icons-material";
import { Avatar, Box, GlobalStyles } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "../Button/Button";
import LinksData from "../links/LinksData";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Frist_section from "../Hero/First_section/Frist_section";
import Link from "next/link";



export const drawerWidth = 340;

const styles = (
  <GlobalStyles
    styles={{
      ".header": {
        display: "flex",
        padding: "15px 5vw",
        alignItems: "center",
        background: "#fff",
        borderBottom: "1px solid #eee",
      },
    }}
  />
);

function MainNav({ children }: any) {
  
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((s) => s.auth);

  const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  const signOutHandler = async () => {
    dispatch(logout());
  };

  return (
    <div className="wrapper">
      {styles}
      <nav className="header" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",


      }}>
        <div>
          <img
            src="/images/landingpage_image/logo.png"
            alt="header logo"
            
          />

        </div>
        <div>
          <LinksData />

        </div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 25,
          gap: 40
        }}>
          <Button
            type="button"
            title="Login"
            variant="btn_login"

          />
          <Link href={{pathname: `/getstart_page`,}}>
            <Button
              type="button"
              title="Get Started"
              variant="btn_green"
            />
          </Link>
        </div>
      </nav>

      <main>

        <div>

          {children}
          <div style={{
            borderTop: "1px solid #eee",
          }}>
            <div style={{
              padding: "15px 5vw",
            }}>
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default MainNav;
