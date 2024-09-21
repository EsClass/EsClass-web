import { Grid, TextField } from '@mui/material'
import React from 'react'

const Verify_Box = () => {
    return (
        <Grid container spacing={2.5}
            justifyContent="center"
            alignItems='center'
        >
            {Array(6).fill("").map((index) => (
                <Grid item key={index} justifyContent="center" >

                    <TextField variant='outlined'

                        inputProps={{
                            maxlength: 2, style: {
                                textAlign: "center",
                                borderRadius: "45px"
                            }
                        }}
                        style={{
                            width: 60,
                            fontSize: 24,
                            borderInline: "none",
                            border: "1px solid green",
                            borderRadius: "15px"

                        }}

                    />

                </Grid>
            ))}




        </Grid>

    )
}

export default Verify_Box
