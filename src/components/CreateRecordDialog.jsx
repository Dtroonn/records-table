import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

export default function CreateRecordDialog({ open, onCloseClick }) {
    return (
        <div>
            <Dialog
                open={open}
                onClose={onCloseClick}
                aria-labelledby="create-record-dialog-title"
                aria-describedby="create-record-dialog-description">
                <DialogTitle id="create-record-dialog-title">Создание записи</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        id="record-name-field"
                        label="Имя"
                        variant="outlined"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="record-name-value"
                        label="Значение"
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseClick} variant="contained" color="secondary">
                        Отменить
                    </Button>
                    <Button onClick={onCloseClick} variant="contained" color="primary">
                        Создать
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
