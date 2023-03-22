import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import CmsPageContent from '@App/components/Layout/CmsPageContent';
import { CMS_ROUTERS } from '@App/configs/constants';
import ProductForm from './components/ProductForm';
import useProductDetail from './hooks/useProductDetail';

const ProductDetail = () => {
    const { isEdit, loading, product } = useProductDetail();

    const breadcrumbs = [
        <Link to={CMS_ROUTERS.product.list}>Sản phẩm</Link>,
        <Typography>Chi tiết sản phẩm</Typography>
    ];

    return (
        <CmsPageContent
            title='Chi tiết sản phẩm'
            breadcrumbs={breadcrumbs}
            content={
                loading ? (
                    <Box className='flex justify-center pt-10'>
                        <CircularProgress />
                    </Box>
                ) : (
                    <ProductForm isEdit={isEdit} product={product} />
                )
            }
        />
    );
};

export default ProductDetail;
