// "use client"
// import { AppBar, Tab, Tabs, Toolbar, Typography, useTheme, useMediaQuery, Button } from '@mui/material'
// import React, { useState } from 'react'

// import Link from 'next/link'

// import MenuIcon from '@mui/icons-material/Menu';

// const NavLink = [
//     {
//         path: "/",
//         title: "Home"
//     },
//     {
//         path: "/courses",
//         title: "Courses"
//     },
//     {
//         path: "/for_tutor",
//         title: "For Tutors"
//     },
// ]
// const Header = () => {
//     const [value, setvalue] = useState()
//     // const HandleChange = () => {
//     //     setvalue(value)
//     // }
//     const theme = useTheme()
//     const isMatch = useMediaQuery(theme.breakpoints.down('md'));
//     console.log(isMatch)
//     return (

//         <>
//             <AppBar sx={{
//                 background: "white",
//                 padding: "15px 5vw"
//             }}>
//                 <Toolbar>
//                     <img
//                         src="/images/landingpage_image/logo.png"
//                         alt="header logo"

//                     />
//                     {isMatch ? (
//                         <>

                    

//                             <Drawer_compon />
//                         </>
//                     ) : (
//                         <>
//                             <Tabs sx={{
//                                 marginLeft: "auto"
//                             }}

//                                 value={value}
//                                 onChange={(e, value) => setvalue(value)}
//                                 indicatorColor='secondary'>
//                                 {NavLink.map((cur, index) => (
//                                     <Link style={{
//                                         marginLeft: "10px",

//                                         display: "flex",
//                                         justifyContent: "space-between",
//                                         alignItems: "center",
//                                         color: "black",
//                                         padding: 15,
//                                         gap: 50,
//                                         fontWeight: 500
//                                     }} key={index} href={cur.path}>{cur.title}</Link>


//                                 ))}

//                                 {/* <Tab label="Product"  h/>
//                                 <Tab label="Home" />
//                                 <Tab label="About" />
//                                 <Tab label="Contact" /> */}


//                             </Tabs>

//                             {/* <Button
//                                 style={{
//                                     marginLeft: "auto",
//                                 }}

//                                 type="button"
//                                 title="Login"
//                                 variant="btn_login"

//                             /> */}
//                             {/* <Link href={{ pathname: `/getstart_page`, }}>
//                                 <Button
//                                     type="button"
//                                     title="Get Started "
//                                     variant="btn_green"
//                                 />
//                             </Link> */}
//                             <Button sx={{
//                                 marginLeft: "auto",

//                                 fontSize: "15px",
//                                 background: "none",
//                                 color: "#000000",
//                             }} variant='outlined'> Login</Button>

//                             <Link href={{ pathname: `/getstart_page` }}></Link>
//                             <Button variant='contained' sx={{
//                                 marginLeft: "35px",
//                                 background: "#00CB4B",
//                                 border: "#00CB4B solid 5px",
//                                 color: "#fff",

//                                 borderRadius: "45px",
//                                 padding: "5px 15px",
//                                 fontSize: "15px",
//                             }}> Get Started </Button>

//                         </>

//                     )


//                     }



//                 </Toolbar>


//             </AppBar>
//         </>
//     )
// }

// export default Header
