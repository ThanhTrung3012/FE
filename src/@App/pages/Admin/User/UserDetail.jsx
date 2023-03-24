import React from 'react';
import { Link } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';

import UserForm from './components/UserForm';
import useUserDetail from './hooks/useUserDetail';
import CmsPageContent from '@App/components/Layout/CmsPageContent';
import { CMS_ROUTERS } from '@App/configs/constants';

const UserDetail = () => {
    const { isEdit, loading, user } = useUserDetail();

    const breadcrumbs = [
        <Link to={CMS_ROUTERS.user.list}>Người dùng</Link>,
        <Typography>Chi tiết người dùng</Typography>
    ];

    return (
        <CmsPageContent
            title='Chi tiết người dùng'
            breadcrumbs={breadcrumbs}
            content={
                loading ? (
                    <Box className='flex justify-center pt-10'>
                        <CircularProgress />
                    </Box>
                ) : (
                    <UserForm isEdit={isEdit} user={user}/>
                )
            }
        />
    );
};

export default UserDetail;
