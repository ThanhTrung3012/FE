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

const basePath = '/';
const adminPath = '/cms';

export const WEB_ROUTERS = {
    home: basePath
};

export const CMS_ROUTERS = {
    doashboard: adminPath + '/doashboard',
    auth: {
        login: adminPath + '/login'
    },
    user: {
        list: adminPath + '/user',
        detail: adminPath + '/user/:id'
    },
    contact: {
        list: adminPath + '/contact',
    },
    category: {
        list: adminPath + '/category',
        detail: adminPath + '/category/:id'
    },
    blogCategory: {
        list: adminPath + '/b-category',
        detail: adminPath + '/b-category/:id'
    },
    showRoom: {
        list: adminPath + '/show-room',
        detail: adminPath + '/show-room/:id'
    },
    evaluate: {
        list: adminPath + '/evaluate',
    },
    blog: {
        list: adminPath + '/blog',
        detail: adminPath + '/blog/:id'
    },
    product: {
        list: adminPath + '/product',
        detail: adminPath + '/product/:id'
    },
    order: {
        list: adminPath + '/order',
        detail: adminPath + '/order/:id',
    },
};
