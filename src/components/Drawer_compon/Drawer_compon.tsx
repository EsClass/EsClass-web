"useClient"
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const NavLink = [
    {
        path: "/",
        title: "Home"
    },
    {
        path: "/courses",
        title: "Courses"
    },
    {
        path: "/for_tutor",
        title: "For Tutors"
    },
]


const Drawer_compon = () => {
    const [open, setOpen] = useState(false)
    const Drawerhandler = () => {
        setOpen(false),
        setOpen(!open)

    }
    return (
        <>
            <Drawer open={open}
                onClose={Drawerhandler}>
                <List>
                    {NavLink.map((cur, index) => (

                        <ListItemButton key={index} onClick={Drawerhandler}>
                            <ListItemIcon>
                                <Link href={cur.path}>{cur.title}</Link>
                            </ListItemIcon>
                        </ListItemButton>

                    ))}
                    {/* <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>Login</ListItemText>
                        </ListItemIcon>
                    </ListItemButton> */}
                </List>

            </Drawer>
            <IconButton sx={{
                color: "white",
                marginLeft: "auto"
            }} onClick={Drawerhandler}>
                <MenuIcon style={{
                    color: "black"
                }}/>

            </IconButton>

        </>
    )
}

export default Drawer_compon
