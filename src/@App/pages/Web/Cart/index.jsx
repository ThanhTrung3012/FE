import React, { useEffect, useMemo } from 'react';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup';
import { useForm } from 'react-hook-form';
import CoreInput from '@Core/components/Input/CoreInput';
import { useAppContext } from '@App/AppContext';
import Image from 'mui-image';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import handlePrice, { handlePercentPrice } from '@Core/Helper/Price';
import { changeQuantity, clearCart, removeFromCart } from '@App/store/actions';
import { LoadingButton } from '@mui/lab';
import { errorMessage, successMessage } from '@Core/Helper/Message';
import { orderService } from '@App/services/orderService';
import { WEB_ROUTERS } from '@App/configs/constants';
import { removeSession } from '@Core/Helper/Session';
import { CART_LOCALSTORE_KEY } from '@App/store/constants';

const Cart = () => {
    const {
        state: {
            cart: { products, total }
        },
        dispatch
    } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: 0 });
    }, []);

    const sexs = [
        { label: 'Nam', value: 1 },
        { label: 'Nữ', value: 0 }
    ];

    const paymentMethods = [
        { label: 'Giao tận nơi', value: 'Giao tận nơi' },
        { label: 'Nhận tại cửa hàng', value: 'Nhận tại cửa hàng' }
    ];

    const hanldeRemoveFromCart = id => {
        dispatch(removeFromCart(id));
    };

    const hanldeChangeQuantity = (id, type) => {
        dispatch(
            changeQuantity({
                id,
                type
            })
        );
    };

    const {
        control,
        handleSubmit,
        formState: { isSubmitting, isDirty }
    } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            address: '',
            sex: '',
            method: '',
            other_requirements: ''
        },
        resolver: yupResolver(
            yup.object({
                name: yup.string().trim().required('Trường này là bắt buộc'),
                email: yup.string().trim().required('Trường này là bắt buộc'),
                phone: yup.string().trim().required('Trường này là bắt buộc'),
                address: yup.string().trim().required('Trường này là bắt buộc'),
                sex: yup
                    .number()
                    .typeError('Trường này là bắt buộc')
                    .required('Trường này là bắt buộc'),
                method: yup.string().trim().required('Trường này là bắt buộc')
            })
        )
    });

    const totalPrice = useMemo(() => {
        const total = products.reduce((init, product) => {
            return init + product.currentPrice * product.quantity;
        }, 0);
        return total;
    }, [products]);

    const onSubmit = handleSubmit(async data => {
        try {
            data.products = products.map(product => product._id);
            await orderService.create(data);
            dispatch(clearCart());
            removeSession(CART_LOCALSTORE_KEY, 'local');
            successMessage('Đặt hàng thành công');
            navigate(WEB_ROUTERS.order.router);
        } catch (error) {
            errorMessage(error);
        }
    });

    return (
        <div className='pt-2 w-full sm:w-[800px] mx-auto'>
            <div className='flex justify-between items-center mb-2'>
                <Link to='/' className='flex items-center text-[#20863D]'>
                    <KeyboardArrowLeftRoundedIcon />
                    Mua thêm sản phẩm khác
                </Link>
                <Link to='/' className='flex items-center text-[#20863D]'>
                    Giỏ hàng của bạn
                </Link>
            </div>
            <div className='shadow-sm p-4 bg-white'>
                {total !== 0 ? (
                    products.map(product => (
                        <div className='flex md:flex-nowrap flex-wrap gap-x-3 py-2 border-b-[1px] border-gray-300' key={product.id}>
                            <div className='flex flex-col justify-center w-4/12 sm:w-2/12'>
                                <Image src={product?.images?.[0] ?? ''} />
                                <Button
                                    color='info'
                                    className='flex items-center'
                                    onClick={hanldeRemoveFromCart.bind(this, product.id)}
                                >
                                    <CloseRoundedIcon fontSize='small' />
                                    <span>Xoá</span>
                                </Button>
                            </div>
                            <div className='w-7/12 sm:w-6/12 pt-2'>
                                <Link to={'/product/' + product._id} className='text-18 truncate-2'>
                                    {product?.name}
                                    <span className='text-[#F06837] font-bold ml-2'>({product?.currentCapacity})</span>
                                </Link>
                                <div className='mt-2 flex items-center'>
                                    <p className='text-[#20863D] text-18 mr-3'>
                                        Màu: {product.currentColor}
                                    </p>
                                </div>
                            </div>
                            <div className='w-full md:w-4/12 pt-2'>
                                <p className='text-right mb-1 text-17 text-[#FF6700]'>
                                    {handlePrice(product.currentPrice)}
                                </p>
                                {product.discount && product.discount != 0 && (
                                    <p className='text-right text-17 line-through'>
                                        {handlePercentPrice(product.currentPrice, product.discount)}
                                    </p>
                                )}
                                <div className='border border-gray-300 w-7/12 ml-auto mt-3 flex items-center justify-between rounded-sm'>
                                    <button
                                        className='px-2 py-1 border-r-[1px] border-gray-300 h-full'
                                        onClick={hanldeChangeQuantity.bind(
                                            this,
                                            product.id,
                                            'minus'
                                        )}
                                    >
                                        <RemoveIcon />
                                    </button>
                                    <p>{product.quantity}</p>
                                    <button
                                        className='px-2 py-1 border-l-[1px] border-gray-300 h-full'
                                        onClick={hanldeChangeQuantity.bind(
                                            this,
                                            product.id,
                                            'plus'
                                        )}
                                    >
                                        <AddIcon />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Không có sản phẩm nào trong giỏ hàng</p>
                )}
                <div className='mt-6 font-bold text-18'>
                    <h3 className='mb-1'>Thông tin mua hàng</h3>
                    <CoreRadioGroup
                        options={sexs}
                        control={control}
                        name='sex'
                        row
                        className='mb-4'
                    />
                    <div className='flex md:flex-nowrap flex-wrap gap-4 mb-4'>
                        <CoreInput
                            control={control}
                            name='name'
                            size='medium'
                            placeholder='Họ tên'
                            className='w-full md:w-[unset]'
                        />
                        <CoreInput
                            control={control}
                            name='phone'
                            size='medium'
                            placeholder='Số điện thoại'
                            className='w-full md:w-[unset]'
                        />
                    </div>
                    <CoreInput
                        control={control}
                        name='email'
                        size='medium'
                        placeholder='Email'
                        className='mb-4'
                    />
                    <CoreInput
                        control={control}
                        name='address'
                        size='medium'
                        placeholder='Địa chỉ'
                    />
                </div>
                <div className='mt-6 font-bold text-18'>
                    <h3 className='mb-1'>Chọn cách thức nhận hàng</h3>
                    <CoreRadioGroup
                        options={paymentMethods}
                        control={control}
                        name='method'
                        row
                        className='mb-4'
                    />
                    <CoreInput
                        control={control}
                        name='other_requirements'
                        size='medium'
                        placeholder='Yêu cầu khác'
                    />
                </div>
                <div className='flex justify-between items-center mt-4 mb-5'>
                    <p className='text-20 font-bold'>Tổng tiền</p>
                    <p className='text-20 font-bold text-[#FF6700]'>{handlePrice(totalPrice)}</p>
                </div>
                <LoadingButton
                    className='w-full h-[50px] rounded-sm bg-gradient-to-r from-[#FF6700] to-[#F9920F] text-white'
                    sx={{
                        color: 'white !important',
                        fontSize: '16px',
                        background: total === 0 ? 'gray' : '',
                        cursor: total === 0 ? 'no-drop' : '',
                        '&:hover': { background: total === 0 ? 'gray' : '' }
                    }}
                    loading={isSubmitting}
                    disabled={total === 0}
                    onClick={onSubmit}
                >
                    ĐẶT HÀNG
                </LoadingButton>
            </div>
        </div>
    );
};

export default Cart;
