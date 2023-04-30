/*
 * Created Date: 08-02-2023, 14:30 pm
 * Author: Nghiêm Mạnh Cường
 * Email: nghiemmanhcuong98@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) Đỗ Thành trung
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import React from 'react';
import { CMS_ROUTERS, WEB_ROUTERS } from './constants';

// web pages
const LazyHome = React.lazy(() => import('../pages/Web/Home'));
const LazyCollections = React.lazy(() => import('../pages/Web/Collections'));

// cms pages
const LazyDashboard = React.lazy(() => import('../pages/Admin/Dashboard/index.jsx'));
const LazyListUser = React.lazy(() => import('../pages/Admin/User/UserList'));
const LazyUserDetail = React.lazy(() => import('../pages/Admin/User/UserDetail'));
const LazyListCategory = React.lazy(() => import('../pages/Admin/Category/CategoryList'));
const LazyCategoryDetail = React.lazy(() => import('../pages/Admin/Category/CategoryDetail'));
const LazyListShowRoom = React.lazy(() => import('../pages/Admin/ShowRoom/ShowRoomList'));
const LazyShowRoomDetail = React.lazy(() => import('../pages/Admin/ShowRoom/ShowRoomDetail'));
const LazyListBlogCategory = React.lazy(() =>
    import('../pages/Admin/BlogCategory/BlogCategoryList')
);
const LazyBlogCategoryDetail = React.lazy(() =>
    import('../pages/Admin/BlogCategory/BlogCategoryDetail')
);
const LazyContactList = React.lazy(() => import('../pages/Admin/Contact/ContactList'));
const LazyOrderList = React.lazy(() => import('../pages/Admin/Order/OrderList'));
const LazyOrderDetail = React.lazy(() => import('../pages/Admin/Order/OrderDetail'));
const LazyEvaluateList = React.lazy(() => import('../pages/Admin/Evaluate/EvaluateList'));
const LazyListBlog = React.lazy(() => import('../pages/Admin/Blog/BlogList'));
const LazyBlogDetail = React.lazy(() => import('../pages/Admin/Blog/BlogDetail'));
const LazyListProduct = React.lazy(() => import('../pages/Admin/Product/ProductList'));
const LazyProductDetail = React.lazy(() => import('../pages/Admin/Product/ProductDetail'));

export const webRouterConfigs = [
    {
        path: WEB_ROUTERS.home,
        element: <LazyHome />
    },
    {
        path: WEB_ROUTERS.collection.router,
        element: <LazyCollections />
    },
];

export const cmsRouterConfigs = [
    {
        path: CMS_ROUTERS.doashboard,
        element: <LazyDashboard />
    },
    {
        path: CMS_ROUTERS.user.list,
        children: [
            {
                path: '',
                element: <LazyListUser />
            },
            {
                path: ':id',
                element: <LazyUserDetail />
            }
        ]
    },
    {
        path: CMS_ROUTERS.category.list,
        children: [
            {
                path: '',
                element: <LazyListCategory />
            },
            {
                path: ':id',
                element: <LazyCategoryDetail />
            }
        ]
    },
    {
        path: CMS_ROUTERS.showRoom.list,
        children: [
            {
                path: '',
                element: <LazyListShowRoom />
            },
            {
                path: ':id',
                element: <LazyShowRoomDetail />
            }
        ]
    },
    {
        path: CMS_ROUTERS.blogCategory.list,
        children: [
            {
                path: '',
                element: <LazyListBlogCategory />
            },
            {
                path: ':id',
                element: <LazyBlogCategoryDetail />
            }
        ]
    },
    {
        path: CMS_ROUTERS.contact.list,
        element: <LazyContactList />
    },
    {
        path: CMS_ROUTERS.evaluate.list,
        element: <LazyEvaluateList />
    },
    {
        path: CMS_ROUTERS.order.list,
        children: [
            {
                path: '',
                element: <LazyOrderList />
            },
            {
                path: ':id',
                element: <LazyOrderDetail />
            }
        ]
    },

    {
        path: CMS_ROUTERS.blog.list,
        children: [
            {
                path: '',
                element: <LazyListBlog />
            },
            {
                path: ':id',
                element: <LazyBlogDetail />
            }
        ]
    },
    {
        path: CMS_ROUTERS.product.list,
        children: [
            {
                path: '',
                element: <LazyListProduct />
            },
            {
                path: ':id',
                element: <LazyProductDetail />
            }
        ]
    }
];
