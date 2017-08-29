import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import SearchDialog from './Search';
import CardDialog from './Dialog';

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
        () => { ReactDOM.render(React.createElement(Cards), document.getElementById('mount')); },
        2000
    );
    setTimeout(
        () => { ReactDOM.unmountComponentAtNode(document.getElementById('mount')); },
        3000
    );
    setTimeout(
        () => { ReactDOM.render(React.createElement(CardDialog), document.getElementById('mount')); },
        4000
    );
});
