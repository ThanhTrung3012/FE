import BaseService from '@Core/Api/BaseService';

class ShowRoom extends BaseService {
    BASE_ENDPOINT = '/show-room';

    constructor(params) {
        super(params);
        this.setRequest();
    }
}

export const showRoomService = new ShowRoom();
