'use client'
import Footer from '@/components/navs/Footer'
import Header from '@/components/navs/Header'
import SearchBar from '@/components/Search/Searchbar'
import Resources from '@/components/Tutor/Course/Resources'
import { Box, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'

const page = () => {
    const [tab, setTab] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTab(newValue);
    };
    return (
        <>
            <Header />
            <section className='section'>
                <Box className='section-inner'>
                    <SearchBar />
                    <Box mt={8} sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                            value={tab}
                            onChange={handleChange}


                            aria-label="basic tabs example"
                        >
                            <Tab label="Resources" />
                            <Tab label="Questions with solutions" />
                            <Tab label="Assessments" />
                        </Tabs>
                    </Box>




                </Box>



            </section>


            <Footer />
        </>
    )
}

export default page
