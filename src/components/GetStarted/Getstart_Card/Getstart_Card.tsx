import Button from '@/components/Button/Button';
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const items = [
    'Explore Tutor created courses',
    'Take computer based tests with instant feedback',
    'Access questions with solutions',
];

const item2 = [
    'Create and manage courses seamlessly.',
    'Monetize your content',
    'Instant Result For CBT Test'
]



const Getstart_Card = () => {
    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10rem",
                padding: "5rem 0rem 2.5rem"
            }}>
                <div>
                    <Card style={{
                        border: "1px solid #00CB4B",

                        borderRadius: '20px',
                        padding: '1px',
                       

                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                    }}
                        sx={{
                            ":active": {

                                border: "5px solid #00CB4B",

                            }
                        }}>
                        <CardContent style={{

                        }}>
                            <CardMedia style={{
                                padding: "15px 0px 15px"
                            }}>
                                <img src="/images/landingpage_image/student_icon.png" alt=''
                                    
                                />
                            </CardMedia>

                            <Typography variant='h2' style={{
                                fontSize: '30px',
                                fontWeight: 'bold',
                                padding: "15px 0px 15px"
                            }}>Student</Typography>
                            <div style={{
                                listStyleType: 'none',

                                textAlign: 'left',
                                paddingBottom: "20px"

                            }}>
                                {items.map((item, index) => (
                                    <Typography fontWeight={500} key={index} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '10px',
                                        padding: "5px 0px 5px"

                                    }}>
                                        <span style={{
                                            height: '10px',
                                            width: '10px',
                                            backgroundColor: 'green',
                                            borderRadius: '50%',
                                            display: 'inline-block',
                                            marginRight: '10px',

                                        }}></span>
                                        {item}
                                    </Typography>
                                ))}




                            </div>




                        </CardContent>

                    </Card>

                </div>
                <div>
                    <Card style={{

                        borderRadius: '20px',
                        padding: '20px',
                        maxWidth: '400px',
                        maxHeight: "auto",

                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                    }}
                        sx={{
                            ":act": {

                                border: "5px solid #00CB4B",

                            }
                        }}>
                        <CardContent style={{

                        }}>
                            <CardMedia style={{
                                padding: "15px 0px 15px"
                            }}>
                                <img src="/images/landingpage_image/tutor_icon.png" alt=''
                                   
                                />
                            </CardMedia>

                            <Typography variant='h2' style={{
                                fontSize: '30px',
                                fontWeight: 'bold',
                                padding: "15px 0px 15px"
                            }}>Tutor</Typography>
                            <div style={{
                                listStyleType: 'none',

                                textAlign: 'left',
                                paddingBottom: "20px"

                            }}>
                                {item2.map((item, index) => (
                                    <Typography fontWeight={500} key={index} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '10px',
                                        padding: "5px 0px 5px"

                                    }}>
                                        <span style={{
                                            height: '10px',
                                            width: '10px',
                                            backgroundColor: 'green',
                                            borderRadius: '50%',
                                            display: 'inline-block',
                                            marginRight: '10px',

                                        }}></span>
                                        {item}
                                    </Typography>
                                ))}




                            </div>




                        </CardContent>

                    </Card>
                </div>


            </div>
            <div style={{
                textAlign: "center",
                margin: "5rem"
            }}>
                <Button
                title='Continue'
                variant='btn_green'
                type='button'
                
                />
            </div>


        </div>
    )
}

export default Getstart_Card
