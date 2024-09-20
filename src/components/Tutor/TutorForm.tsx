import { Grid, TextField } from '@mui/material'
import React from 'react'

const TutorForm = () => {
    return (
        <>

            <Grid container spacing={0}
                direction="column"
                alignItems="center" 
                justifyContent="center"
                
                
                >
                <Grid item xs={12} style={{
                   
                    alignItems: "center",
                    justifyContent: "center"
                    

                }}>
                    <div>
                        
                    <TextField
                        label="Years of teaching experience"
                        variant='outlined'
                        
                        fullWidth
                        margin="normal"
                       
                    />
                    <TextField
                        label="Years of teaching experience"

                        fullWidth
                        margin="normal"
                        style={{
                            border: "1px solid #CCCCCC",
                            borderRadius: "45px",



                        }}
                    />
                    <TextField
                        label="Years of teaching experience"

                        fullWidth
                        margin="normal"
                        style={{
                            border: "1px solid #CCCCCC",
                            borderRadius: "45px",



                        }}
                    />

                    </div>








                </Grid>

            </Grid>


        </>
    )
}

export default TutorForm
