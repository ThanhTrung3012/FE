import CoreSwiper from '@Core/components/Swiper/CoreSwiper';
import React from 'react';
import { FreeMode, Thumbs, Autoplay } from 'swiper';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import HomeSlideItem from './HomeSlideItem';

const HomeSlides = ({sliders}) => {
    
    return (
        <CoreSwiper
            data={sliders ?? []}
            modules={[FreeMode, Autoplay, Thumbs]}
            isGallery
            slidesPerView={1}
            isShowButton={false}
            SlideItem={HomeSlideItem}
            className='h-[318px]'
            loop
            autoplay={{
                delay: 112000,
                disableOnInteraction: false
            }}
            speed={800}
        />
    );
};

export default HomeSlides;
