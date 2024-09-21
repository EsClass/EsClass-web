import { CheckBox } from '@mui/icons-material'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import Verify_Box from './Verify_Box'

const Lecturer_verify = () => {

    return (
        <>
            <Grid container spacing={2}
                alignItems="center"
                justifyContent="center"


            >

                <Grid item xs={12} md={6} style={{
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{
                        textAlign: "center",
                        textWrap: "wrap",
                        paddingTop: 30
                    }}>
                        <div>
                            <Typography variant='h4' fontWeight={700}>
                                Verify Your Email
                            </Typography>

                        </div>
                        <div style={{
                            padding: "15px 0px ",
                            
                        }}>
                            <Typography variant='h5'  style={{
                                fontSize: "25.5px"

                            }}>We've sent a One-Time Password (OTP) to admin@lasu.edu.ng Please enter
                                the OTP below to verify your email address. If you haven't received the OTP,
                                check your spam folder or click below to resend the OTP.</Typography>

                        </div>

                    </div>
                    <div style={{
                        paddingTop: "2.5rem"
                    }}>
                        <Verify_Box />


                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        padding: "5rem 0rem 10rem"
                        

                    }}>
                        <Button type='button' style={{
                            color: "#00CB4B",
                            borderRadius: "45px",
                            padding: "10px 30px",
                            fontSize: "20px"
                        }}>Resend OTP</Button>

                        <Button variant='contained'

                            className='btn_green' type='button' style={{

                                border: " #00CB4B solid 5px",
                                color: " #fff",
                                background: "#00CB4B",
                                borderRadius: "45px",




                            }}>Verify Account
                        </Button>


                    </div>



                </Grid>







            </Grid>



        </>
    )
}

export default Lecturer_verify
