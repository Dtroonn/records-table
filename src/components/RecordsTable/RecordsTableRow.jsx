import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Grid, IconButton, TextField, Button, CircularProgress } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import LoadingButton from '../LoadingButton';

export default React.memo(function RecordsTableRow({
    id,
    name,
    value,
    onDeleteButtonClick,
    onSubmitButtonClick,
}) {
    const [isLoading, setIsLoading] = React.useState(false);
    const [isEditMode, setIsEditMode] = React.useState(false);
    const [nameValue, setNameValue] = React.useState(name || '');
    const [columnValue, setColumnValue] = React.useState(value || '');

    const toggleIsEditMode = () => {
        setIsEditMode((isEditMode) => !isEditMode);
    };

    const handleCancelButtonClick = () => {
        setIsEditMode(false);
        setNameValue(name);
        setColumnValue(value);
    };

    const handleDeleteButtonClick = async () => {
        setIsLoading(true);
        await onDeleteButtonClick(id);
        setIsLoading(false);
    };

    const handleSubmitButtonClick = async () => {
        setIsLoading(true);
        const action = await onSubmitButtonClick({
            id,
            name: nameValue,
            value: columnValue,
        });

        if (!action.error) {
            setIsEditMode(false);
        }

        setIsLoading(false);
    };

    return (
        <TableRow>
            <TableCell align="center">
                <TextField
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                    inputProps={{ readOnly: !isEditMode || isLoading }}
                    label={isEditMode ? 'Введите имя' : null}
                />
            </TableCell>
            <TableCell align="center">
                <TextField
                    value={columnValue}
                    onChange={(e) => setColumnValue(e.target.value)}
                    inputProps={{ readOnly: !isEditMode || isLoading }}
                    label={isEditMode ? 'Введите значение' : null}
                />
            </TableCell>
            <TableCell align="right" style={{ minWidth: '422px' }}>
                <Grid container justify="center" alignItems="center" spacing={2}>
                    {!isEditMode && (
                        <>
                            <Grid item>
                                <IconButton
                                    onClick={toggleIsEditMode}
                                    disabled={isLoading}
                                    aria-label="edit">
                                    <EditIcon />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton
                                    onClick={handleDeleteButtonClick}
                                    disabled={isLoading}
                                    aria-label="delete">
                                    {isLoading ? <CircularProgress size={22} /> : <DeleteIcon />}
                                </IconButton>
                            </Grid>
                        </>
                    )}
                    {isEditMode && (
                        <>
                            <Grid item>
                                <LoadingButton
                                    onClick={handleSubmitButtonClick}
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    disabled={!nameValue && !columnValue}
                                    loading={isLoading}>
                                    Сохранить
                                </LoadingButton>
                            </Grid>
                            <Grid item>
                                <Button
                                    disabled={isLoading}
                                    size="small"
                                    onClick={handleCancelButtonClick}
                                    variant="contained"
                                    color="secondary">
                                    Отмена
                                </Button>
                            </Grid>
                        </>
                    )}
                </Grid>
            </TableCell>
        </TableRow>
    );
});
