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

export const getParamInUrl = (key) => {
    if(!key) return null;

    const url = new URL(window.location);
    const result = url.searchParams.get(key)
    return result;
};

export const getMultipleParamsInUrl = () => {
    const result = {};
    const params = new URLSearchParams(window.location.search);

    for (let item of params) {
        // each "item" is a [key,value] tupple
        const [key, value] = item;
        result[key] = value;
    }

    return result;
};
