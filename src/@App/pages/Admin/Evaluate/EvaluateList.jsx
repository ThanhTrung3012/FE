import React from 'react';
import { Link } from 'react-router-dom';

import CmsPageContent from '@App/components/Layout/CmsPageContent';
import { CMS_ROUTERS } from '@App/configs/constants';
import EvaluateTable from './components/EvaluateTable';
import EvaluateProvider from './EvaluateProvider';

const EvaluateList = () => {
    const breadcrumbs = [<Link to={CMS_ROUTERS.evaluate.list}>Đánh giá</Link>];

    return (
        <EvaluateProvider>
            <CmsPageContent
                title='Quản lý đánh giá'
                breadcrumbs={breadcrumbs}
                content={<EvaluateTable />}
            />
        </EvaluateProvider>
    );
};

export default EvaluateList;
