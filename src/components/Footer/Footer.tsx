import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Button/Button'

const Footer = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item md={12} style={{
                    display: "flex",
                    justifyContent: 'space-between',
                    alignContent: "center",
                    marginTop: 50,
                    padding: "30px 10px 70px"

                }}>
                    <div style={{
                        padding: 20
                    }}>
                        <div style={{
                            padding: 10
                        }}>
                            <Typography variant='h3' fontWeight={900}>Quick Link</Typography>

                        </div>


                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: 20,
                            fontSize: "1.5rem"



                        }}>
                            <div style={{
                                padding: "5px 0px 5px",
                            }}>
                            <Link href='/'> Home</Link>

                            </div>
                           
                            <div style={{
                                padding: "5px 0px 5px",
                            

                            }}>
                                <Link href='/courses'>Courses</Link>

                            </div>
                            <div style={{
                                padding: "5px 0px 5px"

                            }}>
                                <Link href='/for_tutor'>For Tutors</Link>

                            </div>
                            <div style={{
                                padding: "5px 0px 5px"

                            }}>
                                <Link href='/contact'>Contact</Link>

                            </div>
                            
                            
                            
                            
 
                        </div>

                    </div>
                    <div style={{
                        padding: 20
                    }}>
                        <div style={{
                            padding: 10
                        }}>
                            <Typography variant='h3' fontWeight={900}>Reach Us</Typography>
                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 20,
                            padding: 20,
                            fontSize: "1.5rem"
                        }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 20


                            }}>
                                <Image
                                    src="/images/landingpage_image/call_icon.png"
                                    alt=''
                                    width={20.5}
                                    height={20.5}

                                />
                                <Image
                                    src="/images/landingpage_image/mail_icon.png"
                                    alt=''
                                    width={20.5}
                                    height={20.5}

                                />


                            </div>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 20
                            }}>
                                <Link href="tel:+234">+234 808 904 350 </Link>

                                <Link href="mailto:">Odunmilade@gmail.com</Link>

                            </div>
                        </div>

                    </div>
                    <div style={{
                        padding: 20
                    }}>
                        <div style={{
                            padding: 10
                        }}>
                            <Typography>ffhfjv</Typography>


                        </div>

                        <Image
                            src="/images/landingpage_image/logo.png"
                            alt=''
                            width={100}
                            height={50}

                        />
                    </div>
                </Grid>

            </Grid>

        </div>
    )
}

export default Footer
