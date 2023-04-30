import CoreSwiper from '@Core/components/Swiper/CoreSwiper'
import React from 'react'
import { FreeMode, Thumbs,Autoplay } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { sliders } from '../data'

const HomeSlides = () => {
  return (
    <CoreSwiper 
        data={sliders}
        modules={[FreeMode,Autoplay, Thumbs]}
        isGallery
        isImageOnly
        slidesPerView={1}
        isShowButton={false}
        className='h-[318px]'
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={800}
    />
  )
}

export default HomeSlides