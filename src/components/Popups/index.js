import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setErrorPopup } from '../../reduxToolkit/reducers/errors';

import ErrorDialog from './ErrorDialog';

export default function Popups() {
    const dispatch = useDispatch();
    const errorPopup = useSelector(({ errors }) => errors.errorPopup);

    const handleCloseErrorDialogClick = () => {
        dispatch(setErrorPopup(false));
    };

    return (
        <div>
            <ErrorDialog
                onCloseClick={handleCloseErrorDialogClick}
                open={errorPopup.isActive}
                message={errorPopup.message}
            />
        </div>
    );
}
