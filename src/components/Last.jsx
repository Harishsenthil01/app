import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { AcUnit, EmojiEvents, Favorite, Window } from '@mui/icons-material';
import { Stack, Box } from '@mui/material';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';



// const Demo = styled('div')(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
// }));

const Last = () => {
  const listItems = [
    {
      country: "Germany",
      flag: "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/flagpack/de.webp",
    },
    {
      country: "England",
      flag: "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/flagpack/gb.webp",
    },
    {
      country: "France",
      flag: "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/flagpack/fr.webp",
    },
    {
      country: "Korea",
      flag: "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/flagpack/kr.webp",
    },
    {
      country: "USA",
      flag: "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/flagpack/us.webp",
    },
  ];

  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Stack spacing={2}  width={'100%'} sx={{
      flexDirection: { xs: 'column', sm: 'column', md: 'row' }, // Responsive direction
      marginTop: '20px',
      // maxWidth: {md: '500px'}
    }}>
      {/* First List */}
      <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
        {listItems.map((item, index) => (
          <React.Fragment key={item.country}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <ListItem alignItems="center" sx={{ paddingBlock: '10px' }}>
                <ListItemAvatar>
                  <img alt={item.country} src={item.flag} width="30px" />
                </ListItemAvatar>
                <ListItemText primary={item.country} sx={{ marginRight: 2 }} />
              </ListItem>
              <Box display="flex" gap="30px">
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <AcUnit />
                  <Typography variant="body2">9.91k</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Window />
                  <Typography variant="body2">9.91k</Typography>
                </Box>
              </Box>
            </Box>
            {index < listItems.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
      </List>

      {/* Second List */}
      <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
        <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
          <div style={{ display: 'flex' }}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/avatar/avatar-1.webp" />
            </ListItemAvatar>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <ListItemText
                primary="Jayvion Simon"
                secondary={
                  <React.Fragment>
                    <Typography>
                      <Favorite sx={{ verticalAlign: 'middle', mr: 1 }} />
                      9.9lk
                    </Typography>
                  </React.Fragment>
                }
              />
            </div>
          </div>
          <div>
            <EmojiEvents sx={{ color: 'blue' }} />
          </div>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
          <div style={{ display: 'flex' }}>
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/avatar/avatar-2.webp" />
            </ListItemAvatar>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <ListItemText
                primary="Deja Brady"
                secondary={
                  <React.Fragment>
                    <Typography>
                      <Favorite sx={{ verticalAlign: 'middle', mr: 1 }} />
                      9.9lk
                    </Typography>
                  </React.Fragment>
                }
              />
            </div>
          </div>
          <div>
            <EmojiEvents sx={{ color: 'green' }} />
          </div>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
          <div style={{ display: 'flex' }}>
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/avatar/avatar-3.webp" />
            </ListItemAvatar>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <ListItemText
                primary="Lucian Obrien"
                secondary={
                  <React.Fragment>
                    <Typography>
                      <Favorite sx={{ verticalAlign: 'middle', mr: 1 }} />
                      9.9lk
                    </Typography>
                  </React.Fragment>
                }
              />
            </div>
          </div>
          <div>
            <EmojiEvents sx={{ color: 'red' }} />
          </div>
        </ListItem>
      </List>
    </Stack>
  );
};

export default Last;
