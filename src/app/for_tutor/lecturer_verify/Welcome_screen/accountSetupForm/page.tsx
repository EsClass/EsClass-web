"use client"
import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Select, MenuItem, Button, InputLabel, FormControl } from '@mui/material';

const AccountSetupForm = () => {
  const [expertise, setExpertise] = useState('');
  const [bank, setBank] = useState('');

  const handleExpertiseChange = (event) => {
    setExpertise(event.target.value);
  };

  const handleBankChange = (event) => {
    setBank(event.target.value);
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Title */}
      <Typography variant="h4" component="h1" gutterBottom>
        Finish Account Setup
      </Typography>

      {/* Subtitle */}
      <Typography variant="body1" gutterBottom>
        Add a profile picture and provide some additional details to help us set up your personalized dashboard.
      </Typography>


      <form>
        <Grid container spacing={2} style={{ marginTop: '10px' }}>

          <Grid item xs={12} sm={12} style={{

          }}>
            <div style={{
              paddingBottom: "30px"

            }}>
              <FormControl fullWidth variant="outlined" style={{
                border: "1px solid gray",
                borderRadius: "45px",
                



              }}>
                <InputLabel>Area Of Expertise</InputLabel>
                <Select
                  value={expertise}
                  onChange={handleExpertiseChange}
                  label="Area Of Expertise"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="math">Mathematics</MenuItem>
                  <MenuItem value="science">Science</MenuItem>
                  <MenuItem value="english">English</MenuItem>
                </Select>
              </FormControl>

            </div>
            <div>
              <TextField
                fullWidth
                variant="outlined"
                label="Years of Teaching Experience"
                type="number"
                style={{
                  border: "1px solid gray",
                  borderRadius: "45px",


                }}
              />

            </div>




          </Grid>





          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Bio"
              multiline
              rows={4}
              style={{
                border: "1px solid gray",
                borderRadius: "45px",
                fontWeight: "bold"


              }}
            />
          </Grid>

          {/* Payment Info Section */}
          <Grid item xs={12} textAlign="left" fontWeight={700}>
            <Typography variant="h6" gutterBottom>
              Payment Info
            </Typography>
          </Grid>

          {/* Account Number */}
          <Grid item xs={12} sm={12}>
            <div  style={{
            paddingBottom: "30px"
          }}>
              <TextField
                fullWidth
                variant="outlined"
                label="Account Number"
                type="text"
                style={{
                  border: "1px solid gray",
                  borderRadius: "45px",
                  fontWeight: "bold"


                }}
              />

            </div>

            <div  style={{
            paddingBottom: "40px"
          }} >
              <FormControl fullWidth variant="outlined"
                style={{
                  border: "1px solid gray",
                  borderRadius: "45px",
                  fontWeight: "bold"


                }}>
                <InputLabel>Select Bank</InputLabel>
                <Select
                  value={bank}
                  onChange={handleBankChange}
                  label="Select Bank"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="bank1">Bank 1</MenuItem>
                  <MenuItem value="bank2">Bank 2</MenuItem>
                  <MenuItem value="bank3">Bank 3</MenuItem>
                </Select>
              </FormControl>

            </div>



          </Grid>




          {/* Continue Button */}
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
              Continue
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AccountSetupForm;
