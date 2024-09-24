import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Welcome_screen = () => {
    return (
        <>
            <Container maxWidth="md"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh', // Full screen height for vertical centering
                    textAlign: 'center'
                }}>
                {/* Title */}
                <Typography variant="h4" component="h1" fontWeight={700} gutterBottom>
                    Welcome to <img src="/images/landingpage_image/logo.png" alt="" />
                </Typography>
                {/* Subtitle */}
                <Typography variant="h5" gutterBottom>
                    You're almost there! Just a few more steps to complete your account setup.
                </Typography>
                {/* Image */}
                <img
                    src="/images/landingpage_image/rafiki@2x.png" // Replace this with the image URL or import
                    alt="Welcome Illustration"
                    style={{
                        width: "700px",
                        paddingBottom: "20px",
                        
                        margin: '20px 0'
                    }}
                />
                {/* Additional Text */}
                <Typography variant="h5" paragraph style={{
                    textWrap: "wrap",
                    

                }}>
                    Thank you for providing your details. We just need a bit more information to finalize your account.
                    This will help us tailor your experience and ensure everything runs smoothly.
                </Typography>

                <Button
                    variant="contained"
                    style={{ backgroundColor: '#00b050', color: 'white', padding: '10px 30px', borderRadius: '25px' }}
                >
                    Let’s Go
                </Button>



            </Container>


        </>
    )
}

export default Welcome_screen
