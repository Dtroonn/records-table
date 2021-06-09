import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';

export default function ErrorDialog({ open, onCloseClick, message }) {
    return (
        <Dialog
            open={open}
            onClose={() => onCloseClick()}
            aria-labelledby="error-title"
            aria-describedby="error-dialog-description">
            <DialogTitle id="error-dialog-title">Что-то пошло не так...</DialogTitle>
            <DialogContent>
                <DialogContentText color="secondary">
                    {message ? message : 'Попробуйте еще раз'}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}
