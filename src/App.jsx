import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Stack from '@mui/material/Stack';
import Main from './components/Main';


const App = () => {
  return (
    <Stack direction="row" justifyContent={'space-between'} width={'100%'}>
      <Stack sx={{width: {xs: '0%', sm: '0%', md: '0%',lg: '20%'}}}>
      <Sidebar />
      </Stack>
      <Stack sx={{width: {xs: '100%', sm: '100%', md: '100%',lg: '100%'}}}>
      <Navbar />
      <Main />
      </Stack>
      
      
    </Stack>
  );
};

export default App;