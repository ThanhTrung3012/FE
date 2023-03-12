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

const basePath = '/'
const adminPath = '/cms'

export const WEB_ROUTERS = {
    home: basePath
}

export const CMS_ROUTERS = {
    doashboard: adminPath,
    user:{
        list:adminPath + '/user',
        detail:adminPath + '/user/:id'
    },
    product:{
        list:adminPath + '/product',
        detail:adminPath + '/product/:id'
    },
    category:{
        list:adminPath + '/category',
        detail:adminPath + '/category/:id'
    },
    sales:{
        list:adminPath + '/sales',
        detail:adminPath + '/sales/:id'
    },
    order:{
        list:adminPath + '/order',
        detail:adminPath + '/order/:id'
    },
}

