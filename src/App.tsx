import React, { FC } from 'react';
import { Routes } from './Routes';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const App: FC = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
);

export default App;
