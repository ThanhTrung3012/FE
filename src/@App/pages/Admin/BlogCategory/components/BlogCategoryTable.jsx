import { Box, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

import BlogCategoryFilter from './BlogCategoryFilter';
import { usePageContext } from '@App/components/Provider/PageProvider';
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable';
import {
    CoreTableActionEdit,
    CoreTableActionDelete
} from '@Core/components/Table/components/CoreTableActions';
import { CMS_ROUTERS } from '@App/configs/constants';

const BlogCategoryTable = () => {
    const { blogCategoryTableHandler, handleDeleteBlogCategory } = usePageContext();
    const navigate = useNavigate();

    const columns = useMemo(() => {
        return [
            columnHelper.accessor('_id', {
                header: 'Mã danh mục'
            }),
            columnHelper.accessor('name', {
                header: 'Tên danh mục'
            }),
            columnHelper.accessor('createdAt', {
                header: 'Ngày tạo',
                cell: ({ row }) => {
                    return <Typography>{moment(row?.original?.createdAt).format('L')}</Typography>;
                }
            }),
            columnHelper.accessor('action', {
                header: 'Chức năng',
                cell: ({ row }) => {
                    const category = row?.original;
                    return (
                        <Box className='flex items-center gap-x-4'>
                            <CoreTableActionEdit
                                callback={() =>
                                    navigate(CMS_ROUTERS.blogCategory.list + '/' + category?._id)
                                }
                            />
                            <CoreTableActionDelete
                                callback={() => handleDeleteBlogCategory(category?._id)}
                                content='Bạn có muốn xoá danh mục này'
                            />
                        </Box>
                    );
                }
            })
        ];
    }, []);

    return (
        <Box>
            <BlogCategoryFilter />
            <CoreTable
                isPagination
                columns={columns}
                {...blogCategoryTableHandler}
                data={blogCategoryTableHandler?.data}
            />
        </Box>
    );
};

export default BlogCategoryTable;
