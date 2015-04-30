/// <reference path="../../../typings/node/node.d.ts"/>
'use strict';
var d = require('../services/dispatcher');
var _dispatcher = new d.Dispatcher();
var createUser = {
    method: 'POST',
    path: '/users',
    config: {
        handler: function (request, reply) {
            _dispatcher.publish('createUser', { name: request.name });
            reply('ok');
        },
        auth: {
            mode: 'try',
            strategy: 'session'
        }
    }
};
module.exports = [
    createUser
];
