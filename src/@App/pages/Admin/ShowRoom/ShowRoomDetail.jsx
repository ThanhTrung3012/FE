import React from 'react';
import { Link } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';

import { CMS_ROUTERS } from '@App/configs/constants';
import UserForm from './components/ShowRoomForm';
import useShowRoomDetail from './hooks/useShowRoomDetail';
import CmsPageContent from '@App/components/Layout/CmsPageContent';

const ShowRoomDetail = () => {
    const { isEdit, loading, showRoom } = useShowRoomDetail();

    const breadcrumbs = [
        <Link to={CMS_ROUTERS.showRoom.list}>Cửa hàng</Link>,
        <Typography>Chi tiết cửa hàng</Typography>
    ];

    return (
        <CmsPageContent
            title='Chi tiết cửa hàng'
            breadcrumbs={breadcrumbs}
            content={
                loading ? (
                    <Box className='flex justify-center pt-10'>
                        <CircularProgress />
                    </Box>
                ) : (
                    <UserForm isEdit={isEdit} showRoom={showRoom} />
                )
            }
        />
    );
};

export default ShowRoomDetail;
