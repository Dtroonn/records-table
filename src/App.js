import { LinearProgress } from '@material-ui/core';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Popups from './components/Popups';
import HomePage from './pages/Home';

import { fetchRecords } from './reduxToolkit/thunks/records';

function App() {
    const dispatch = useDispatch();

    const isLoaded = useSelector(({ records }) => records.isLoaded);

    React.useEffect(() => {
        dispatch(fetchRecords());
    }, []);

    if (!isLoaded) {
        return <LinearProgress />;
    }

    return (
        <div className="App">
            <main>
                <HomePage />
            </main>
            <Popups />
        </div>
    );
}

export default App;
