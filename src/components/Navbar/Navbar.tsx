// "use client"
// import React, { useState } from 'react';
// import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   logo: {
//     flexGrow: 1,
//     display: 'flex',
//     alignItems: 'center',
//   },
//   toolbar: { 
//     justifyContent: 'space-between',
//   },
//   navLinks: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: theme.spacing(2),
//   },
//   drawerList: {
//     width: 250,
//   },
//   menuButton: {
//     display: 'none',
//     [theme.breakpoints.down('md')]: {
//       display: 'block',
//     },
//   },
//   navItems: {
//     [theme.breakpoints.down('md')]: {
//       display: 'none',
//     },
//   },
// }));

// const Navbar = () => {
//   const classes = useStyles();
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const drawerContent = (
//     <Box className={classes.drawerList} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
//       <List>
//         <ListItem button>
//           <ListItemText primary="Home" />
//         </ListItem>
//         <ListItem button>
//           <ListItemText primary="Courses" />
//         </ListItem>
//         <ListItem button>
//           <ListItemText primary="For Tutors" />
//         </ListItem>
//         <ListItem button>
//           <ListItemText primary="Login" />
//         </ListItem>
//         <ListItem button>
//           <Button variant="contained" color="success" fullWidth>
//             Get Started
//           </Button>
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <AppBar position="static" color="transparent" elevation={0}>
//       <Toolbar className={classes.toolbar}>
//         {/* Logo */}
//         <div className={classes.logo}>
//           <Typography variant="h6">
//             es<span style={{ fontWeight: 'bold', color: 'black' }}>Class</span>
//           </Typography>
//         </div>

//         {/* Desktop Links */}
//         <div className={classes.navItems}>
//           <div className={classes.navLinks}>
//             <Button color="inherit">Home</Button>
//             <Button color="inherit">Courses</Button>
//             <Button color="inherit">For Tutors</Button>
//             <Button color="inherit">Login</Button>
//             <Button variant="contained" color="success">
//               Get Started
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Menu Icon */}
//         <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton} onClick={toggleDrawer(true)}>
//           <MenuIcon />
//         </IconButton>

//         {/* Mobile Drawer */}
//         <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
//           {drawerContent}
//         </Drawer>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
