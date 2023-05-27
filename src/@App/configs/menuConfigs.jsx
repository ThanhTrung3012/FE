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
import { CMS_ROUTERS } from './constants';

const menuConfigs = [
    {
        title: 'Thống kê',
        path: CMS_ROUTERS.doashboard
    },
    {
        title: 'Quản lý người dùng',
        path: CMS_ROUTERS.user.list
    },
    {
        title: 'Quản lý sản phẩm',
        path: CMS_ROUTERS.product.list
    },
    {
        title: 'Quản lý loại sản phẩm',
        path: CMS_ROUTERS.category.list
    },
    {
        title: 'Quản lý danh mục bài viết',
        path: CMS_ROUTERS.blogCategory.list
    },
    {
        title: 'Quản lý của hàng',
        path: CMS_ROUTERS.showRoom.list
    },
    {
        title: 'Quản lý liên hệ',
        path: CMS_ROUTERS.contact.list
    },
    {
        title: 'Quản lý đánh giá sản phẩm',
        path: CMS_ROUTERS.evaluate.list
    },
    {
        title: 'Quản lý bài viết',
        path: CMS_ROUTERS.blog.list
    },
    {
        title: 'Quản lý đơn hàng',
        path: CMS_ROUTERS.order.list
    },
    {
        title: 'Quản lý banner',
        path: CMS_ROUTERS.banner.list
    },
];

export default menuConfigs;
