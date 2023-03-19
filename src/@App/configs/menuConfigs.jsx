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
        title: 'Quản lý người dùng',
        path: CMS_ROUTERS.user.list
    },
    {
        title: 'Quản lý loại sản phẩm',
        path: CMS_ROUTERS.category.list
    },
    {
        title: 'Quản lý của hàng',
        path: CMS_ROUTERS.showRoom.list
    },
]

export default menuConfigs;