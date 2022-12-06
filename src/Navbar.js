import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import logo from './images/logo.png';


export default function Navbar() {
    const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
  
      <AppBar position="fixed" style={{backgroundColor:'#22577a'}}>
        <Toolbar className='d-flex justify-content-between px-5'>
        <IconButton aria-label="logo" onClick={()=> navigate('/')}>
            <img src = {logo} alt = "logo" />
          </IconButton>
          
          <Typography variant="h6" sx={{ flexGrow: 1}} >
            Raising Skills
          </Typography>

          <div>
          <Button color = "inherit" variant="text" id="navbarsignup" onClick={()=> navigate('/signup')}>SignUp</Button>
          <Button color="inherit" id="navbarlogin" onClick={()=> navigate('/login')}>Login</Button>
          <Button color="inherit" id="portfolio" onClick={()=> navigate('/PersonalInformation')}>Portfolio</Button>
          <Button color="inherit" id="about" onClick={()=> navigate('/aboutus')}>About Us</Button>
          <Button color="inherit" id="Contact" onClick={()=> navigate('/contactus')}>Contact Us</Button>
          </div>        
        </Toolbar>
      </AppBar>
    </Box>
  );
}
