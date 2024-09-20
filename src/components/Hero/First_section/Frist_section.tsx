import Button from '@/components/Button/Button'
import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Frist_section = () => {
    return (
        <div>
            <Grid container spacing={5}>
                <Grid item style={{
                    display: "flex",

                    justifyContent: "space-between",
                    alignContent: "center",
                    padding: "150px 0px 50px",
                    gap: "10rem"
                }}>

                    <div style={{
                        paddingTop: "50px"

                    }}>
                        <div>
                            <Typography variant='h2' fontWeight={500} fontSize="3rem">  <span style={{ 
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

                    </div>
                </Grid>
            </Grid>

        </div>
    )
}

export default Frist_section
