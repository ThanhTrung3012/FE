import React from 'react';
import { Box, Typography } from '@mui/material';
import CoreSwiper from '@Core/components/Swiper/CoreSwiper';
import Helmet from '@Core/components/Helmet';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const SliderItem = ({ item }) => {
    return (
        <Box>
            <img src={item.image} className='h-[300px] object-cover w-full' />
        </Box>
    );
};

const Home = () => {
    const data = [
        {
            title: 'Slider 1',
            image: 'https://images.pexels.com/photos/15253317/pexels-photo-15253317.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
        },
        {
            title: 'Slider 2',
            image: 'https://images.pexels.com/photos/6605193/pexels-photo-6605193.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
        },
        {
            title: 'Slider 3',
            image: 'https://images.pexels.com/photos/8989451/pexels-photo-8989451.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
        },
        {
            title: 'Slider 4',
            image: 'https://images.pexels.com/photos/9465855/pexels-photo-9465855.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
        },
        {
            title: 'Slider 5',
            image: 'https://images.pexels.com/photos/11025228/pexels-photo-11025228.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
        }
    ];

    const dataImg = [
        'https://images.pexels.com/photos/15253317/pexels-photo-15253317.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        'https://images.pexels.com/photos/6605193/pexels-photo-6605193.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        'https://images.pexels.com/photos/8989451/pexels-photo-8989451.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        'https://images.pexels.com/photos/9465855/pexels-photo-9465855.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        'https://images.pexels.com/photos/11025228/pexels-photo-11025228.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    ];

    return (
        <Helmet pageTitle='Wellcom to my app' pageDescription='Wellcom to my app'>
            <Box className='w-[800px] mx-auto flex items-center justify-center h-screen'>
                <Box className='w-[800px]'>
                    <CoreSwiper
                        data={dataImg}
                        slidesPerView={2}
                        spaceBetween={4}
                        SlideItem={SliderItem}
                        loop
                        isImageOnly
                    />
                </Box>
            </Box>
        </Helmet>
    );
};

export default Home;
