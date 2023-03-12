import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import menuConfigs from '@App/configs/menuConfigs';
import React from 'react';
import LeftMenuItem from './LeftMenuItem';

const Leftmenu = () => {

    const handleLogout = () => {

    }

    return (
        <Box className="pt-[60px]">
            <Toolbar disableGutters>
                <List className="w-full">
                    {menuConfigs.map((item,index) => {
                        return <LeftMenuItem item={item} key={index}/>;
                    })}
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary={'Logout'} onClick={handleLogout} />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                </List>
            </Toolbar>
        </Box>
    );
};

export default Leftmenu;
