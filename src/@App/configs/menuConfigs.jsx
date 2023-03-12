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
import {CMS_ROUTERS} from './constants'

const menuConfigs = [
    {
        title: 'User Management',
        path: CMS_ROUTERS.user.list
    },
    {
        title: 'Product Management',
        path: CMS_ROUTERS.product.list
    },
    {
        title: 'Sales Manager',
        path: CMS_ROUTERS.sales.list
    },
    {
        title: 'Order Management',
        path: CMS_ROUTERS.order.list
    },
    {
        title: 'Category Management',
        path: CMS_ROUTERS.category.list
    },
]

export default menuConfigs;