import { Button, Grid, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Link from 'next/link';

const TutorForm = () => {
    return (
        <>

            <Grid container spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"



            >
                <Grid item xs={12} gap={30} style={{




                }}>
                    <div style={{
                        paddingBottom: "3.5rem"
                    }}>

                        <TextField
                            label="Full Name"
                            variant='outlined'

                            name=''

                            fullWidth
                            margin="normal"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <PersonOutlineIcon style={{ color: 'purple' }} />

                                    </InputAdornment>
                                )
                            }}

                        />
                        <TextField
                            label="Institution/Organization"

                            name=''

                            fullWidth
                            margin="normal"


                            style={{
                                border: "1px solid #CCCCCC",
                                borderRadius: "45px",




                            }}
                        />
                        <TextField
                            label="Years of teaching experience"

                            name=''

                            fullWidth
                            margin="normal"
                            style={{
                                border: "1px solid #CCCCCC",
                                borderRadius: "45px",



                            }}
                        />

                    </div>
                    <div>
                        <TextField
                            type='email'
                            label="Email Address"

                            name=''

                            fullWidth
                            margin="normal"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <MailOutlineIcon style={{ color: 'purple' }} />

                                    </InputAdornment>
                                )
                            }}
                            style={{
                                border: "1px solid #CCCCCC",
                                borderRadius: "45px",



                            }}
                        />
                        <TextField
                            label="Password"
                            type='password'

                            name=''

                            fullWidth
                            margin="normal"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <VisibilityIcon style={{ color: 'purple' }} />

                                    </InputAdornment>
                                )
                            }}
                            style={{
                                border: "1px solid #CCCCCC",
                                borderRadius: "45px",



                            }}
                        />

                    </div>

                    <div>
                        <Link href={{ pathname: `/for_tutor/lecturer_verify` }}>
                            <Button variant='contained'
                                fullWidth
                                className='btn_green' type='button' style={{

                                    border: " #00CB4B solid 5px",
                                    color: " #fff",
                                    background: "#00CB4B",
                                    borderRadius: "45px"


                                }}>Create an account
                            </Button>

                        </Link>

                        <Button style={{
                            color: "#00CB4B"
                        }}>Login</Button>
                    </div>









                </Grid>

            </Grid>


        </>
    )
}

export default TutorForm
