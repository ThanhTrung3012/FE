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

import React from 'react';
import { CMS_ROUTERS, WEB_ROUTERS } from './constants';

// web pages
const LazyHome = React.lazy(() => import('../pages/Web/Home'));

// cms pages
const LazyDashboard = React.lazy(() => import('../pages/Admin/Dashboard'));

export const webRouterConfigs = [
    {
        path: WEB_ROUTERS.home,
        element: <LazyHome />
    }
];

export const cmsRouterConfigs = [
    {
        path: CMS_ROUTERS.doashboard,
        element: <LazyDashboard />
    },
];
