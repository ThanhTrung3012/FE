import { Box, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import BlogFilter from './BlogFilter';
import { usePageContext } from '@App/components/Provider/PageProvider';
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable';
import {
    CoreTableActionEdit,
    CoreTableActionDelete
} from '@Core/components/Table/components/CoreTableActions';
import { CMS_ROUTERS } from '@App/configs/constants';

const BlogTable = () => {
    const { blogTableHandler, handleDeleteBlog } = usePageContext();
    const navigate = useNavigate();

    const columns = useMemo(() => {
        return [
            columnHelper.accessor('_id', {
                header: 'Mã bài viết'
            }),
            columnHelper.accessor('title', {
                header: 'Tiêu đề'
            }),
            columnHelper.accessor('author', {
                header: 'Tác giả'
            }),
            columnHelper.accessor('createdAt', {
                header: 'Ngày đăng',
                cell: ({ row }) => {
                    return <Typography>{moment(row?.original?.createdAt).format('L')}</Typography>;
                }
            }),
            columnHelper.accessor('action', {
                header: 'Chức năng',
                cell: ({ row }) => {
                    const blog = row?.original;
                    return (
                        <Box className='flex items-center gap-x-4'>
                            <CoreTableActionEdit
                                callback={() => navigate(CMS_ROUTERS.blog.list + '/' + blog?._id)}
                            />
                            <CoreTableActionDelete
                                callback={() => handleDeleteBlog(blog?._id)}
                                content='Bạn có muốn xoá bài viết này'
                            />
                        </Box>
                    );
                }
            })
        ];
    }, []);

    return (
        <Box>
            <BlogFilter />
            <CoreTable
                isPagination
                columns={columns}
                {...blogTableHandler}
                data={blogTableHandler?.data}
            />
        </Box>
    );
};

export default BlogTable;
