import React from 'react';
import CardBox from '../components/CardBox';
import ImageSlider from '../components/ImageSlider';
import { Stack } from '@mui/material';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2'
import Invoice from '../components/Invoice';
import Last from '../components/Last';

const Main = () => {
  return (
    <Stack>
      <Stack sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, 
    spacing: {xs: 0, sm: 2},
    }}>
        <CardBox />
        <ImageSlider />
      </Stack>
      <Stack>
        <Card1 />
        <Card2 />
        <Invoice />
        <Last/>
      </Stack>
    </Stack>
  );
};

export default Main;
