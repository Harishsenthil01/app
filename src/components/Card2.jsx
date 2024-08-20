import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import { Stack } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';


// Define the bull variable
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Card2 = () => {
  return (
    <Stack width={'100%'} sx={{
      flexDirection: { xs: 'column', sm: 'column', md: 'row' }, // Responsive direction
      marginTop: '20px',
    }}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         Current doenload
        </Typography>
        <Typography sx={{ fontSize: 14 }} component="div">
         Downloaded by operating system
        </Typography>
        <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
       
      </CardContent>
    </Card>
    <Card sx={{ minWidth: 275 }}>
      <CardContent sx={{'& .MuiChartsLegend-mark':{rx: '20px'}}}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Area installed
        </Typography>
        <Typography sx={{ fontSize: 14 }} component="div">
        (43%) than last year
        </Typography>
        <BarChart
      series={[
        { data: [3, 4, 1, 6, 5], stack: 'A', label: 'Series A1' },
        { data: [4, 3, 1, 5, 8], stack: 'A', label: 'Series A2' },
        { data: [4, 2, 5, 4, 1], stack: 'B', label: 'Series B1' },
        { data: [2, 8, 1, 3, 1], stack: 'B', label: 'Series B2' },
        { data: [10, 6, 5, 8, 9], label: 'Series C1' },
      ]}
      width={600}
      height={350}
      slotProps={{
        legend:{
          itemStyle: {
            borderRadius: '50px'
        }
        }

      }}
    />
       
      </CardContent>
    </Card>
    </Stack>
  );
}

export default Card2;
