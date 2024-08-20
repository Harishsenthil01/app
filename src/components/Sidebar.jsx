import React from 'react';
import logo from '../assets/images/logo.png';
import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  AccountBox,
  Analytics,
  Book,
  BusinessCenter,
  CalendarToday,
  Chat,
  InsertDriveFile,
  Leaderboard,
  PendingActions,
  Person2,
  ProductionQuantityLimits,
  Save,
  TextSnippet,
  Tour,
  WebStories,
  Work,
  Mail,
  LockPerson,
  Menu,
  Block,
  FilePresent,
  Stars,
  LaunchOutlined,
  UploadFile,
  PersonAdd,
} from '@mui/icons-material';

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const Sidebar = () => {
  return (
    <Box flex={2} p={2} sx={{ backgroundColor: '#f5f5f5', display: {xs: 'none', sm: 'none', md: 'none', lg: 'block'} }}>
      {/* Border added for debugging visibility */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky' }}>
        <img src={logo} alt="Logo" style={{ height: '25px', width: 'auto' }} />
        <IconButton aria-label="collapse">
          <ChevronLeftIcon />
        </IconButton>
      </Box>

      <Box sx={{ mt: 2, color: '919EAB#' }}>
        <Typography sx={{ pt: '20px', fontSize: '13px' }}>OVERVIEW</Typography>
        <List sx={{ color: '#00A76F' }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <AccountBox sx={{ color: '#00A76F' }} />
              </ListItemIcon>
              <ListItemText primary="App" />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <BusinessCenter sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Ecommerce" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <Analytics sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Analytics" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <Leaderboard sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Banking" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <Book sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Booking" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <InsertDriveFile sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="File" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <TextSnippet sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Course" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: 1, color: '#919EAB' }}>
        <Typography sx={{ pt: '20px', fontSize: '13px' }}>MANAGEMENT</Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <Person2 sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="User" />
              <IconButton aria-label="collapse">
                <ChevronRightIcon />
              </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <ProductionQuantityLimits sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Product" />
              <IconButton aria-label="collapse">
                <ChevronRightIcon />
              </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <ProductionQuantityLimits sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Order" />
              <IconButton aria-label="collapse">
                <ChevronRightIcon />
              </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <InsertDriveFile sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Invoice" />
              <IconButton aria-label="collapse">
                <ChevronRightIcon />
              </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <WebStories sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Blog" />
              <IconButton aria-label="collapse">
                <ChevronRightIcon />
              </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <Work sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Job" />
              <IconButton aria-label="collapse">
                <ChevronRightIcon />
              </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <Tour sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Tour" />
              <IconButton aria-label="collapse">
                <ChevronRightIcon />
              </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <Save sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Filemanager" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <Mail sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Mail" />
            </ListItemButton>
            <Typography sx={{ color: 'red', background: '#e9c2c2', borderRadius: '10px' }}>+32</Typography>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <Chat sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <CalendarToday sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <PendingActions sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Kanban" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: 2, color: '#919EAB' }}>
        <Typography sx={{ pt: '20px', fontSize: '13px' }}>MISC</Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <LockPerson sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Permission" secondary="admin can see this item" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <Menu sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Level" />
              <IconButton aria-label="collapse">
                <ChevronRightIcon />
              </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <Block disabled />
              </ListItemIcon>
              <ListItemText primary="Disabled" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <Stars sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Label" />
              <PersonAdd sx={{ color: 'blue' }} />
              <Typography sx={{ color: 'blue', background: '#c4c4da', borderRadius: '10px' }}>New</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <Menu sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Caption" secondary="Quisque malesuada placerat nisl" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <FilePresent sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Params" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <LaunchOutlined sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="External link" />
              <LaunchOutlined sx={{ color: '#919EAB' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <UploadFile sx={{ color: '#919EAB' }} />
              </ListItemIcon>
              <ListItemText primary="Blank" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: 1, color: '#919EAB', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
      <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          badgeContent="free" color='success'
          
      >
      <Avatar
         alt="Travis Howard"
         src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/avatar/avatar-25.webp"
      />
      </Badge>
      </div>
      <Typography variant='h6'>Jaydon Frankie</Typography>
      <Typography>demo@minimals.cc</Typography>
      <Button sx={{bg: 'black'}} variant='contained'>Upgrade to pro</Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
