const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        'babel-polyfill',
        './main.js',
    ],
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
};
