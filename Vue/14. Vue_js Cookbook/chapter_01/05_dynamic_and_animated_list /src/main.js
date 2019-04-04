var vm = new Vue({
    el:'#app',
    data: {
        countdown: []
    }
});

var counter = 10;

setInterval(function () {
    if (counter > 0) {
        vm.countdown.push(counter--);
    }
}, 1000);
