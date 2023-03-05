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
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { useSwiper } from 'swiper/react';

export const NextButton = () => {
    const swiper = useSwiper();

    return (
        <div
            className='absolute cursor-pointer bg-white top-[50%] right-0 
            z-[999] w-[40px] h-[40px] flex justify-center items-center rounded-full border border-black'
            onClick={() => swiper.slideNext()}
        >
            <BsArrowRight />
        </div>
    );
};

export const PrevButton = () => {
    const swiper = useSwiper();

    return (
        <div
            className='absolute cursor-pointer bg-white top-[50%] left-0 
            z-[999] w-[40px] h-[40px] flex justify-center items-center rounded-full border border-black'
            onClick={() => swiper.slidePrev()}
        >
            <BsArrowLeft />
        </div>
    );
};
