import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import SearchDialog from './Search';
// import Dialog from './Dialog';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        React.createElement(SearchDialog),
        document.getElementById('mount')
    );
    setTimeout(
        () => { ReactDOM.unmountComponentAtNode(document.getElementById('mount')); },
        5000
    );
    setTimeout(
        () => { ReactDOM.render(React.createElement(Cards), document.getElementById('mount')); },
        6000
    );
});
