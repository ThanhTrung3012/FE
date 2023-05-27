import React, { Fragment, useEffect } from 'react';
import LeftMenu from './components/LeftMenu';
import CoreSwiper from '@Core/components/Swiper/CoreSwiper';
import { Autoplay } from 'swiper';
import BlogItem from './components/BlogItem';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { Divider } from '@mui/material';

const Blog = () => {
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: 0 });
    }, []);
    const data = [
        {
            image: 'https://onewaymobile.vn/images/news/2023/03/resized/co-nen-mua-iphone-11-o-nam-2023_1678965271.jpeg',
            title: 'Có nên mua iPhone 11 Pro Max ở năm 2023?',
            content:
                'Flagship 1 thời, iPhone 11 Pro Max ở 2023 sập giá, xấp xỉ 10 triệu vẫn ngon chán.',
            date: new Date(),
            category: 'Tin mới'
        },
        {
            image: 'https://onewaymobile.vn/images/news/2023/03/resized/co-nen-mua-iphone-11-o-nam-2023_1678965271.jpeg',
            title: 'Có nên mua iPhone 11 Pro Max ở năm 2023?',
            content:
                'Flagship 1 thời, iPhone 11 Pro Max ở 2023 sập giá, xấp xỉ 10 triệu vẫn ngon chán.',
            date: new Date(),
            category: 'Tin mới'
        },
        {
            image: 'https://onewaymobile.vn/images/news/2023/03/resized/co-nen-mua-iphone-11-o-nam-2023_1678965271.jpeg',
            title: 'Có nên mua iPhone 11 Pro Max ở năm 2023?',
            content:
                'Flagship 1 thời, iPhone 11 Pro Max ở 2023 sập giá, xấp xỉ 10 triệu vẫn ngon chán.',
            date: new Date(),
            category: 'Tin mới'
        }
    ];

    return (
        <div className='flex relative'>
            <div className='h-screen w-2/12'>
                <LeftMenu />
            </div>
            <div className='w-10/12'>
                <div>
                    <h1 className='mb-5 text-[24px] font-bold'>Bài viết nổi bật</h1>
                    <CoreSwiper
                        data={data}
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
                    <h1 className='mb-5 text-[24px] font-bold'>Mới nhất</h1>
                    <div className='space-y-5'>
                        {data.map((item,i) => (
                            <Fragment key={i}>
                                <BlogItem item={item} height='h-[240px]' width='w-[250px]'/>
                                {i < data.length - 1 && <Divider />}
                            </Fragment>
                        ))}
                    </div>
                    <div className='flex justify-center mt-5'>
                    <button className='w-1/2 py-3 rounded-lg bg-[#F7F7F7] hover:bg-[#F06837] hover:text-white duration-300'>
                        Xem thêm
                        <KeyboardArrowDownRoundedIcon />
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
