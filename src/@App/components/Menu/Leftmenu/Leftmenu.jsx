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

import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import menuConfigs from '@App/configs/menuConfigs';
import React from 'react';
import LeftMenuItem from './LeftMenuItem';
import { useNavigate } from 'react-router-dom';
import { CMS_ROUTERS } from '@App/configs/constants';
import { clearSession } from '@Core/Helper/Session';
import { useConfirm } from '@Core/components/Confirm/CoreConfirm';

const Leftmenu = () => {
    const navigate = useNavigate();
    const confirm = useConfirm();

    const handleLogout = () => {
        clearSession();
        navigate(CMS_ROUTERS.auth.login);
    };

    const handleConfirmLogin = () => {
        confirm({
            content: 'Bạn có muốn đăng xuất tải khoản không?',
            okText: 'Đăng xuất',
            onOk: handleLogout
        });
    };

    return (
        <Box className='pt-[57px]'>
            <Toolbar disableGutters>
                <List className='w-full'>
                    {menuConfigs.map((item, index) => {
                        return <LeftMenuItem item={item} key={index} />;
                    })}
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary={'Đăng xuất'} onClick={handleConfirmLogin} />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                </List>
            </Toolbar>
        </Box>
    );
};

export default Leftmenu;
