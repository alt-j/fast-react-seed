var path = require('path');

module.exports = [
    {
        target: 'node',
        entry: {
            server: ['./components/app.jsx']
        },
        output: {
            libraryTarget: 'commonjs2',
            path: path.join(__dirname, 'build'),
            filename: '[name]/index.js'
        },
        module: {
            loaders: [{
                test: /.*\.jsx?/,
                loader: 'fast-react-server-loader!babel'
            }]
        }
    },
    {
        entry: {
            client: './client/index.jsx'
        },
        output: {
            path: path.join(__dirname, 'build'),
            filename: '[name]/index.js'
        },
        module: {
            loaders: [{
                test: /.*\.jsx/,
                exclude: /(node_modules)/,
                loader: 'babel'
            }]
        }
    }
];
