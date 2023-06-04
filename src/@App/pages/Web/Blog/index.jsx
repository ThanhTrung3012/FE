import React, { Fragment, useEffect, useState } from 'react';
import LeftMenu from './components/LeftMenu';
import CoreSwiper from '@Core/components/Swiper/CoreSwiper';
import { Autoplay } from 'swiper';
import BlogItem from './components/BlogItem';
import { Divider, Pagination } from '@mui/material';
import usePopularBlogs from './hooks/usePopularBlogs';
import { blogCategoryService } from '@App/services/blogCategoryService';
import { useRequest } from 'ahooks';
import { blogService } from '@App/services/blogService';
import WebLoading from '@App/components/Loading/WebLoading';
import ElementLoading from '@App/components/Loading/ElementLoading';

const Blog = () => {
    const [page, setPage] = useState(1);
    const [categoryId, setCategoryId] = useState(null);
    const { popularBlogs, loadingPopularBlogs } = usePopularBlogs();
    const { data: menus, loading: loadingMenus } = useRequest(blogCategoryService.list);

    const {
        data: blogs,
        loading,
        run: getBlogs
    } = useRequest(blogService.list, {
        manual: true
    });

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: 0 });
        if (categoryId) {
            getBlogs({ blog_category: categoryId, page_index: page, page_size: 5 });
        } else {
            getBlogs({ page_index: page, page_size: 5 });
        }
    }, [categoryId, page]);

    return loadingPopularBlogs || loadingMenus ? (
        <div className='flex justify-center items-center min-h-[70vh]'>
            <WebLoading />
        </div>
    ) : (
        <div className='flex relative'>
            <div className='h-screen w-2/12'>
                <LeftMenu
                    menus={menus}
                    onSetCategoryId={setCategoryId}
                    categoryId={categoryId}
                    setPage={setPage}
                />
            </div>
            <div className='w-10/12'>
                <div>
                    <h1 className='mb-5 text-[24px] font-bold'>Bài viết nổi bật</h1>
                    <CoreSwiper
                        data={popularBlogs}
                        slidesPerView={1}
                        SlideItem={BlogItem}
                        isShowButton={false}
                        modules={[Autoplay]}
                        speed={800}
                        autoplay={{
                            delay: 8000,
                            disableOnInteraction: false
                        }}
                    />
                </div>
                <div className='bg-white p-8 mt-10 rounded-2xl'>
                    <h1 className='mb-5 text-[24px] font-bold'>Danh sách bài viết</h1>
                    {loading ? (
                        <div className='flex justify-center min-h-[50vh]'>
                            <ElementLoading />
                        </div>
                    ) : (
                        <Fragment>
                            <div className='space-y-5'>
                                {blogs?.data?.map((item, i) => (
                                    <div key={i} className='m-[-32px]'>
                                        <BlogItem
                                            item={item}
                                            height='h-[240px]'
                                            imageWidth='w-[300px]'
                                            contentWidth='w-8/12'
                                            truncate='truncate-2'
                                            truncate2='truncate-1'
                                        />
                                        {i < blogs?.data.length - 1 && <Divider />}
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center mt-5'>
                                <Pagination
                                    page={page}
                                    count={Math.ceil(blogs?.total / Number(blogs?.page_size))}
                                    color='orange'
                                    onChange={(_, page) => {
                                        setPage(page);
                                    }}
                                />
                            </div>
                        </Fragment>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;
