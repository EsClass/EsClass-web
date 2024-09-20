import { Typography } from '@mui/material'
import React from 'react'
import TutorForm from './TutorForm'

const TutorHeader = () => {
    return (
        <div>
            <div style={{
                padding: "5.5rem 0rem 2rem"
            }}>
                <div style={{
                    
                    textAlign: "center"
                }}>
                    <Typography variant='h3' fontWeight={500}>Create a Tutor account</Typography>
                    <TutorForm />
                </div>

            </div>

        </div>
    )
}

export default TutorHeader
