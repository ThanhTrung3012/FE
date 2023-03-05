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
import { webRouterConfigs, cmsRouterConfigs } from '@App/configs/routerConfigs';

import Page404 from './pages/Errors/Page404';
import WebLayout from './components/Layout/WebLayout';
import CMSLayout from './components/Layout/CMSLayout';

const appRouterConfigs = createBrowserRouter([
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
