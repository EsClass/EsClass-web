"use client";

import Footer from "@/components/navs/Footer";
import Header from "@/components/navs/Header";
import { signup } from "@/redux/actions/auth";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { SignupTutorForm } from "@/types";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CustomBolton from "@/components/UI/Button";
const defaultForm = {
  name: "",
  institution: "",
  experienceYears: "",
  email: "",
  password: "",
};

const TutorSignup = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((s) => s.auth);
  const router = useRouter();
  const [formSata, setFormData] = useState(defaultForm);

  const submitHandler = async (e: any) => {
    e.preventDefault();

    const d: SignupTutorForm = {
      ...formSata,
      role: "Tutor",
    };
    const res = await dispatch(signup(d));
    if (res.success) router.push("/tutor/account");
  };

  return (
    <>
      <Header />
      <section className="section">
        <Box className="section-inner flex-column">
          <Typography
            align="center"
            className="section-header-text"
            mb={8}
            lineHeight={1.2}
          >
            Create a <span style={{ color: "var(--primary)" }}>Tutor</span>
            <br />
            account
          </Typography>
          <form
            style={{ width: "100%", maxWidth: 450 }}
            onSubmit={submitHandler}
          >
            <TextField
              required
              fullWidth
              value={formSata.name}
              onChange={(e) =>
                setFormData({ ...formSata, name: e.target.value })
              }
              sx={{
                mb: 3,
                "& .MuiInputBase-root": {
                  borderRadius: 15,
                },
              }}
              label="Full Name"
            />
            <TextField
              required
              fullWidth
              value={formSata.institution}
              onChange={(e) =>
                setFormData({ ...formSata, institution: e.target.value })
              }
              sx={{
                mb: 3,
                "& .MuiInputBase-root": {
                  borderRadius: 15,
                },
              }}
              label="Institution/Organization"
            />
            <TextField
              required
              fullWidth
              type="number"
              value={formSata.experienceYears}
              onChange={(e) =>
                setFormData({ ...formSata, experienceYears: e.target.value })
              }
              sx={{
                mb: 8,
                "& .MuiInputBase-root": {
                  borderRadius: 15,
                },
              }}
              label="Years of teaching experience"
            />
            <TextField
              required
              fullWidth
              value={formSata.email}
              type="email"
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

            <CustomBolton
              sx={{ borderRadius: 15 }}
              fullWidth
              type="submit"
              loading={loading}
            >
              Create an account
            </CustomBolton>
            <Link href="/login">
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

export default TutorSignup;
