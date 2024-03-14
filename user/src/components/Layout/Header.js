import React, { useState, useEffect } from 'react'
import { Box, AppBar, Typography, Toolbar, IconButton, Drawer, Divider } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import '../../styles/HeaderStyles.css'
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios'


let button = {
    backgroundColor: "black",
    marginTop: "20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    height: "50px",
    width: "180px",
    textDecoration: "none",
    color: "white",
    fontSize: "20px"
}

const Header = () => {

    const [mobileopen, setMobileopen] = useState(false)
    const [cartlength, setcartLength] = useState([])

    console.log(cartlength.length, "hiii");

    const handleDrawerToggle = () => {
        setMobileopen(!mobileopen)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:7000/api/usercart/getcart"
                );


                setcartLength(response.data.cart);

                // Assuming the data is an array
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    // menu drawer
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography color={'goldenrod'} variant='h6' component='div' sx={{ flexgrow: 1, my: 2 }}>
                <FastfoodIcon />
                Foddie Jungle
            </Typography>

            <ul className='mbl-navigation'>
                <li>
                    <Link to='/'> Home</Link>
                </li>
                <li>
                    <Link to='/menu'> Menu</Link>
                </li>
                <li>
                    <Link to='/about'> About</Link>
                </li>
                {/* <li>
                    <Link to='/contact'> Contact</Link>
                </li> */}
                <li>
                    <Link to='/Signin'> Login</Link>
                </li>
                <li>
                    <Link to='/Signup'> Sign up</Link>
                </li>
                <li>
                    <Link to='/Cart'>Cart{cartlength.length} </Link>
                </li>
            </ul>


        </Box>
    )
    return (
        <>
            <Box>
                <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
                    <Toolbar>
                        < IconButton color="inherit" arial-label="open drawer" edge="start" sx={{ mr: 2, display: { sm: 'none' } }} onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                        <Typography color={'gold'} variant='h6' component='div' sx={{ flexgrow: 1 }}>
                            <FastfoodIcon />
                            Foddie Jungle                        </Typography>
                        <Divider />
                        <Box sx={{ display: { marginLeft: "700px", xs: 'none', sm: 'block' } }}>
                            <ul className='navigation-menu'>
                                <li>
                                    <Link to='/'> Home</Link>
                                </li>
                                {/* <li>
                                    <Link to='/menu'> Menu</Link>
                                </li> */}
                                <li>
                                    <Link to='/about'> About</Link>
                                </li>
                                {/* <li>
                                <Link to='/contact'> Contact</Link>
                                </li> */}
                                <li >
                                    <Link to='/Signin'> Login</Link>
                                </li>
                                <li>
                                    <Link to='/Signup'> Sign up</Link>
                                </li>
                                <Link to='/Cart'
                                    style={{ color: "white", textDecoration: "none" }}
                                >
                                    <FastfoodIcon /> 
                                    <div className="nav-cart">Cart ({cartlength.length}) </div>
                                </Link>
                                {/* <li>
                               <Link to='/Cart'> Cart ({cartlength.length}) </Link>
                            </li> */}

                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        variant="temporary"
                        open={mobileopen}
                        onClose={handleDrawerToggle}
                        sx={{
                            display: { xs: "block", sm: "none" },
                            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "200px" },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box >
                    <Toolbar />
                </Box>

            </Box>
        </>
    )
}

export default Header