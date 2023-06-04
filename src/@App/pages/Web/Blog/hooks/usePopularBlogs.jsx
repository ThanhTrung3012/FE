import { blogService } from '@App/services/blogService';
import { useRequest } from 'ahooks';
import React, { useEffect } from 'react';

const usePopularBlogs = () => {
    const {
        data: popularBlogs,
        loading: loadingPopularBlogs,
        run: getPopularBlogs
    } = useRequest(blogService.getPopulars, {
        manual: true,
    });

    useEffect(() => {
        getPopularBlogs()
    },[])

    return { popularBlogs:popularBlogs?.data, loadingPopularBlogs };
};

export default usePopularBlogs;
