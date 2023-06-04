import { categoryService } from '@App/services/categoryService';
import { useRequest } from 'ahooks';
import React from 'react'

const useMenus = () => {
    const {
        data: menus,
        loading:loadingMenus,
        run: getMenus
    } = useRequest(categoryService.getMenus, {
        manual: true
    });

    return {menus,loadingMenus,getMenus}
}

export default useMenus