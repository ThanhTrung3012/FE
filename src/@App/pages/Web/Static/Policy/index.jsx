import StaticPageLayout from '@App/components/Layout/StaticPageLayout';
import React from 'react';
import { useParams } from 'react-router-dom';
import Purchase from './components/Purchase';
import Guarantee from './components/Guarantee';
import Transport from './components/Transport';
import { WEB_ROUTERS } from '@App/configs/constants';

const Policy = () => {
    const { page } = useParams();

    const menus = [
        {label: 'Chính sách mua hàng',path: WEB_ROUTERS.staticPage.policy.purchase},
        {label: 'Chính sách bảo hành',path: WEB_ROUTERS.staticPage.policy.guarantee},
        {label: 'Chính sách vận chuyển',path: WEB_ROUTERS.staticPage.policy.transport},
    ]

    return (
        <StaticPageLayout
            menus={menus}
            content={
                <div>
                    {page === 'chinh-sach-mua-hang' && <Purchase />}
                    {page === 'chinh-sach-bao-hanh' && <Guarantee />}
                    {page === 'chinh-sach-van-chuyen' && <Transport />}
                </div>
            }
        />
    );
};

export default Policy;
