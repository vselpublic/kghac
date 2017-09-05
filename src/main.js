import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import SearchDialog from './Search';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        React.createElement(SearchDialog),
        document.getElementById('mount')
    );
    setTimeout(
        () => { ReactDOM.unmountComponentAtNode(document.getElementById('mount')); },
        1000
    );
    setTimeout(
        () => {
            ReactDOM.render(React.createElement(Cards, { showPopup: true }),
                document.getElementById('mount'));
        },
        2000
    );
});
