import React from 'react';
import { product } from '../data';
import handlePrice from '@Core/Helper/Price';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import { WEB_ROUTERS } from '@App/configs/constants';

const Product = () => {

    return (
        <div className='bg-white group p-4 rounded-2xl shadow-md hover:shadow-xl duration-300'>
            {product?.discount ? (
                <div className='text-12 bg-[#b00020] max-w-max px-2 py-1 text-white rounded-md'>
                    Giảm {product?.discount}%
                </div>
            ) : null}
            <Link to={`${WEB_ROUTERS.product.index}/1`}>
                <img
                    src={product?.image}
                    alt='hình ảnh'
                    className='h-[170px] w-full group-hover:translate-y-[-10px] duration-300 object-contain pt-3 ease-out'
                />
            </Link>
            <h3 className='text-[16px] truncate-2 font-bold'>
                <Link to={`${WEB_ROUTERS.product.index}/1`}>{product?.name}</Link>
            </h3>
            <div className='flex flex-wrap gap-1  mt-3'>
                {product?.parameters?.map((item, index) => (
                    <div key={index} className='border border-gray-400 rounded-md p-1 text-11'>
                        {item?.value}
                    </div>
                ))}
            </div>
            <h5 className='text-[#b00020] text-[17px] my-3 font-bold'>
                {handlePrice(product?.price)}
            </h5>
            <div className='flex justify-start  items-center gap-1'>
                <div className='bg-[#F2F2F2] rounded-md text-11 p-2 text-gray-600'>Mới 100%</div>
                <Rating value={product?.start} readOnly size='small'/>
            </div>
        </div>
    );
};

export default Product;
