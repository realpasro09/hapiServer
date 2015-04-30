/// <reference path="../../../typings/node/node.d.ts"/>
'use strict';
module.exports = [{
    method: 'GET',
    path: '/favicon.ico',
    config: {
        handler: function (request, reply) {
            reply.file('../../frontend/build/images/favicon.ico');
        }
    }
}, {
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: ['../frontend/build', '../bower_components', '.../frontend/src', '../node_modules', './app']
        }
    },
    config: {
        auth: false
    }
}];
