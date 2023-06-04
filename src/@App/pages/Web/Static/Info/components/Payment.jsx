import React from 'react';

const Payment = () => {
    return (
        <div className='p-0 md:p-10'>
            <div className='relative'>
                <h1 className='text-center text-[32px] font-bold'>PHƯƠNG THỨC THANH TOÁN</h1>
                <span className='absolute w-[100px] h-[3px] bg-[#EF6837] left-1/2 translate-x-[-50%]'></span>
            </div>
            <div className='mt-10'>
                <h2 className='text-[22px] font-bold'>
                    ĐỐI VỚI KHÁCH HÀNG ĐẶT MÁY HOẶC MUA MÁY TỪ XA:
                </h2>
                <p className='text-20 mt-3'>
                    Gọi điện qua hotline hoặc nhắn tin vào website/fanpage Oneway mobile để yêu cầu
                    đơn hàng. Quý khách chuyển 200,000đ hoặc toàn bộ tiền trị giá của sản phẩm qua
                    tài khoản ngân hàng của OneWay. Sau đó gọi đến SĐT: <strong className='text-[#ff3300]'>02466819779</strong>{' '}
                    để nhanh chóng kiểm tra tiền đến và chuyển hàng.
                </p>
                <p className='text-20 mt-2 mb-5'>
                Khách hàng nhận hàng kiểm tra hình thức máy, đối chiếu IMEI trên hóa đơn và IMEI trên máy. Khi đã yên tâm hài lòng khách hàng thanh toán toàn bộ số tiền còn lại.
                </p>
                <h2 className='text-[22px] font-bold'>ĐỐI VỚI KHÁCH HÀNG MUA MÁY TRỰC TIẾP TẠI CỬA HÀNG:</h2>
                <p  className='text-20 mt-3'>
                Ngoài thanh toán trực tiếp bằng tiền mặt thì ONEWAY còn hỗ trợ thanh toán qua máy quẹt thẻ, thanh toán qua hình thức chuyển khoản (hỗ trợ mọi ngân hàng)
                </p>
            </div>
        </div>
    );
};

export default Payment;
