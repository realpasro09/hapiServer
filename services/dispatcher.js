'use strict';
var Dispatcher = (function () {
    function Dispatcher() {
        this.subscribe = function (streamName, callback) {
            Dispatcher._emitter.addListener(streamName, callback);
        };
        this.publish = function (streamName, message) {
            Dispatcher._emitter.emit(streamName, message);
        };
        var events = require('events');
        Dispatcher._emitter = new events.EventEmitter();
    }
    return Dispatcher;
})();
exports.Dispatcher = Dispatcher;
