'use strict';
var d = require('../services/dispatcher');
var _dispatcher = new d.Dispatcher();
_dispatcher.subscribe('createUser', function (args) {
    console.log('user created');
});
