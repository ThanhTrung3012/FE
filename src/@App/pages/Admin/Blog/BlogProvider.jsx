import React, { useEffect, useState } from 'react';
import { useRequest } from 'ahooks';

import { blogService } from '@App/services/blogService';
import useCoreTable from '@Core/components/Table/hooks/useCoreTable';
import { errorMessage, successMessage } from '@Core/Helper/Message';
import PageProvider from '@App/components/Provider/PageProvider';

const BlogProvider = props => {
    const blogRequests = useRequest(blogService.list, {
        manual: true,
        onError: () => {
            mutate({
                data: []
            });
        }
    });

    const { mutate, run: getBlogs } = blogRequests;
    const blogTableHandler = useCoreTable(blogRequests);

    const { runAsync: handleDeleteBlog } = useRequest(blogService.delete, {
        manual: true,
        onSuccess: () => {
            blogTableHandler.handleFetchData();
            successMessage('Xoá bài viết thành công');
        },
        onError: () => {
            errorMessage('Xoá bài viết thất bại đã có lỗi xảy ra');
        }
    });

    useEffect(() => {
        getBlogs();
    }, []);

    const data = {
        blogTableHandler,
        handleDeleteBlog
    };

    return <PageProvider {...data}>{props.children}</PageProvider>;
};

export default BlogProvider;
