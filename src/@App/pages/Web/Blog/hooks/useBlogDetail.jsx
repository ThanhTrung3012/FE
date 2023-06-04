import { blogService } from '@App/services/blogService';
import { useRequest } from 'ahooks';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useBlogDetail = () => {
    const { id } = useParams();

    const {
        data,
        loading,
        run: getBlog
    } = useRequest(blogService.find, {
        manual: true
    });

    useEffect(() => {
        if (id) getBlog(id);
    }, [id]);

    return { blog: data?.data, loading };
};

export default useBlogDetail;
