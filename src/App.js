import { Container, LinearProgress } from '@material-ui/core';
import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Header from './components/Header';
import RecordsTable from './components/RecordsTable/index';

import { fetchRecords } from './reduxToolkit/thunks/records';

function App() {
    const dispatch = useDispatch();
    const { records, isLoaded } = useSelector(
        ({ records }) => ({
            records: records.items,
            isLoaded: records.isLoaded,
        }),
        shallowEqual,
    );

    React.useEffect(() => {
        dispatch(fetchRecords());
    }, []);

    if (!isLoaded) {
        return <LinearProgress />;
    }

    return (
        <div className="App">
            <main>
                <Container max-width="md">
                    <Header />
                    <RecordsTable items={records} />
                </Container>
            </main>
        </div>
    );
}

export default App;
