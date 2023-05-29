/*
 * Created Date: 03-02-2023, 21:00 pm
 * Author: Nghiêm Mạnh Cường
 * Email: nghiemmanhcuong98@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) Đỗ Thành trung
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

const handlePrice = (number,space='.', currencyUnit = 'đ') => {
    if (!number) {
        return 0
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, space) + currencyUnit
}

export const handlePercentPrice = (price,discount) => {
    const priceDiscount = price - (price * (discount / 100))
    return priceDiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ'
}

export default handlePrice
