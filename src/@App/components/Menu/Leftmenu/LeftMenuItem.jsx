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

import React from 'react';
import {useMatches, useNavigate} from 'react-router-dom'
import { Divider, ListItem, ListItemButton, ListItemText } from '@mui/material';

const isMenuSelected = (matches = [], item) => {
	return matches.find(i => i.pathname.includes(item?.path)) ?? null
}

const LeftMenuItem = ({ item }) => {
    const navigate = useNavigate()
    const matches = useMatches()
	const match = isMenuSelected(matches, item)

    return (
        <>
            <ListItem disablePadding selected={Boolean(match)} onClick={() => navigate(item?.path)}>
                <ListItemButton>
                    <ListItemText primary={item.title} />
                </ListItemButton>
            </ListItem>
            <Divider />
        </>
    );
};

export default LeftMenuItem;
