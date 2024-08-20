import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, styled } from '@mui/material';

// Define the styled Card component
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'black',
  color: 'white', // Ensure text is visible on dark background
  maxWidth: 650,
  borderRadius: 15,
  marginTop: 20,
  padding: 40,
  display: 'flex',
  flexDirection: 'column', // Default for xs
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row', // Change to 'row' on sm and up
  },
  alignItems: 'center',
}));

const CardBox = () => {
  return (
    <StyledCard>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Welcome back 👋 
          Jaydon Frankie
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
          </Typography>
        </CardContent>
        <CardActions>
        <Button sx={{ backgroundColor: 'success.main', color: 'white', borderRadius: 3}}>
          Go now
        </Button>
      </CardActions>
      </CardActionArea>
      
      <CardMedia
        component="img"
        height="194"
       sx={{width: '10%'}}
        image="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/illustrations/characters/character-3.webp"
        alt="Paella dish"
      />
    </StyledCard>
  );
}

export default CardBox;
