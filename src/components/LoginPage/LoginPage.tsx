import React from 'react';
import { Container, Typography, Grid, TextField, Button, Link } from '@mui/material';

const LoginPage = () => {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      
      <Typography variant="h5" component="h2" fontWeight={700} gutterBottom>
        Welcome back to <img src='/images/landingpage_image/logo.png'></img>
      </Typography>

      {/* Subtitle */}
      <Typography variant="body1" gutterBottom>
        Login to your account to continue
      </Typography>

      {/* Form */}
      <form>
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Email Address"
              type="email"
              InputProps={{
                endAdornment: <span role="img" aria-label="email">&#128231;</span>
              }}
              style={{
                border: "1px solid gray",
                borderRadius: "45px"
              }}
            />
          </Grid>

          {/* Password */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              type="password"
              InputProps={{
                endAdornment: <span role="img" aria-label="lock">&#128274;</span>
              }}
              style={{
                border: "1px solid gray",
                borderRadius: "45px"
              }}
            />
          </Grid>

          {/* Forgot Password Link */}
          <Grid item xs={12} style={{ textAlign: 'right',
            fontWeight: 700
           }}>
            <Link href="#" underline="none" style={{ color: '#00CB4B' }}>
              Forgot Password?
            </Link>
          </Grid>

          {/* Login Button */}
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              style={{
                backgroundColor: '#00CB4B',
                color: 'white',
                padding: '12px',
                borderRadius: '25px',
              }}
            >
              Login
            </Button>
          </Grid>

          {/* Create Account Link */}
          <Grid item xs={12}>
            <Link href="#" underline="none" style={{ color: '#00CB4B',
              fontWeight: 500
            }}>
              Create account
            </Link>
          </Grid>
        </Grid>
      </form>
      
    </Container>
  );
};

export default LoginPage;
