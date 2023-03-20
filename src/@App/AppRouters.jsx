/*
 * Created Date: 08-02-2023, 14:30 pm
 * Author: Nghiêm Mạnh Cường
 * Email: nghiemmanhcuong98@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) ...
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import { createBrowserRouter } from 'react-router-dom';
import React from 'react';

const LazyLogin = React.lazy(() => import('@App/pages/Admin/Auth/Login'));

import { webRouterConfigs, cmsRouterConfigs } from '@App/configs/routerConfigs';
import { CMS_ROUTERS } from '@App/configs/constants';

import Page404 from './pages/Errors/Page404';
import WebLayout from './components/Layout/WebLayout';
import CMSLayout from './components/Layout/CMSLayout';
import AuthLayout from './components/Layout/AuthLayout';

const appRouterConfigs = createBrowserRouter([
    {
        path: '/cms',
        element: <AuthLayout />,
        children: [
            {
                path: CMS_ROUTERS.auth.login,
                element: <LazyLogin />
            },
            {
                path: '*',
                element: <Page404 />
            }
        ]
    },
    {
        path: '',
        element: <WebLayout />,
        children: [
            ...webRouterConfigs,
            {
                path: '*',
                element: <Page404 />
            }
        ]
    },
    {
        path: 'cms',
        element: <CMSLayout />,
        children: [
            ...cmsRouterConfigs,
            {
                path: '*',
                element: <Page404 />
            }
        ]
    },
    {
        path: '*',
        element: <Page404 />
    }
]);

export default appRouterConfigs;
