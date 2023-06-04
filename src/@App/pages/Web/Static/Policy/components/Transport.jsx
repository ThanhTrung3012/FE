import React from 'react';

const Transport = () => {
    return (
        <div className='p-0 md:p-10'>
            <div className='relative mb-10'>
                <h2 className='text-center pb-2 text-[32px] font-bold'>CHÍNH SÁCH VẬN CHUYỂN</h2>
                <span className='absolute w-[100px] h-[3px] bg-[#EF6837] left-1/2 translate-x-[-50%]'></span>
            </div>
            <div className='mt-10'>
                <h2 className='text-[22px] font-bold mb-2'>KHU VỰC HÀ NỘI</h2>
                <p className='text-20 mb-5'>
                    Miễn phí giao hàng bán kính 2km. Khách hàng thanh toán trực tiếp khi nhận hàng.
                    Nếu khách hàng không hài lòng với chất lượng sản phẩm được giao có thể không
                    nhận hàng và không chịu bất cứ chi phí nào.
                </p>
                <h2 className='text-[22px] font-bold mb-2'>CÁC TỈNH THÀNH KHÁC</h2>
                <p className='text-20 mb-3'>
                    <strong>Qua Viettelpost</strong>: Khách hàng chỉ cần thêm 2.2% phí bảo hiểm hàng
                    hóa giá trị cao, để trong trường hợp rơi vỡ hoặc thất lạc đơn vị vận chuyển cũng
                    như OneWay sẽ chịu hoàn toàn trách nhiệm về đơn hàng này.
                </p>
                <p className='text-20'>
                    <strong>Qua Xe khách</strong>: Nếu khách hàng có xe khách quen (Văn Minh, Hải
                    Vân...), đi về trong ngày, hoạt động ở các bến xe Giáp Bát, Mỹ Đình...Oneway sẽ
                    hỗ trợ ship ra Nhà xe theo thông tin khách hàng cung cấp. Khi nhận hàng anh chị
                    chỉ cần thanh toán phí ship hàng cho nhà xe.
                </p>
            </div>
        </div>
    );
};

export default Transport;
