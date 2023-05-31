import { CircularProgress, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import clsx from 'clsx';
import handlePrice, { handlePercentPrice } from '@Core/Helper/Price';
import CoreAutoComplete from '@Core/components/Input/CoreAutoComplete';
import { useForm } from 'react-hook-form';
import Product from '../Collections/components/Product';
import CoreSwiper from '@Core/components/Swiper/CoreSwiper';
import { Autoplay } from 'swiper';
import CoreInput from '@Core/components/Input/CoreInput';
import { productService } from '@App/services/productService';
import { useRequest } from 'ahooks';
import { useParams } from 'react-router-dom';
import { Fragment } from 'react';

const ProductPage = () => {
    const { id } = useParams();
    const { control } = useForm();
    const [value, setValue] = useState(2);
    const [mainImg, setMainImg] = useState(null);

    const {
        data: product,
        loading,
        run: getProduct
    } = useRequest(productService.find, {
        manual: true,
        onSuccess: data => {
            setMainImg(data?.data?.images?.[0]);
        }
    });

    const {
        data: relatedProducts,
        loading: loadingRelatedProducts,
        run: getRelatedProducts
    } = useRequest(productService.getByCategory, {
        manual: true
    });

    useEffect(() => {
        if (id) getProduct(id);
        window.scrollTo({ behavior: 'smooth', top: 0 });
    }, [id]);

    useEffect(() => {
        if (product?.data?.category) {
            getRelatedProducts(product?.data?.category);
        }
    }, [product]);

    const areaOptions = [
        { label: 'Hà Nội', value: 'ha-noi' },
        { label: 'TPHCM', value: 'tphm' }
    ];

    if(loading) {
        return (
            <div className="flex justify-center min-h-[80vh] items-center">
                <CircularProgress />
            </div>
        )
    }

    return (
        <Fragment>
            <div className='pb-2 mb-3  border-b border-b-gray-300 flex items-center gap-3'>
                <h1 className='text-20 font-bold'>{product?.data?.name}</h1>
                <Rating defaultValue={product?.data?.start} precision={0.5} readOnly={true} />
            </div>
            <div className='flex items-start justify-between gap-x-6'>
                <div className='w-4/12'>
                    <div className='border border-black rounded-lg p-2 bg-white flex item-centers justify-center w-full h-[290px]'>
                        <img src={mainImg} alt='image' />
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
                                <img src={url} alt='image' className='w-full h-full' />
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
                            <li className='flex items-center gap-x-2'>
                                <CheckCircleRoundedIcon color='success' fontSize='small' />
                                <p className='text-15'>Bảo hành hãng theo chính sách của Apple.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-5/12'>
                    <div className='flex items-center'>
                        <p className='text-20 font-bold text-[#E23C36] mr-3'>
                            {handlePrice(product?.data?.options?.[0]?.price)}
                        </p>
                        {product?.data?.discount && product?.data?.discount !== 0 && (
                            <p className='text-17 line-through text-[#777777]'>
                                {handlePercentPrice(
                                    product?.data?.options?.[0]?.price,
                                    product?.data?.discount
                                )}
                            </p>
                        )}
                    </div>
                    <div className='flex mt-5 flex-wrap gap-2'>
                        {product?.data?.options?.map((item, i) => (
                            <div
                                className='text-center w-[30%] border border-[#DDDDDD] rounded-[12px] py-2 bg-white cursor-pointer'
                                key={i}
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
                                className='text-center w-[30%] border border-[#DDDDDD] rounded-[12px] py-1 bg-white cursor-pointer'
                                key={i}
                            >
                                <p className='text-15 font-bold'>{item?.title}</p>
                                <p className='text-12'>{handlePrice(item?.price)}</p>
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
                        fullWidth
                        variant='contained'
                    >
                        <p className='font-bold'>Mua ngay</p>
                        <span className='text-13'>Giao tận nơi hoặc nhận tại cửa hàng</span>
                    </div>
                </div>
                <div className='w-3/12'>
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
                                    <p className='text-13 leading-[16px]'>
                                        Nhập mã giới thiệu, nhận về tiền triệu!
                                    </p>
                                </li>
                                <li className='flex gap-2 items-start mb-2'>
                                    <span className='min-w-[18px] h-[18px] text-12 text-white flex item-center justify-center rounded-full bg-[#DA0101]'>
                                        2
                                    </span>
                                    <p className='text-13 leading-[16px]'>
                                        Ưu đãi tới 1.050.000Đ cho Khách hàng thân thiết của ONEWAY
                                    </p>
                                </li>
                                <li className='flex gap-2 items-start mb-2'>
                                    <span className='min-w-[18px] h-[18px] text-12 text-white flex item-center justify-center rounded-full bg-[#DA0101]'>
                                        3
                                    </span>
                                    <p className='text-13 leading-[16px]'>
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
                        />
                    </div>
                </div>
            </div>
            <div className='mt-16'>
                <h3 className='text-20 font-bold mb-3'>Sản phẩm liên quan</h3>
                {loadingRelatedProducts ? (
                    <div className='flex justify-center'>
                        <CircularProgress />
                    </div>
                ) : (
                    <CoreSwiper
                        data={relatedProducts?.data}
                        SlideItem={Product}
                        slidesPerView={5}
                        isShowButton
                        spaceBetween={5}
                        loop
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                    />
                )}
            </div>
            <div className='mt-16 flex items-start justify-between gap-5'>
                <div className='w-9/12 bg-white rounded-xl shadow-md p-3'>
                    <div className='flex items-center gap-5'>
                        <h3>Đánh giá Điện thoại Apple iPhone 14 128GB VN/A</h3>
                        <Rating
                            name='simple-controlled'
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </div>
                    <div className='flex gap-5 mt-3'>
                        <div className='w-1/2'>
                            <CoreInput
                                control={control}
                                name='desc'
                                multiline
                                placeholder='Nội dung đánh giá của bạn'
                                sx={{
                                    '& .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input': {
                                        height: '99px !important'
                                    }
                                }}
                            />
                        </div>
                        <div className='w-1/2'>
                            <div className='flex gap-5 mb-5'>
                                <CoreInput control={control} name='name' placeholder='Họ và tên' />
                                <CoreInput
                                    control={control}
                                    name='name'
                                    placeholder='Số điện thoại'
                                />
                            </div>
                            <div className='flex gap-5'>
                                <div className='w-1/2'>
                                    <CoreInput control={control} name='name' placeholder='Email' />
                                </div>
                                <div className='w-1/2 flex items-center text-16 justify-center bg-gradient-to-r from-[#FF6700] to-[#F9920F] text-white '>
                                    Gửi đánh giá
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-3/12 bg-white rounded-xl shadow-md p-3'>
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
        </Fragment>
    );
};

export default ProductPage;
