import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CardsContainer from './prereactrouter';
import { todos } from './reducers';
// import SearchDialog from './Search';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const store = createStore(todos, { data: [] });

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={CardsContainer} />
                    <Route path='/:filter' component={CardsContainer} />
                </Switch>
            </BrowserRouter>
        </Provider>,
        document.getElementById('mount')
    );
});
