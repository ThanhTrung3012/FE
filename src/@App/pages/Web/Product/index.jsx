import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { Fragment } from 'react';
import Image from 'mui-image';
import PlaceIcon from '@mui/icons-material/Place';
import { Autoplay } from 'swiper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';

import handlePrice, { handlePercentPrice } from '@Core/Helper/Price';
import CoreAutoComplete from '@Core/components/Input/CoreAutoComplete';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import Product from '../Collections/components/Product';
import CoreSwiper from '@Core/components/Swiper/CoreSwiper';
import CoreInput from '@Core/components/Input/CoreInput';
import useRelatedProducts from './hooks/useRelatedProducts';
import useProductDetail from './hooks/useProductDetail';
import useShops from './hooks/useShops';
import { errorMessage, successMessage } from '@Core/Helper/Message';
import { evaluateService } from '@App/services/evaluateService';
import useAddCartDialog from './hooks/useAddCartDialog';
import WebLoading from '@App/components/Loading/WebLoading';
import ElementLoading from '@App/components/Loading/ElementLoading';

const areaOptions = [
    { label: 'Hà Nội', value: 'MIEN-BAC' },
    { label: 'TPHCM', value: 'MIEN-NAM' }
];

const ProductPage = () => {
    const [stars, setStars] = useState(2);
    const [color, setColor] = useState(null);
    const [capacity, setCapacity] = useState(null);
    const [price, setPrice] = useState(null);
    const { hanldeOpen, render } = useAddCartDialog(setColor);
    const { getShops, shops, loadingShops } = useShops();
    const { loading, product, mainImg, setMainImg, handleGetProduct } = useProductDetail(
        setColor,
        setCapacity,
        setPrice
    );
    const { getRelatedProducts, loadingRelatedProducts, relatedProducts } = useRelatedProducts();

    const {
        control,
        watch,
        handleSubmit,
        formState: { isSubmitting },
        reset
    } = useForm({
        defaultValues: {
            area: 'MIEN-BAC',
            user_name: '',
            user_email: '',
            user_phone: '',
            content: ''
        },
        resolver:yupResolver(yup.object({
            user_name: yup.string().trim().required('Trường này là bắt buộc'),
            user_email: yup.string().trim().required('Trường này là bắt buộc'),
            user_phone: yup.string().trim().required('Trường này là bắt buộc'),
            content: yup.string().trim().required('Trường này là bắt buộc')
        }))
    });

    useEffect(() => {
        if (product?.data?.category) {
            getRelatedProducts(product?.data?.category);
        }
    }, [product]);

    useEffect(() => {
        getShops({ area: watch('area') });
    }, [watch('area')]);

    const onSubmit = handleSubmit(async data => {
        try {
            delete data.area;
            data.productId = product?.data?._id;
            data.stars = stars;
            await evaluateService.create(data);
            await handleGetProduct()
            reset();
            successMessage( 
                'Đánh giá sản phẩm thành công chúng tôi sẽ đọc và ghi nhận đánh giá của bạn!!!'
            );
        } catch (error) {
            errorMessage(error);
        }
    });

    const hanldeOpenAddToCart = () => {
        hanldeOpen({
            currentPrice: price,
            currentColor: color,
            currentCapacity: capacity,
            ...product?.data
        });
    };

    return loading ? (
        <div className='flex justify-center min-h-[80vh] items-center'>
            <WebLoading />
        </div>
    ) : (
        <Fragment>
            <div className='pb-2 mb-3  border-b border-b-gray-300 flex items-center gap-3'>
                <h1 className='text-20 font-bold'>{product?.data?.name}</h1>
                <Rating defaultValue={product?.stars} precision={0.5} readOnly={true} />
            </div>
            <div className='flex items-start justify-between lg:flex-nowrap flex-wrap gap-6'>
                <div className='md:w-6/12 lg:w-4/12'>
                    <div className='border border-black rounded-lg p-2 bg-white flex item-centers justify-center w-full h-[290px]'>
                        <Image
                            src={mainImg ?? ''}
                            errorIcon={<ImageNotSupportedIcon />}
                            alt='image'
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <div className='flex items-center  mt-3  gap-2'>
                        {product?.data?.images?.map((url, i) => (
                            <div
                                key={i}
                                className={clsx(
                                    'cursor-pointer border border-gray-300 bg-white rounded-md w-16 h-16 overflow-hidden',
                                    mainImg === url ? 'border-[#d3161b]' : 'border-gray-300'
                                )}
                                onClick={() => setMainImg(url)}
                            >
                                <Image
                                    errorIcon={<ImageNotSupportedIcon />}
                                    src={url ?? ''}
                                    alt='image'
                                    className='w-full h-full'
                                />
                            </div>
                        ))}
                    </div>
                    <div className='mt-5 border border-gray-300 rounded-md bg-white p-3 w-full'>
                        <h3>Chính sách Bảo hành</h3>
                        <ul className='flex flex-col  gap-y-2 mt-3'>
                            <li className='flex items-center gap-x-2'>
                                <CheckCircleRoundedIcon color='success' fontSize='small' />
                                <p className='text-15'>Bảo hành hãng theo chính sách của Apple.</p>
                            </li>
                            <li className='flex items-start gap-x-2'>
                                <CheckCircleRoundedIcon color='success' fontSize='small' />
                                <p className='text-15'>Sản phẩm được đổi máy mới chưa active trong vòng 15 ngày nếu phát sinh lỗi do nhà sản xuất.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='md:w-5/12 lg:w-5/12'>
                    <div className='flex items-center'>
                        <p className='text-20 font-bold text-[#E23C36] mr-3'>
                            {handlePrice(price)}
                        </p>
                        {product?.data?.discount && product?.data?.discount !== 0 && (
                            <p className='text-17 line-through text-[#777777]'>
                                {handlePercentPrice(price, product?.data?.discount)}
                            </p>
                        )}
                    </div>
                    <div className='flex mt-5 flex-wrap gap-2'>
                        {product?.data?.options?.map((item, i) => (
                            <div
                                className={clsx(
                                    `text-center w-[30%] overflow-hidden border rounded-[12px] py-2 bg-white cursor-pointer`,
                                    capacity === item?.title
                                        ? 'border-2 relative border-[#F06837] option-active'
                                        : 'border-[#DDDDDD]'
                                )}
                                key={i}
                                onClick={() => {
                                    setCapacity(item?.title);
                                    setPrice(item?.price);
                                }}
                            >
                                <p className='text-14 font-bold truncate-1'>{item?.title}</p>
                                <p className='text-12'>{handlePrice(item?.price)}</p>
                            </div>
                        ))}
                    </div>
                    <h3 className='my-2 text-17 font-bold'>
                        Chọn màu để xem giá và chi nhánh có hàng
                    </h3>
                    <div className='flex flex-wrap gap-2 mb-5'>
                        {product?.data?.colors.map((item, i) => (
                            <div
                                className={clsx(
                                    `text-center w-[30%] overflow-hidden border rounded-[12px] py-2 bg-white cursor-pointer`,
                                    color === item?.title
                                        ? 'border-2 relative border-[#F06837] option-active'
                                        : 'border-[#DDDDDD]'
                                )}
                                onClick={() => setColor(item?.title)}
                                key={i}
                            >
                                <p className='text-15 font-bold'>{item?.title}</p>
                            </div>
                        ))}
                    </div>
                    <div className='my-5 border border-gray-300 rounded-md bg-white p-3 w-full'>
                        <h3>Chính sách Bảo hành</h3>
                        <ul className='flex flex-col  gap-y-2 mt-3'>
                            <li className='flex items-center gap-x-2'>
                                <CheckCircleRoundedIcon color='success' fontSize='small' />
                                <p className='text-15'>
                                    Giảm ngay 100.000Đ khi mua kèm tai nghe Airpods Pro 2
                                </p>
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <CheckCircleRoundedIcon color='success' fontSize='small' />
                                <p className='text-15'>
                                    Giảm ngay 100.000Đ khi mua kèm tai nghe Airpods 3
                                </p>
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <CheckCircleRoundedIcon color='success' fontSize='small' />
                                <p className='text-15'>
                                    Giảm ngay 100.000Đ khi mua kèm Ốp lưng UAG, Gear4
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div
                        className='text-center bg-[#DA0101] text-white py-1 rounded-md cursor-pointer'
                        variant='contained'
                        onClick={hanldeOpenAddToCart}
                    >
                        <p className='font-bold'>Mua ngay</p>
                        <span className='text-13'>Giao tận nơi hoặc nhận tại cửa hàng</span>
                    </div>
                </div>
                <div className='md:w-full lg:w-3/12'>
                    <div className='mb-5 rounded-xl overflow-hidden'>
                        <div className='flex items-center gap-2 justify-center bg-[#EF6837] text-white p-2'>
                            <img
                                src='https://onewaymobile.vn/images/gift-box-3966268-3286985%202.svg'
                                alt=''
                            />
                            <h3 className='text-15 font-bold'>Chính sách khuyến mãi</h3>
                        </div>
                        <div className='py-3 px-5 bg-white'>
                            <ul>
                                <li className='flex gap-2 items-start mb-2'>
                                    <span className='min-w-[18px] h-[18px] text-12 text-white flex item-center justify-center rounded-full bg-[#DA0101]'>
                                        1
                                    </span>
                                    <p className='text-14 leading-[16px]'>
                                        Nhập mã giới thiệu, nhận về tiền triệu!
                                    </p>
                                </li>
                                <li className='flex gap-2 items-start mb-2'>
                                    <span className='min-w-[18px] h-[18px] text-12 text-white flex item-center justify-center rounded-full bg-[#DA0101]'>
                                        2
                                    </span>
                                    <p className='text-14 leading-[16px]'>
                                        Ưu đãi tới 1.050.000Đ cho Khách hàng thân thiết của ONEWAY
                                    </p>
                                </li>
                                <li className='flex gap-2 items-start mb-2'>
                                    <span className='min-w-[18px] h-[18px] text-12 text-white flex item-center justify-center rounded-full bg-[#DA0101]'>
                                        3
                                    </span>
                                    <p className='text-14 leading-[16px]'>
                                        Thu cũ đổi mới trợ giá 2.500.000Đ
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className='mb-3'>Tìm showroom gần nhất</p>
                        <CoreAutoComplete
                            control={control}
                            name='area'
                            options={areaOptions}
                            sx={{ '.MuiInputBase-root ': { borderRadius: '17px' } }}
                            size='small'
                            className='bg-white rounded-[17px]'
                            returnValueType='enum'
                            clearIcon={false}
                        />
                        {loadingShops ? (
                            <div className='flex justify-center items-center mt-3'>
                                <ElementLoading />
                            </div>
                        ) : (
                            <div className='mt-2 rounded-lg border border-[#D9D9D9] p-2 bg-white'>
                                {shops?.length > 0 ? (
                                    shops?.map((item, i) => (
                                        <div key={i} className='flex items-center gap-x-2'>
                                            <div className='w-[30px] h-[30px] grid place-items-center bg-[#F06837] rounded-full'>
                                                <PlaceIcon
                                                    fontSize='small'
                                                    className='text-white'
                                                />
                                            </div>
                                            <p>{item?.name}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p>Xin lỗi bạn chúng tôi chưa có cửa hàng tại khu vực này</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='mt-16'>
                <h3 className='text-20 font-bold mb-3'>Sản phẩm liên quan</h3>
                {loadingRelatedProducts ? (
                    <div className='flex justify-center'>
                        <ElementLoading />
                    </div>
                ) : (
                    <CoreSwiper
                        data={relatedProducts?.data ?? []}
                        SlideItem={Product}
                        slidesPerView={5}
                        isShowButton={relatedProducts?.data && relatedProducts?.data?.length > 5}
                        spaceBetween={5}
                        centerInsufficientSlides={false}
                        loop
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 5
                            },
                            // when window width is >= 480px
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 5
                            },
                            // when window width is >= 640px
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 5
                            }
                        }}
                    />
                )}
            </div>
            <div className='mt-16 flex items-start justify-between lg:flex-nowrap flex-wrap gap-5'>
                <div className='w-full lg:w-9/12 bg-white rounded-xl shadow-md p-3'>
                    <div className='flex items-center gap-5'>
                        <h3>Đánh giá Điện thoại Apple iPhone 14 128GB VN/A</h3>
                        <Rating
                            name='simple-controlled'
                            value={stars}
                            onChange={(event, newValue) => {
                                setStars(newValue);
                            }}
                        />
                    </div>
                    <div className='flex gap-5 mt-3 lg:flex-nowrap flex-wrap'>
                        <div className='w-full lg:w-1/2'>
                            <CoreInput
                                control={control}
                                name='content'
                                multiline
                                placeholder='Nội dung đánh giá của bạn'
                                sx={{
                                    '& .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input': {
                                        height: '99px !important'
                                    }
                                }}
                            />
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <div className='flex gap-5 mb-5 sm:flex-nowrap flex-wrap'>
                                <CoreInput
                                    control={control}
                                    name='user_name'
                                    placeholder='Họ và tên'
                                    className='w-full sm:w-[unset]'
                                />
                                <CoreInput
                                    control={control}
                                    name='user_phone'
                                    placeholder='Số điện thoại'
                                    className='w-full sm:w-[unset]'
                                />
                            </div>
                            <div className='flex gap-5 sm:flex-nowrap flex-wrap'>
                                <div className='w-full sm:w-1/2'>
                                    <CoreInput
                                        control={control}
                                        name='user_email'
                                        placeholder='Email'
                                    />
                                </div>
                                <LoadingButton
                                    className={clsx(
                                        `w-full sm:w-1/2 flex items-center text-16 justify-center cursor-pointer
                                        bg-gradient-to-r from-[#FF6700] to-[#F9920F]
                                    `)}
                                    sx={{ color: 'white !important' }}
                                    loading={isSubmitting}
                                    onClick={onSubmit}
                                >
                                    Gửi đánh giá
                                </LoadingButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-3/12 bg-white rounded-xl shadow-md p-3'>
                    <h3 className='mb-4 font-bold text-17'>THÔNG SỐ KỸ THUẬT</h3>
                    <ul>
                        {product?.data?.parameters.map((item, i) => (
                            <li
                                key={i}
                                className='flex items-center justify-between mb-3 p-2 rounded-xl odd:bg-gray-100'
                            >
                                <p>{item?.title}</p>
                                <p>{item?.value}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {render()}
        </Fragment>
    );
};

export default ProductPage;
