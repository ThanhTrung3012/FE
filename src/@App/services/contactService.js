import BaseService from '@Core/Api/BaseService';

class Contact extends BaseService {
    BASE_ENDPOINT = '/contact';

    constructor(params) {
        super(params);
        this.setRequest();
    }
}

export const contactService = new Contact();
