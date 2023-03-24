import React from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import CmsPageContent from '@App/components/Layout/CmsPageContent';
import { CMS_ROUTERS } from '@App/configs/constants';
import UserTable from './components/ProductTable';
import ProductProvider from './ProductProvider';

const ProductList = () => {
    const navigate = useNavigate();
    const breadcrumbs = [<Link to={CMS_ROUTERS.product.list}>Sản phẩm</Link>];

    return (
        <ProductProvider>
            <CmsPageContent
                title='Quản lý sản phẩm'
                breadcrumbs={breadcrumbs}
                content={<UserTable />}
                action={
                    <Button
                        variant='contained'
                        onClick={() => navigate(CMS_ROUTERS.product.list + '/new')}
                    >
                        Thêm sản phẩm
                    </Button>
                }
            />
        </ProductProvider>
    );
};

export default ProductList;
