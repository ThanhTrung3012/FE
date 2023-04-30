import React from 'react';
import { product } from '../data';
import handlePrice from '@Core/Helper/Price';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className='bg-white p-4 rounded-2xl shadow-md hover:shadow-xl duration-300'>
            {product?.discount ? (
                <div className='text-12 bg-[#b00020] max-w-max px-2 py-1 text-white rounded-md'>
                    Giảm {product?.discount}%
                </div>
            ) : null}
            <Link to='/'>
                <img
                    src={product?.image}
                    alt='hình ảnh'
                    className='h-[170px] w-full hover:translate-y-[-10px] duration-300 object-contain pt-3 ease-out'
                />
            </Link>
            <h3 className='text-lg truncate-2 font-bold'>
                <Link to='/'>{product?.name}</Link>
            </h3>
            <div className='flex flex-nowrap gap-1  mt-3'>
                {product?.parameters?.map((item, index) => (
                    <div key={index} className='border border-gray-400 rounded-md p-2 text-12'>
                        {item?.value}
                    </div>
                ))}
            </div>
            <h5 className='text-[#b00020] text-xl my-3 font-bold'>{handlePrice(product?.price)}</h5>
            <div className='flex justify-center'>
                <Rating value={product?.start} readOnly />
            </div>
        </div>
    );
};

export default Product;
