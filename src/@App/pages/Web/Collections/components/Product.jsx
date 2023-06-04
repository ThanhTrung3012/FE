import React from 'react';
import handlePrice, { handlePercentPrice } from '@Core/Helper/Price';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import { WEB_ROUTERS } from '@App/configs/constants';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import Image from 'mui-image';

const Product = ({ item }) => {
    return (
        <div className='bg-white group p-4 rounded-2xl shadow-md hover:shadow-xl duration-300'>
            {item?.discount && item?.discount !== 0 ? (
                <div className='text-12 bg-[#b00020] max-w-max px-2 py-1 text-white rounded-md'>
                    Giảm {item?.discount}%
                </div>
            ) : (
                <div className='h-[26px]'></div>
            )}
            <Link to={`${WEB_ROUTERS.product.index}/${item?._id}`}>
                <div className='h-[170px] min-h-[170px] flex justify-center w-full group-hover:translate-y-[-10px] duration-300 object-contain pt-3 ease-out mb-2'>
                    <Image
                        src={item?.images?.[0]}
                        alt='hình ảnh'
                        width={170}
                        height={170}
                        errorIcon={<ImageNotSupportedIcon />}
                    />
                </div>
            </Link>
            <h3 className='text-[16px] truncate-2 font-bold min-h-[48px]'>
                <Link to={`${WEB_ROUTERS.product.index}/1`}>{item?.name}</Link>
            </h3>
            <div className='flex flex-wrap gap-1  mt-3'>
                {item?.parameters?.map((item, index) => (
                    <div key={index} className='border border-gray-400 rounded-md p-1 text-11'>
                        {item?.value}
                    </div>
                ))}
            </div>
            <div className='flex items-end gap-x-2'>
                <h5 className='text-[#b00020] text-[16px] my-3 font-bold'>
                    {handlePrice(item?.options?.[0]?.price)}
                </h5>
                {item?.discount && item?.discount !== 0 ? (
                    <h5 className='text-gray-500 text-[14px] my-3 line-through'>
                        {handlePercentPrice(item?.options?.[0]?.price, item?.discount)}
                    </h5>
                ) : null}
            </div>
            <div className='flex justify-start  items-center gap-1'>
                <div className='bg-[#F2F2F2] rounded-md text-11 p-2 text-gray-600'>Mới 100%</div>
                <Rating value={item?.start} readOnly size='small' />
            </div>
        </div>
    );
};

export default Product;
