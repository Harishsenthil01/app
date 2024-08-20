import { Mail, Notifications, Pets, UnfoldMore, Search, Contacts, Settings } from '@mui/icons-material';
import { AppBar, InputBase, styled, Toolbar, Typography, Badge, Avatar, Menu, MenuItem, IconButton, Box } from '@mui/material';
import React, { useState } from 'react';
import logo from '../assets/images/logo-1.png';
import logo1 from '../assets/images/flag.png'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#FFFF',
});

const SearchBar = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0px 10px',
  borderRadius: theme.shape.borderRadius,
  width: '15%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    justifyContent: 'end'
  },
}));

const Userbox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <IconButton aria-label="collapse">
          <img src={logo} alt="Logo" style={{ height: '25px', width: 'auto' }} />
          <Box component="span" sx={{ fontSize: '14px', fontWeight: 'bold', ml: 1 }}>Team1</Box>
          <Box component="span" sx={{ fontSize: '14px', color: 'success.main', ml: 1 }}>free</Box>
          <UnfoldMore fontSize="small" sx={{ ml: 1 }} />
        </IconButton>
        <Icons>
        <Search sx={{color: '#bdb1b1'}} />
          <SearchBar>
            
            <InputBase sx={{ width: '100%', color: 'black' }} placeholder="clt k" />
          </SearchBar>
          <IconButton aria-label="collapse">
          <img src={logo1} alt="Logo" style={{ height: '25px', width: 'auto' }} />
          </IconButton>
          <Badge badgeContent={4} color="error">
            <Notifications sx={{color: "#bdb1b1"}}/>
          </Badge>
          <Contacts sx={{color: "#bdb1b1"}} />
          <Settings sx={{color: "#bdb1b1"}} />
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/avatar/avatar-25.webp"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <Userbox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://assets.website-files.com/6427381726a472874096a798/642754d52993b9044d329d40_Ellipse%202-2.png"
          />
          <Typography>John</Typography>
        </Userbox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
