import { Grid, Typography } from '@mui/material'
import React from 'react'
import Getstart_Card from './Getstart_Card/Getstart_Card'

const GetStarted = () => {
    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={12} mb={6}>
                    <div style={{
                        textAlign: "center",



                    }}>
                        <div style={{
                            padding: "10px 0px 10px"
                        }}>
                            <Typography variant='h3' fontWeight={500}>Select Your <span style={{
                                color: "#00CB4B",
                            }}>Role</span> </Typography>

                        </div>

                        <div style={{
                            textWrap: "wrap"
                        }}>
                            <Typography variant='h5' fontSize="1.5rem">Whether you're an institution administrator, a lecturer, or a student, we've got the <br /> tools you need to succeed. </Typography>
                        </div>

                    </div>


                    <Getstart_Card


                    />


                </Grid>

            </Grid>


        </>
    )
}

export default GetStarted
