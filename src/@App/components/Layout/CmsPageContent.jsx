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

import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Card, CardHeader, Divider, Typography, Breadcrumbs, Box } from '@mui/material';

const CmsPageContent = props => {
    const { title, content, breadcrumbs, action } = props;

    return (
        <Box>
            <Breadcrumbs separator={<NavigateNextIcon fontSize='small' />}>
                {...breadcrumbs}
            </Breadcrumbs>
            <Card className='shadow-md h-full mt-6 min-h-[675px]'>
                {title && (
                    <CardHeader
                        title={<Typography variant='h2'>{title}</Typography>}
                        action={action}
                    />
                )}
                <Divider />
                <Box className='my-8 px-5'>{content}</Box>
            </Card>
        </Box>
    );
};

export default CmsPageContent;
