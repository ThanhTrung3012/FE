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
    home: basePath,
    collection: {
        index: basePath + 'collections',
        router: basePath + '/collections/:id'
    },
    product: {
        index: basePath + 'product',
        router: basePath + '/product/:id'
    },
    cart: {
        index: basePath + 'cart',
        router: basePath + 'cart'
    },
    blog: {
        index: basePath + 'blog',
        router: basePath + 'blog',
        detail:basePath + 'blog/detail',
    },
    order: {
        index: basePath + 'order-success',
        router: basePath + 'order-success',
    },
    staticPage: {
        contact: {
            router: basePath + 'contact/:page',
            introduction: basePath + 'contact/introduction',
            shops: basePath + 'contact/shops',
            contact: basePath + 'contact/lien-he'
        },
        policy: {
            router: basePath + 'policy/:page',
            purchase: basePath + 'policy/chinh-sach-mua-hang',
            guarantee: basePath + 'policy/chinh-sach-bao-hanh',
            transport: basePath + 'policy/chinh-sach-van-chuyen'
        },
        info: {
            router: basePath + 'info/:page',
            question: basePath + 'info/cau-hoi-thuong-gap',
            payment: basePath + 'info/phuong-thuc-thanh-toan',
            recruitment: basePath + 'info/tuyen-dung'
        },
    }
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
        list: adminPath + '/contact'
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
        list: adminPath + '/evaluate'
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
        detail: adminPath + '/order/:id'
    },
    banner: {
        list: adminPath + '/banner',
        detail: adminPath + '/banner/:id'
    }
};
