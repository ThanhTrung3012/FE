import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import CmsPageContent from '@App/components/Layout/CmsPageContent';
import { CMS_ROUTERS } from '@App/configs/constants';
import BannerForm from './components/BannerForm';
import useBannerDetail from './hooks/useBannerDetail';

const BannerDetail = () => {
    const { isEdit, loading, banner } = useBannerDetail();

    const breadcrumbs = [
        <Link to={CMS_ROUTERS.banner.list}>Banner</Link>,
        <Typography>Chi tiết banner</Typography>
    ];

    return (
        <CmsPageContent
            title='Chi tiết banner'
            breadcrumbs={breadcrumbs}
            content={
                loading ? (
                    <Box className='flex justify-center pt-10'>
                        <CircularProgress />
                    </Box>
                ) : (
                    <BannerForm isEdit={isEdit} banner={banner}/>
                )
            }
        />
    );
};

export default BannerDetail;
