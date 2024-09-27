

import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Frist_section = ({ title, subtitle, buttonText, imageSrc, altText, buttonLink }: any) => {
    return (
        <Box sx={{
            padding: '2rem',
            textAlign: 'center'
        }}>
           <Grid container spacing={5} alignItems="center">
                <Grid item xs={12} md={6} >
                    <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: '700' }}>
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        {subtitle}
                    </Typography>
                    <Button variant="contained" 
                    color="success" 
                    href={buttonLink} 
                    size="large" style={{
                        border: "#00CB4B solid 5px",
                        color: "#fff",
                        background: "#00CB4B",
                        borderRadius: "45px",
                        padding: "10px 30px",
                        fontSize: "15px",
                    }}>
                        {buttonText}
                    </Button>
                </Grid>

                {/* Image Section */}
                <Grid item xs={12} md={6}>
                    <img src={imageSrc} alt={altText} style={{ width: '100%', height: 'auto' }} />
                </Grid>


                
                {/* style={{
                    display: "flex",

                    justifyContent: "space-between",
                    alignContent: "center",
                    padding: "150px 0px 50px",
                    gap: "10rem"
                  }} */}

                {/* <div style={{
                         

                    }}>
                        <div>
                            <Typography variant='h2' component={h1} fontWeight={500} fontSize="3rem">  <span style={{
                                color: "#00CB4B",


                            }}>Empower</span> Learning with Expert- <span style={{
                                textDecoration: "underline",


                            }}>Curated</span>  Resources </Typography>

                        </div>

                        <div style={{
                            padding: "25px 0px 30px"
                        }}>
                            <Typography variant='h5' fontWeight={300}>Access high-quality learning materials, assessments, and more from experienced tutors in your intitution.</Typography>
                        </div>
                        <Button
                            type='button'
                            title='Get Started For Free'
                            variant='btn_green'

                        />

                    </div>
                    <div>
                        <Image
                            src="/images/landingpage_image/rafiki.png"

                            alt="ffh"
                            width={700}
                            height={500}

                        />

                    </div> */}
            </Grid>
        

        </Box >
    )
}

export default Frist_section
