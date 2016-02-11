/**
 * Created by michaelseelisch on 17.11.15.
 */
'use strict';

/***** ES5 *****/
var deliveryBoy_ES5 = {
    name: 'John ES5',

    handleMessage: function(message, handler) {
        handler(message);
    },

    receive: function() {
        var that = this;

        this.handleMessage('Hello ', function(message) {
            console.log(message + that.name);
        })
    }
}

deliveryBoy_ES5.receive();

/***** ES6 *****/
var deliveryBoy_ES6 = {
    name: 'John ES6',

    handleMessage: function(message, handler) {
        handler(message);
    },

    receive: function() {
        this.handleMessage('Hello ', message => console.log(message + this.name))
    }
}

deliveryBoy_ES6.receive();