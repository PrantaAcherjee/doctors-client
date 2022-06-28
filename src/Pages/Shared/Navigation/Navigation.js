import { Link, NavLink } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';
import  React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


const Navigation = () => {
  const {user,logOut}=useAuth();
  const [anchorElUser, setAnchorElUser] =  useState(null); 
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
    return (   
    <AppBar position="fixed" style={{background:'rgb(18, 187, 187)'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Dentist's Portal
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Dentist's Portal
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* This field are empty  */}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.displayName} src= {user.photoURL} />             
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={(anchorElUser)}
              onClose={handleCloseUserMenu}
              >
               <MenuItem onClick={handleCloseUserMenu}>
                 <Box>
                 <NavLink style={{textDecoration:'none',  color:'blue'}} to="/appointment">
                <Button color="inherit">Appointment</Button>
                </NavLink>
                 </Box>
               {
                user?.email?
               <Box>           
               <NavLink style={{textDecoration:'none',color:'blue'}} to="/dashboard">
               <Button color="inherit">Dashboard</Button>
               </NavLink>
                
               <Button onClick={logOut} color="inherit">Logout</Button>
               </Box>
               :
               <NavLink style={{textDecoration:'none',color:'blue'}} to="/login">
               <Button color="inherit">Login</Button>
              </NavLink>
          }
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>        
    );
};

export default Navigation;