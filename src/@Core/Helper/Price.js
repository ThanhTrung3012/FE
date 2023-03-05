/*
 * Created Date: 03-02-2023, 21:00 pm
 * Author: Nghiêm Mạnh Cường
 * Email: nghiemmanhcuong98@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) ...
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

export default handlePrice
