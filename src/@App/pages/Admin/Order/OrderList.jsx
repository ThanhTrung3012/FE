import React from 'react';
import { Link } from 'react-router-dom';

import CmsPageContent from '@App/components/Layout/CmsPageContent';
import { CMS_ROUTERS } from '@App/configs/constants';
import ContactTable from './components/OrderTable';
import OrderProvider from './OrderProvider';

const OrderList = () => {
    const breadcrumbs = [<Link to={CMS_ROUTERS.contact.list}>Đơn hàng</Link>];

    return (
        <OrderProvider>
            <CmsPageContent
                title='Quản lý đơn hàng'
                breadcrumbs={breadcrumbs}
                content={<ContactTable />}
            />
        </OrderProvider>
    );
};

export default OrderList;
