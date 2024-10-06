"use client";

import Footer from "@/components/navs/Footer";
import Header from "@/components/navs/Header";
import CustomButton from "@/components/UI/Button";
import { login } from "@/redux/actions/auth";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Box, Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const defaultForm = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((s) => s.auth);
  const router = useRouter();
  const [formSata, setFormData] = useState(defaultForm);

  const submitHandler = async (e: any) => {
    e.preventDefault();

    const res = await dispatch(login(formSata));
    if (res.success)
      router.push(
        res.data?.role === "Tutor" ? "/tutor/account" : "/student/account"
      );
  };
  return (
    <>
      <Header />
      <section className="section">
        <Box className="section-inner flex-column">
          <Box className="flex" mb={1}>
            <Typography
              mr={1}
              className="section-header-text"
              sx={{ fontWeight: "200 !important" }}
            >
              Welcome back to{" "}
            </Typography>
            <Image
              src={require("../../../public/images/logo.png")}
              alt=""
              style={{ height: 40, width: "auto" }}
            />
          </Box>
          <Typography className="text" mb={8}>
            Login to your account to continue
          </Typography>

          <form
            style={{ width: "100%", maxWidth: 450 }}
            onSubmit={submitHandler}
          >
            <TextField
              required
              fullWidth
              type="email"
              value={formSata.email}
              onChange={(e) =>
                setFormData({ ...formSata, email: e.target.value })
              }
              sx={{
                mb: 3,
                "& .MuiInputBase-root": {
                  borderRadius: 15,
                },
              }}
              label="Email Address"
            />

            <TextField
              required
              fullWidth
              value={formSata.password}
              type="password"
              onChange={(e) =>
                setFormData({ ...formSata, password: e.target.value })
              }
              sx={{
                mb: 4,
                "& .MuiInputBase-root": {
                  borderRadius: 15,
                },
              }}
              label="Password"
            />

            <CustomButton
              fullWidth
              type="submit"
              loading={loading}
              sx={{ borderRadius: 15 }}
              variant="contained"
            >
              Login
            </CustomButton>
            <Link href="/get-started">
              <Button fullWidth sx={{ py: 2, borderRadius: 15 }}>
                Login
              </Button>
            </Link>
          </form>
        </Box>
      </section>
      <Footer />
    </>
  );
};

export default LoginPage;
