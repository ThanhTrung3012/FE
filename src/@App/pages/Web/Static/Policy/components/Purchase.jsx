import React from 'react';

const Purchase = () => {
    return (
        <div className='p-0 md:p-10'>
            <div className='relative mb-10'>
                <h2 className='text-center pb-2 text-[32px] font-bold'>CHÍNH SÁCH MUA HÀNG</h2>
                <span className='absolute w-[100px] h-[3px] bg-[#EF6837] left-1/2 translate-x-[-50%]'></span>
            </div>
            <p className='text-18 my-5'>
                Cảm ơn Quý khách hàng đã tin tưởng lựa chọn đặt hàng tại Oneway. Với Quý khách tỉnh
                ở xa Oneway có hỗ trợ ship toàn quốc, thời gian nhận máy dao động từ 1-3 ngày tuỳ
                theo vị trí địa lý. Quy trình đặt hàng online như sau:
            </p>
            <ul className='flex flex-col gap-y-3'>
                <li>
                    <h3 className='font-bold text-20'>Bước 1: ĐẶT HÀNG</h3>
                    <p className='text-18'>
                        Quý khách có thể thêm trực tiếp sản phẩm vào giỏ hàng trên website bằng cách
                        thực hiện các bước sau: Mua ngay Thêm vào giỏ hàng. Tại đây Quý khách điền
                        các thông tin người nhận cần thiết (Họ tên, SĐT, Địa chỉ nhận hàng,..) sau
                        đó nhấn vào Đặt hàng để hoàn thành đơn hàng.
                    </p>
                </li>
                <li>
                    <h3 className='font-bold text-20'>Bước 2: XÁC NHẬN ĐƠN HÀNG</h3>
                    <p className='text-18'>
                        Sau khi đơn hàng được xác nhận trên hệ thống, bộ phận Kinh doanh Oneway sẽ
                        sớm liên hệ lại Quý khách để xác nhận đơn hàng và thời gian nhận hàng.
                    </p>
                </li>
                <li>
                    <h3 className='font-bold text-20'>Bước 3: TEST MÁY</h3>
                    <p className='text-18'>
                        Các sản phẩm được đóng gói đều được trải qua 15 bước test máy kỹ lưỡng và
                        chuyên nghiệp.
                    </p>
                </li>
                <li>
                    <h3 className='font-bold text-20'>Bước 4: GIAO HÀNG</h3>
                    <p className='text-18'>
                        Ngay sau khi xác nhận giao dịch thành công, Oneway sẽ chuyển phát đơn hàng
                        sang dịch vụ của Viettel Post và gửi lại cho khách hàng Mã Vận Đơn của đơn
                        hàng.
                    </p>
                    <p className='text-18'>
                        Khách hàng có thể tra cứu lộ trình đơn hàng của mình tại đây:
                        <a
                            href='https://viettelpost.com.vn/tra-cuu-hanh-trinh-don/'
                            className='text-blue-400 underline'
                        >
                            https://viettelpost.com.vn/tra-cuu-hanh-trinh-don/
                        </a>
                    </p>
                </li>
                <li>
                    <h3 className='font-bold text-20'>Bước 5: NHẬN HÀNG VÀ THANH TOÁN</h3>
                    <p className='text-18'>
                        Khách hàng nhận hàng kiểm tra hình thức máy, đối chiếu imei trên hóa đơn và
                        imei trên máy. Khi đã yên tâm hài lòng với sản phẩm, khách hàng thanh toán
                        toàn bộ số tiền còn lại.
                    </p>
                </li>
            </ul>
            <p className='mt-10 text-20'>Mọi thông tin xin vui lòng liên hệ qua số Hotline Oneway để được hỗ trợ giải đáp: 0987954221</p>
            <p className='italic text-20 mt-2'>Cảm ơn Quý khách đã tin chọn đặt hàng của Oneway !</p>
        </div>
    );
};

export default Purchase;
