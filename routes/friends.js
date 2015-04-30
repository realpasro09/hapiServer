/// <reference path="../../../typings/node/node.d.ts"/>
'use strict';
var d = require('../services/dispatcher');
var _dispatcher = new d.Dispatcher();
module.exports = [{
    method: 'POST',
    path: '/friends',
    config: {
        handler: function (request, reply) {
            _dispatcher.publish('addFriend', { name: request.name });
            reply('ok');
        },
        auth: {
            mode: 'try',
            strategy: 'session'
        }
    }
}];
