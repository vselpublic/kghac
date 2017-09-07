import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CardsContainer from './Cards';
import { todos } from './reducers';
// import SearchDialog from './Search';

const store = createStore(todos, { data: [] });

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Provider store={store}>
            <CardsContainer />
        </Provider>,
        document.getElementById('mount')
    );
});
