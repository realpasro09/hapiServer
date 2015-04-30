/// <reference path="../../typings/node/node.d.ts"/>
var Hapi = require('hapi');
var server = new Hapi.Server();
var routes = require('./routes');
require('./handlers');
var plugins = [{
    register: require('hapi-auth-cookie')
}];
server.connection({
    port: 7203,
    routes: { cors: true }
});
server.register(plugins, function (err) {
    if (err) {
        throw err;
    }
    server.auth.strategy('session', 'cookie', {
        password: '12390812ASDASD90A8S90DASDAS;;123129381293128390128ASJDHASKDA12231893129',
        cookie: 'caredforCookie',
        isSecure: false
    });
    server.route(routes);
    server.start(function () {
        console.log('info', 'Server running at ', server.info.uri);
        console.log('info', 'Responding to...');
        routes.forEach(function (route) {
            console.log('info', route.method + ' ' + route.path);
        });
    });
});
