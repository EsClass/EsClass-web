import Button from '@/components/Button/Button'
import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Secound_section = () => {
  return (
    <div>
        <Grid container spacing={5}>
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
            </Grid>
      
    </div>
  )
}

export default Secound_section
