import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import LoadingButton from './LoadingButton';

export default function CreateRecordDialog({ open, onCloseClick, onSubmitClick }) {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [nameValue, setNameValue] = React.useState('');
    const [value, setValue] = React.useState('');

    const handleSubmitButtonClick = async () => {
        setIsSubmitting(true);
        const action = await onSubmitClick({
            name: nameValue,
            value,
        });
        console.log(action);
        if (!action.error) {
            resetForm();
        }
        setIsSubmitting(false);
    };

    const handleCancelButtonClick = async () => {
        onCloseClick();
        resetForm();
    };

    const resetForm = () => {
        setNameValue('');
        setValue('');
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={() => onCloseClick()}
                aria-labelledby="create-record-dialog-title"
                aria-describedby="create-record-dialog-description">
                <DialogTitle id="create-record-dialog-title">Создание записи</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        id="record-name-field"
                        label="Name"
                        variant="outlined"
                        autoFocus
                        value={nameValue}
                        inputProps={{
                            readOnly: isSubmitting,
                            disabled: isSubmitting,
                        }}
                        onChange={(e) => setNameValue(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="record-name-value"
                        label="Value"
                        variant="outlined"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        inputProps={{
                            readOnly: isSubmitting,
                            disabled: isSubmitting,
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleCancelButtonClick}
                        variant="contained"
                        color="secondary"
                        disabled={isSubmitting}>
                        Отменить
                    </Button>
                    <LoadingButton
                        onClick={handleSubmitButtonClick}
                        variant="contained"
                        color="primary"
                        disabled={!nameValue && !value}
                        loading={isSubmitting}>
                        Создать
                    </LoadingButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}
