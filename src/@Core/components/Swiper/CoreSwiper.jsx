/*
 * Created Date: 17-02-2023, 23:00 pm
 * Author: Nghiêm Mạnh Cường
 * Email: nghiemmanhcuong98@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) ...
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

const CoreSwiper = props => {
    const {
        data,
        isImageOnly,
        imgTagClassName,
        SlideItem,
        spaceBetween,
        slidesPerView,
        speed,
        breakpoints,
        direction,
        effect,
        initialSlide,
        loop,
        modules,
        LazyLoadHeight,
        LazyLoadOnce,
        LazyLoadOffset,
        ...restProps
    } = props;

    return (
        <Swiper
            className='relative'
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            speed={speed}
            breakpoints={breakpoints}
            centerInsufficientSlides={true}
            // centeredSlides={true}
            direction={direction}
            effect={effect}
            loop={loop}
            modules={modules}
            {...restProps}
        >
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    <LazyLoad height={LazyLoadHeight} once={LazyLoadOnce} offset={LazyLoadOffset}>
                        {isImageOnly ? (
                            <img
                                src={item}
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
            <NextButton />
            <PrevButton />
        </Swiper>
    );
};

CoreSwiper.defaultProps = {
    data: [],
    isImageOnly: false,
    spaceBetween: 30,
    slidesPerView: 1,
    speed: 300,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    },
    direction: 'horizontal',
    effect: 'slide',
    loop: false,
    initialSlide: 0,
    LazyLoadHeight: 200,
    LazyLoadOnce: true,
    LazyLoadOffset: 0,
    modules: []
};

CoreSwiper.propTypes = {
    data: PropTypes.array.isRequired,
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
    LazyLoadOffset: PropTypes.number
};

export default React.memo(CoreSwiper);
