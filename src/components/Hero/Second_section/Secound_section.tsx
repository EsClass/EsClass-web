
import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Secound_section = ({ title, subtitle, buttonText, imageSrc, altText, buttonLink }: any) => {
    return (
        <Box>
            <Grid container spacing={5} alignItems="center">
                <Grid item xs={12} md={6} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    padding: "150px 0px 50px",
                    gap: "10rem",
                }}>

                    <Grid item xs={12} md={6}>
                        <img src={imageSrc} alt={altText} style={{ width: 'auto', height: 'auto' }} />
                    </Grid>

                </Grid>

                {/* Image Section */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" style={{textWrap: "wrap"}}  component="h6" fontWeight={500} gutterBottom sx={{ fontWeight: '700' }}>
                        {title}
                    </Typography>
                    <Typography variant="h5"  style={{textWrap: "wrap",
                        padding: "25px 0px 30px",
                    }} fontWeight={300} gutterBottom >
                        {subtitle}
                    </Typography>
                    <Button variant="contained" color="success"  href={buttonLink} size="large" style={{
                        border: "#8F3BE4 solid 5px",
                        color: "#fff",
                        background: "#8F3BE4",
                        borderRadius: "45px",
                        padding: "10px 30px",
                        fontSize: "15px",
                    }}>
                        {buttonText}
                    </Button>
                </Grid>



                {/* style={{
                    display: "flex",

                    justifyContent: "space-between",
                    alignContent: "center",
                    padding: "150px 0px 50px",
                    gap: "10rem"
                  }} */}


            </Grid>


            {/* <Grid container spacing={5}>
                <Grid item style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    padding: "150px 0px 50px",
                    gap: "10rem",
                    
                }}>

                    
                    <div>
                        <Image
                            src="/images/landingpage_image/pana.png"

                            alt="ffh"
                            width={700}
                            height={500}

                        />

                    </div>
                    <div style={{
                        paddingTop: "50px"

                    }}>
                        <div >
                            <Typography variant='h2' fontWeight={500} fontSize="3rem">  <span style={{ 
                                color: "#8F3BE4",
                                

                            }}>Share</span>Your Knowledge with <span style={{
                                textDecoration: "underline",
                                

                            }}>the World</span></Typography>

                        </div>

                        <div style={{
                            padding: "25px 0px 30px",
                            textWrap: "wrap"
                        }}>
                            <Typography variant='h5' fontWeight={300}>Create and Monitize your Courses, resources and test with easy</Typography>
                        </div>
                        <Button
                            type='button'
                            title='Get Started For Free'
                            variant='btn_purple'

                        />

                    </div>

                </Grid>
        </Grid> */}

        </Box>
    )
}

export default Secound_section
