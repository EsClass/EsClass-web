import Header from '@/components/navs/Header'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Verifypage = () => {
  return (
    <>
    <Header/>
    <section className='section'>
        <Box className="section-inner flex-column">
            <Typography
             align="center"
             className="section-header-text"
             mb={8}
             lineHeight={1.2}
            >Verify Your Email</Typography>
            <Typography align="center" className="text" mb={5}>We've sent a One-Time Password (OTP) to admin@lasu.edu.ng Please enter the OTP below to verify your email address. If you haven't received the OTP, check your spam folder or click below to resend the OTP.</Typography>

        </Box>

    </section>


      
    </>
  )
}

export default Verifypage
