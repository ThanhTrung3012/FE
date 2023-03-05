import React, { useEffect, useState } from 'react';
import { useAppContext } from '@App/AppContext';
import Helmet from '@Core/components/Helmet';
import { useTranslation } from 'react-i18next';
import CoreSwiper from '@Core/components/Swiper/CoreSwiper';

const Home = () => {
    // const { state, dispatch } = useAppContext();
    // const imgData = [
    //     'https://images.pexels.com/photos/3754297/pexels-photo-3754297.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    //     'https://images.pexels.com/photos/15363536/pexels-photo-15363536.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    //     'https://images.pexels.com/photos/13307162/pexels-photo-13307162.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    // ];
    const [language,setLanguage] = useState('en')
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = () => {
        setLanguage(prev => {
            if(prev === 'en') return 'vn'
            return 'en'
        })
    };

    useEffect(() => {
        i18n.changeLanguage(language);
    },[language])

    return (
        <Helmet pageTitle='Wellcom to my app' pageDescription='Wellcom to my app'>
            <div className='text-center mt-72'>
                <h3 className='text-4xl font-bold'>{t('common:title')}</h3>
                <p className='mt-4 text-xl'>{t('common:description')}</p>
                <p className='mt-4'>
                    {t('common:email')}:
                    <a href='mailto:nghiemmanhcuong98@gmail.com' className='text-blue-500'>
                        nghiemmanhcuong98@gmail.com
                    </a>
                </p>
                <button
                    onClick={handleChangeLanguage}
                    className='mt-3 border px-5 py-2 rounded-md font-bold bg-green-600 text-white'
                >
                    {language === 'en' ? 'Vietnamese' : 'Tiếng anh'}
                </button>
            </div>
            {/* <div className='w-[1024px] mx-auto'>
                <CoreSwiper
                    data={imgData}
                    isImageOnly
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        }
                    }}
                    LazyLoadHeight={100}
                    LazyLoadOffset={300}
                />
            </div> */}
        </Helmet>
    );
};

export default Home;
