/*
 * Created Date: 17-02-2023, 23:00 pm
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

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import LazyLoad from 'react-lazyload';
import clsx from 'clsx';
import { NextButton, PrevButton } from './SwiperButton';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'mui-image';

const CoreSwiper = props => {
    const {
        data = [],
        isImageOnly = false,
        imgTagClassName = '',
        SlideItem,
        spaceBetween = 10,
        slidesPerView = 4,
        speed = 300,
        direction = 'horizontal',
        effect = 'slide',
        initialSlide,
        loop = false,
        modules = [],
        LazyLoadHeight = 200,
        LazyLoadOnce = true,
        LazyLoadOffset = 0,
        isGallery = false,
        isShowButton = true,
        ...restProps
    } = props;

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                className='relative'
                loop={loop}
                speed={speed}
                effect={effect}
                modules={modules}
                direction={direction}
                initialSlide={initialSlide}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                centerInsufficientSlides={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                {...restProps}
            >
                {data?.map((item, index) => (
                    <SwiperSlide key={index} className='rounded-t-md overflow-hidden'>
                        <LazyLoad
                            height={LazyLoadHeight}
                            once={LazyLoadOnce}
                            offset={LazyLoadOffset}
                        >
                            {isImageOnly ? (
                                <Image
                                    src={isGallery ? item.image : item}
                                    className={clsx(
                                        'h-[500px] w-full mx-auto object-cover',
                                        imgTagClassName
                                    )}
                                />
                            ) : (
                                <SlideItem item={item} />
                            )}
                        </LazyLoad>
                    </SwiperSlide>
                ))}
                {isShowButton && (
                    <>
                        <NextButton />
                        <PrevButton />
                    </>
                )}
            </Swiper>
            {isGallery && (
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={modules}
                    effect={effect}
                    speed={speed}
                    className='bg-white'
                >
                    {data.map((item,index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Box className='text-center p-4 cursor-pointer'>
                                    <Typography>{item.title}</Typography>
                                </Box>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            )}
        </>
    );
};

CoreSwiper.propTypes = {
    data: PropTypes.array.isRequired,
    SlideItem: PropTypes.func,
    imgTagClassName: PropTypes.string,
    isImageOnly: PropTypes.bool,
    spaceBetween: PropTypes.number,
    slidesPerView: PropTypes.number,
    direction: PropTypes.string,
    effect: PropTypes.string,
    initialSlide: PropTypes.number,
    modules: PropTypes.array,
    LazyLoadHeight: PropTypes.number,
    LazyLoadOnce: PropTypes.bool,
    LazyLoadOffset: PropTypes.number,
    isShowButton: PropTypes.bool,
    isGallery: PropTypes.bool,
    loop: PropTypes.bool,
};

export default React.memo(CoreSwiper);
