

import { createBrowserRouter, Navigate } from 'react-router-dom';
import React from 'react';

const LazyLogin = React.lazy(() => import('@App/pages/Admin/Auth/Login'));

import { webRouterConfigs, cmsRouterConfigs } from '@App/configs/routerConfigs';
import { CMS_ROUTERS, WEB_ROUTERS } from '@App/configs/constants';

import Page404 from './pages/Errors/Page404';
import WebLayout from './components/Layout/WebLayout';
import CMSLayout from './components/Layout/CMSLayout';
import AuthLayout from './components/Layout/AuthLayout';
import Contact from './pages/Web/Static/Contact';
import Policy from './pages/Web/Static/Policy';
import Info from './pages/Web/Static/Info';

const appRouterConfigs = createBrowserRouter([
    {
        path: 'cms',
        element: <Navigate to={CMS_ROUTERS.auth.login}/>,
    },
    {
        path: 'cms',
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
        path: WEB_ROUTERS.staticPage.contact.router,
        element:<Contact />
    },
    {
        path: WEB_ROUTERS.staticPage.policy.router,
        element:<Policy />
    },
    {
        path: WEB_ROUTERS.staticPage.info.router,
        element:<Info />
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
