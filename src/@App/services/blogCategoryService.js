import BaseService from '@Core/Api/BaseService';

class BlogCategory extends BaseService {
    BASE_ENDPOINT = '/blog-category';

    constructor(params) {
        super(params);
        this.setRequest();
    }
}

export const blogCategoryService = new BlogCategory();
