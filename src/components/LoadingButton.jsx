import { CircularProgress, Button, makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));

export default function LoadingButton({
    loading,
    onClick,
    variant,
    color,
    children,
    disabled,
    size,
}) {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Button
                size={size}
                variant={variant}
                color={color}
                disabled={disabled || loading}
                onClick={onClick}>
                {children}
            </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
    );
}
