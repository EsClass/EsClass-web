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
                    <Typography variant='h4' fontWeight={700}>Create a <span style={{
                        color: "#00CB4B",
                    }}>Tutor</span><br />account </Typography>
                    <TutorForm />
                </div>

            </div>

        </div>
    )
}

export default TutorHeader
