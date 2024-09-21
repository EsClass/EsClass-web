import { Box, Grid, Typography } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Button/Button'

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, p: 5, }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h5" fontWeight={900}>Quick Links</Typography>
                    <Link href="/">Home</Link><br />
                    <Link href="/courses">Courses</Link><br />
                    <Link href="/for_tutor">For tutors</Link><br />
                    <Link href="/contact">Contact us</Link>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h5" fontWeight={900}>Reach us</Typography>
                    <div>
                        <Link href="tel:+234"><PhoneIcon /> +234 808 904 350</Link>
                    </div>
                    <div>
                        <Link href="email"><EmailIcon /> odunlade@gmail.com</Link>


                    </div>
                </Grid>
                <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
                    <Typography variant="body2">© Copyright 2024 All rights reserved.</Typography>
                    <img src="/images/landingpage_image/logo.png" alt="esClass Logo" style={{ marginTop: '10px' }} />
                </Grid>
            </Grid>
        </Box>
    
    )
}

export default Footer
