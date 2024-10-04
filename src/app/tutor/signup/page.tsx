"use client";

import Footer from "@/components/navs/Footer";
import Header from "@/components/navs/Header";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const defaultForm = {
  name: "",
  institution: "",
  experienceYears: "",
  email: "",
  password: "",
};

const TutorSignup = () => {
  const [formSata, setFormData] = useState(defaultForm);

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
          <form style={{ width: "100%", maxWidth: 450 }}>
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
              label="Institution/Organization"
            />
            <TextField
              required
              fullWidth
              value={formSata.name}
              onChange={(e) =>
                setFormData({ ...formSata, name: e.target.value })
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
              value={formSata.name}
              type="email"
              onChange={(e) =>
                setFormData({ ...formSata, name: e.target.value })
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
              value={formSata.name}
              type="password"
              onChange={(e) =>
                setFormData({ ...formSata, name: e.target.value })
              }
              sx={{
                mb: 4,
                "& .MuiInputBase-root": {
                  borderRadius: 15,
                },
              }}
              label="Password"
            />

            <Button
              fullWidth
              type="submit"
              sx={{ py: 2, borderRadius: 15 }}
              variant="contained"
            >
              Create an account
            </Button>
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
