import React from 'react'

import { Button, Container, Grid, Typography } from '@mui/material'


const Upload_profile = () => {
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
                <div style={{
                    padding: "5px 0px 10px"
                }}>
                    <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
                        Finish Account Setup
                    </Typography>

                </div>



                <Typography variant="h5"  gutterBottom>
                    Add a profile picture and provide some additional details to help us set up your personalized dashboard.                </Typography>
                {/* Image */}

                <Typography variant='h5' padding="3rem 0rem 1.5rem " fontWeight={700}>
                    Upload Profile Picture
                </Typography>

                <img
                    src="/images/landingpage_image/Generic avatar.png" // Replace this with the image URL or import
                    alt="Welcome Illustration"
                    style={{
                        width: "200px",
                        paddingBottom: "20px",

                        margin: '20px 0'
                    }}
                />

                <div style={{
                    padding: "50px 0px 60px"
                }}>
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: '#00CB4B',
                            color: 'white',
                            padding: '10px 100px',
                            borderRadius: '25px'
                        }}

                    >
                        Finish
                    </Button>

                </div>




            </Container>


        </>
    )
}



export default Upload_profile
