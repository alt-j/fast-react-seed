var express = require('express');

var React = require('fast-react-server');
var Render = require('fast-react-render');

var views = require('../build/server/index.js');

var app = express();

app.use('/static', express.static(__dirname + '/../build/client'));

app.use(function (req, res, next) {
    var text = 'Some article text';
    var element = React.createElement(views.App, {
        text: text,
        script: '/static/index.js',
        config: JSON.stringify({text: text})
    });
    var html = Render.elementToString(element);

    res.send('<!doctype><html><body>' + html + '</body></html>');
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('process %s started on %s', process.pid, port);
});
