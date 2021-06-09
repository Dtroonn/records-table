import React from 'react';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header';
import RecordsTable from '../components/RecordsTable/index';

import { createRecord, deleteRecord, updateRecord } from '../reduxToolkit/thunks/records';

export default function Home() {
    const dispatch = useDispatch();
    const records = useSelector(({ records }) => records.items);

    const onCreateRecordClick = React.useCallback((data) => {
        return dispatch(createRecord(data));
    }, []);

    const onDeleteRecordClick = React.useCallback((id) => {
        return dispatch(deleteRecord(id));
    }, []);

    const onUpdateRecordClick = React.useCallback((data) => {
        return dispatch(updateRecord(data));
    }, []);

    return (
        <Container max-width="md">
            <Header onCreateRecordClick={onCreateRecordClick} />
            <RecordsTable
                items={records}
                onDeleteItemButtonClick={onDeleteRecordClick}
                onSubmitItemButtonClick={onUpdateRecordClick}
            />
        </Container>
    );
}
