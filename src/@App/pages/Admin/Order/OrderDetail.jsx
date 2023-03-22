import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import CmsPageContent from '@App/components/Layout/CmsPageContent';
import { CMS_ROUTERS } from '@App/configs/constants';
import OrderForm from './components/OrderForm';
import useOrderDetail from './hooks/useOrderDetail';

const OrderDetail = () => {
    const {loading,order} = useOrderDetail()

    const breadcrumbs = [
        <Link to={CMS_ROUTERS.order.list}>Đơn hàng</Link>,
        <Typography>Thay đổi trạng thái đơn hàng</Typography>
    ];

    return (
        <CmsPageContent
            title='Thay đổi trạng thái đơn hàng'
            breadcrumbs={breadcrumbs}
            content={
                loading ? (
                    <Box className='flex justify-center pt-10'>
                        <CircularProgress />
                    </Box>
                ) : (
                    <OrderForm order={order}/>
                )
            }
        />
    );
};

export default OrderDetail;
