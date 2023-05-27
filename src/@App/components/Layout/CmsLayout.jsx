/*
 * Created Date: 03-02-2023, 21:00 pm
 * Author: Nghiêm Mạnh Cường
 * Email: nghiemmanhcuong98@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) Đỗ Thành trung
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import React, { Suspense, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AppBar, Avatar, Box, CircularProgress, Drawer, Toolbar, Tooltip } from '@mui/material';

import Leftmenu from '../Menu/Leftmenu/Leftmenu';
import { getAuthToken, getOneWayUser } from '@Core/Helper/Session';
import { CMS_ROUTERS } from '@App/configs/constants';

const drawerWidth = 280;

const CmsLayout = () => {
    const token = getAuthToken();
    const user = getOneWayUser()
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate(CMS_ROUTERS.auth.login);
        }
    }, []);

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position='fixed' sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
                <Toolbar className='flex justify-between'>
                    <Link to={CMS_ROUTERS.doashboard}>
                        <img
                            src='https://onewaymobile.vn/images/config/logo-1_1663066621_1663318779.svg'
                            alt=''
                        />
                    </Link>
                    <Tooltip title={user?.name}>
                        <Avatar alt='Remy Sharp' src={user?.avatar} className='object-cover'/>
                    </Tooltip>
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
                className='bg-gray-50'
            >
                <Toolbar />
                <Box className='flex flex-col h-full' sx={{ minHeight: `calc(100vh - 200px)` }}>
                    <Suspense
                        fallback={
                            <div className='flex justify-center items-center h-screen'>
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
