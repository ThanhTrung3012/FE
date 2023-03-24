import React, { useEffect } from 'react';
import { useRequest } from 'ahooks';

import { contactService } from '@App/services/contactService';
import useCoreTable from '@Core/components/Table/hooks/useCoreTable';
import { errorMessage, successMessage } from '@Core/Helper/Message';
import PageProvider from '@App/components/Provider/PageProvider';

const ContactProvider = props => {
    const contactRequests = useRequest(contactService.list, {
        manual: true,
        onError: () => {
            mutate({
                data: []
            });
        }
    });

    const { mutate, run: getcontacts } = contactRequests;
    const contactTableHandler = useCoreTable(contactRequests);

    const { runAsync: handleDeleteContact } = useRequest(contactService.delete, {
        manual: true,
        onSuccess: () => {
            contactTableHandler.handleFetchData();
            successMessage('Xoá liên hệ thành công');
        },
        onError: () => {
            errorMessage('Xoá liên hệ thất bại đã có lỗi xảy ra');
        }
    });

    useEffect(() => {
        getcontacts();
    }, []);

    const data = {
        contactTableHandler,
        handleDeleteContact
    };

    return <PageProvider {...data}>{props.children}</PageProvider>;
};

export default ContactProvider;
