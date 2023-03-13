import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Card, CardHeader, Divider, Typography, Breadcrumbs } from '@mui/material';

const CmsPageContent = props => {
    const { title, content, breadcrumbs, action } = props;

    return (
        <>
            <Breadcrumbs separator={<NavigateNextIcon fontSize='small' />}>
                {breadcrumbs}
            </Breadcrumbs>
            <Card className='shadow-md h-full mt-6'>
                {title && (
                    <CardHeader
                        title={<Typography className='text-xl font-bold'>{title}</Typography>}
                        action={action}
                    />
                )}
                <Divider />
                <Box className='my-8'>{content}</Box>
            </Card>
        </>
    );
};

export default CmsPageContent;
