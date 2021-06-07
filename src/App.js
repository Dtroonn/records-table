import { Container } from '@material-ui/core';
import React from 'react';

import Header from './components/Header';
import RecordsTable from './components/RecordsTable/index';

function App() {
    return (
        <div className="App">
            <main>
                <Container max-width="md">
                    <Header />
                    <RecordsTable />
                </Container>
            </main>
        </div>
    );
}

export default App;
