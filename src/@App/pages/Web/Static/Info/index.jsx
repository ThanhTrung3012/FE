import StaticPageLayout from '@App/components/Layout/StaticPageLayout';
import React from 'react';
import { useParams } from 'react-router-dom';
import Question from './components/Question';
import Payment from './components/Payment';
import Recruitment from './components/Recruitment';
import { WEB_ROUTERS } from '@App/configs/constants';

const Info = () => {
    const { page } = useParams();

    const menus = [
        {label: 'Giải đáp mua hàng Online',path: WEB_ROUTERS.staticPage.info.question},
        {label: 'Phương thức thanh toán',path: WEB_ROUTERS.staticPage.info.payment},
        {label: 'Tuyển dụng',path: WEB_ROUTERS.staticPage.info.recruitment},
    ]

    return (
        <StaticPageLayout
            menus={menus}
            content={
                <div>
                    {page === 'cau-hoi-thuong-gap' && <Question />}
                    {page === 'phuong-thuc-thanh-toan' && <Payment />}
                    {page === 'tuyen-dung' && <Recruitment />}
                </div>
            }
        />
    );
};

export default Info;
