import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar, Avatar, Box, CircularProgress, Drawer, Toolbar } from '@mui/material';
import Leftmenu from '../Menu/Leftmenu/Leftmenu';

const drawerWidth = 240;

const CmsLayout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position='fixed' sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
                <Toolbar className='flex justify-between'>
                    <Box>
                        <img
                            src='https://onewaymobile.vn/images/config/logo-1_1663066621_1663318779.svg'
                            alt=''
                        />
                    </Box>
                    <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
                </Toolbar>
            </AppBar>
            <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
                <Drawer
                    variant='permanent'
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                    open
                >
                    <Leftmenu />
                </Drawer>
            </Box>
            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Box className='flex flex-col h-full' sx={{ minHeight: `calc(100vh - 200px)` }}>
                    <Suspense
                        fallback={
                            <div className='flex justify-center items-center h-screen w-screen'>
                                <CircularProgress />
                            </div>
                        }
                    >
                        <Outlet />
                    </Suspense>
                </Box>
            </Box>
        </Box>
    );
};

export default CmsLayout;
