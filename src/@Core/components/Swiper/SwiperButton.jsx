

import React from 'react';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { useSwiper } from 'swiper/react';

export const NextButton = () => {
    const swiper = useSwiper();

    return (
        <div
            className='absolute cursor-pointer bg-white top-[50%] right-[-35px] 
            z-[999] w-[60px] h-[60px] flex justify-start items-center rounded-full border border-gray-400 opacity-30 hover:opacity-100'
            onClick={() => swiper.slideNext()}
        >
            <ArrowForwardIosRoundedIcon />
        </div>
    );
};

export const PrevButton = () => {
    const swiper = useSwiper();

    return (
        <div
            className='absolute cursor-pointer bg-white top-[50%] left-[-35px]
            z-[999] w-[60px] h-[60px] flex justify-end items-center rounded-full border border-gray-400 opacity-30 hover:opacity-100'
            onClick={() => swiper.slidePrev()}
        >
            <ArrowBackIosRoundedIcon />
        </div>
    );
};
