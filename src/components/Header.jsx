import { Grid, Button, Typography, Box } from '@material-ui/core';
import React from 'react';

import CreateRecordDialog from './CreateRecordDialog';

export default React.memo(function Header({ onCreateRecordClick }) {
    const [isOpenDialog, setIsOpenDialog] = React.useState(false);

    const handleCloseDialogClick = () => {
        setIsOpenDialog(false);
    };

    return (
        <Box mb={2}>
            <Grid container justify="space-between" alignItems="center">
                <Grid item>
                    <Typography align="center" component="h1" variant="h4" gutterBottom>
                        Таблица записей
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => setIsOpenDialog(true)}>
                        Добавить запись
                    </Button>
                </Grid>
            </Grid>
            <CreateRecordDialog
                open={isOpenDialog}
                onCloseClick={handleCloseDialogClick}
                onSubmitClick={onCreateRecordClick}
            />
        </Box>
    );
});
