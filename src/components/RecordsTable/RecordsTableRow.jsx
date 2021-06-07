import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Grid, IconButton, TextField, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function RecordsTableRow({ id, name, value }) {
    const [isEditMode, setIsEditMode] = React.useState(false);
    const [nameValue, setNameValue] = React.useState(name);
    const [columnValue, setColumnValue] = React.useState(value);

    const toggleIsEditMode = () => {
        setIsEditMode((isEditMode) => !isEditMode);
    };

    const handleCancelButtonClick = () => {
        setIsEditMode(false);
        setNameValue(name);
        setColumnValue(value);
    };

    return (
        <TableRow>
            <TableCell align="center">
                <TextField
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                    inputProps={{ readOnly: !isEditMode }}
                    label={isEditMode ? 'Введите имя' : null}
                />
            </TableCell>
            <TableCell align="center">
                <TextField
                    value={columnValue}
                    onChange={(e) => setColumnValue(e.target.value)}
                    inputProps={{ readOnly: !isEditMode }}
                    label={isEditMode ? 'Введите значение' : null}
                />
            </TableCell>
            <TableCell align="right">
                <Grid container justify="center" spacing={2}>
                    {!isEditMode && (
                        <>
                            <Grid item>
                                <IconButton onClick={toggleIsEditMode} aria-label="edit">
                                    <EditIcon />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                        </>
                    )}
                    {isEditMode && (
                        <>
                            <Grid item>
                                <Button size="small" variant="contained" color="primary">
                                    Сохранить
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
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
}
