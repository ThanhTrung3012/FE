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

import {toast} from 'react-toastify'

export const successMessage = (message = 'Thành công!') => {
    toast.success(message)
}

export const errorMessage = (error, errorText) => {
    if (error instanceof Error) {
        if (error.response.data.error_message) {
            console.error('---------------- Server Error', error.response.data.error_message)
            toast.error(error.response.data.error_message)
        } else {
            console.error('---------------- Api Error', error.message)
            toast.error(error.message)
        }
    } else if (typeof error === 'string') {
        toast.error(errorText)
    } else {
        toast.error('Có lỗi sảy ra!')
    }
}
