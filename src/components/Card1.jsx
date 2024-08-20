import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BarChart } from '@mui/x-charts/BarChart';
import { KeyboardDoubleArrowDown, KeyboardDoubleArrowUp } from '@mui/icons-material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '32%',
  },
}));

const Card1 = () => {
  return (
    <Stack
      width={'100%'}
      justifyContent={'space-between'}
      sx={{
        flexDirection: { xs: 'column', sm: 'row' }, // Responsive direction
        marginTop: '20px',
      }}
    >
      <StyledCard>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Total active users
          </Typography>
          <Box display="flex" alignItems="center" marginTop="20px">
            <Typography variant="h4" component="div">
              18765
            </Typography>
            <BarChart
              xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
              series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
              width={200}
             height={150}
              responsive={true}
            />
          </Box>
          <Box display="flex" alignItems="center" marginTop="20px">
            <KeyboardDoubleArrowUp sx={{ color: 'success.main' }} />
            <Typography sx={{ ml: 1 }} color="text.secondary">
              +2.6% last 7 days
            </Typography>
          </Box>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Total installed
          </Typography>
          <Box display="flex" alignItems="center" marginTop="20px">
            <Typography variant="h4" component="div">
              4876
            </Typography>
            <BarChart
              xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
              series={[
                { data: [4, 3, 5], color: 'blue' },
                { data: [1, 6, 3], color: 'green' },
                { data: [2, 5, 6], color: 'red' },
              ]}
              width={200}
              height={150}
              responsive={true}
            />
          </Box>
          <Box display="flex" alignItems="center" marginTop="20px">
            <KeyboardDoubleArrowUp sx={{ color: 'success.main' }} />
            <Typography sx={{ ml: 1 }} color="text.secondary">
              +2.6% last 7 days
            </Typography>
          </Box>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Total downloads
          </Typography>
          <Box display="flex" alignItems="center" marginTop="20px">
            <Typography variant="h4" component="div">
              678
            </Typography>
            <BarChart
              xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
              series={[
                { data: [4, 3, 5], color: '#1E90FF' }, // DodgerBlue color
                { data: [1, 6, 3], color: '#32CD32' }, // LimeGreen color
                { data: [2, 5, 6], color: '#FF6347' }, // Tomato color
              ]}
             width={200}
             height={150}
              responsive={true}
            />
          </Box>
          <Box display="flex" alignItems="center" marginTop="20px">
            <KeyboardDoubleArrowDown sx={{ color: 'error.main' }} />
            <Typography sx={{ ml: 1 }} color="text.secondary">
              +2.6% last 7 days
            </Typography>
          </Box>
        </CardContent>
      </StyledCard>
    </Stack>
  );
};

export default Card1;
