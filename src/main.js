import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
// import Search from './Search';
// import Dialog from './Dialog';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        React.createElement(Cards),
        document.getElementById('mount')
    );
    // setTimeout(
    //    () => { ReactDOM.unmountComponentAtNode(document.getElementById('mount')); },
    // 5000
    // );
});
