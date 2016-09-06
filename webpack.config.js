var webpack = require('webpack');

var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = [
    {
        target: 'node',
        externals: nodeModules,
        entry: {
            server: ['./components/app.jsx']
        },
        output: {
            libraryTarget: 'commonjs2',
            path: path.join(__dirname, 'build'),
            filename: '[name]/index.js'
        },
        module: {
            loaders: [
                {
                    test: /.*\.jsx/,
                    exclude: /(node_modules)/,
                    loader: 'fast-react-server-loader!babel'
                }
            ]
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
