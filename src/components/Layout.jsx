import React from 'react'

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
    <Sidebar />
    <Box sx={{ flex: 6 }}>
        <Navbar />
        <Box sx={{ p: 3 }}>{children}</Box>
    </Box>
</Box>
  )
}

export default Layout