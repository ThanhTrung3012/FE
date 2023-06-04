import { useAppContext } from '@App/AppContext';
import { WEB_ROUTERS } from '@App/configs/constants';
import { addToCart, changeQuantity } from '@App/store/actions';
import { successMessage } from '@Core/Helper/Message';
import handlePrice, { handlePercentPrice } from '@Core/Helper/Price';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddCartDialog = ({ open, setFalse, product, setColor }) => {
    const { dispatch, state } = useAppContext();
    const [colorChecked, setColorChecked] = useState(null);

    useEffect(() => {
        if (colorChecked) {
            setColor(colorChecked);
        }
    }, [colorChecked]);

    const hanldeAddToCart = () => {
        const index = state.cart.products.findIndex(
            p =>
                p._id === product._id &&
                p.currentColor === (colorChecked ?? product.currentColor) &&
                p.currentCapacity === product?.currentCapacity
        );
        if (index === -1) {
            dispatch(
                addToCart({
                    ...product,
                    id: uuidv4(),
                    quantity: 1,
                    currentColor: colorChecked ?? product?.currentColor
                })
            );
        } else {
            dispatch(
                changeQuantity({
                    id: state.cart.products[index].id,
                    type: 'plus'
                })
            );
        }
        successMessage('Thêm sản phẩm vào giỏ hàng thành công')
        setFalse()
    };

    return (
        <Dialog open={open} onClose={() => setFalse()} PaperProps={{ style: { padding: 10 } }}>
            <DialogTitle className='border-b-[1px] border-gray-300'>
                <div>
                    {product?.name}{' '}
                    <span className='text-[#F06837] font-bold ml-2'>({product?.currentCapacity})</span>
                </div>
                <div className='flex gap-x-5 mt-2'>
                    <p className='text-16 text-[#F06837]'>{handlePrice(product?.price)}</p>
                    <p className='text-16 line-through text-gray-600'>
                        {handlePercentPrice(product?.price, product?.discount)}
                    </p>
                </div>
            </DialogTitle>
            <DialogContent className='border-b-[1px] border-gray-300'>
                <h5 className='mt-3 mb-2 text-18 font-bold'>Chọn màu:</h5>
                <div className='flex items-center gap-x-5'>
                    {product?.colors?.map((color, i) => (
                        <div className='flex flex-col items-center' key={i}>
                            <p className='mb-3 text-17'>{color.title}</p>
                            <input
                                type='radio'
                                name='color'
                                className='w-[15px] h-[15px]'
                                checked={
                                    colorChecked
                                        ? color.title === colorChecked
                                        : color.title === product?.currentColor
                                }
                                onChange={() => setColorChecked(color?.title)}
                            />
                        </div>
                    ))}
                </div>
            </DialogContent>
            <DialogActions>
                <div className='w-full'>
                    <button
                        className='bg-gradient-to-r from-[#FF6700] to-[#F9920F] text-white  rounded-md w-full py-2 mt-3'
                        onClick={hanldeAddToCart}
                    >
                        Thêm vào giỏ hàng
                    </button>
                    <Link
                        to={WEB_ROUTERS.cart.router}
                        className='block text-center mt-3 text-[#FF6700]'
                    >
                        Xem giỏ hàng
                    </Link>
                </div>
            </DialogActions>
        </Dialog>
    );
};

export default AddCartDialog;
