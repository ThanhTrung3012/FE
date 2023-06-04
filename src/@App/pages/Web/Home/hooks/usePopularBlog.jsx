import { blogService } from '@App/services/blogService';
import { useRequest } from 'ahooks';
import React from 'react';

const usePopularBlog = () => {
    const {
        data,
        loading: loadingBlog,
        run: getBlogs
    } = useRequest(blogService.getPopulars, {
        manual: true
    });

    return { popularBlogs: data?.data, loadingBlog, getBlogs };
};

export default usePopularBlog;
