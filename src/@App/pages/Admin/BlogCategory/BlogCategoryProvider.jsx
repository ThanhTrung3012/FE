import React, { useEffect } from 'react';
import { useRequest } from 'ahooks';

import { blogCategoryService } from '@App/services/blogCategoryService';
import useCoreTable from '@Core/components/Table/hooks/useCoreTable';
import { errorMessage, successMessage } from '@Core/Helper/Message';
import PageProvider from '@App/components/Provider/PageProvider';

const BlogCategoryProvider = props => {
    const blogCategoryRequests = useRequest(blogCategoryService.list, {
        manual: true,
        onError: () => {
            mutate({
                data: []
            });
        }
    });

    const { mutate, run: getblogCategories } = blogCategoryRequests;
    const blogCategoryTableHandler = useCoreTable(blogCategoryRequests);

    const { runAsync: handleDeleteBlogCategory } = useRequest(blogCategoryService.delete, {
        manual: true,
        onSuccess: () => {
            blogCategoryTableHandler.handleFetchData();
            successMessage('Xoá danh mục thành công');
        },
        onError: () => {
            errorMessage('Xoá danh mục thất bại đã có lỗi xảy ra');
        }
    });

    useEffect(() => {
        getblogCategories();
    }, []);

    const data = {
        blogCategoryTableHandler,
        handleDeleteBlogCategory
    };

    return <PageProvider {...data}>{props.children}</PageProvider>;
};

export default BlogCategoryProvider;
