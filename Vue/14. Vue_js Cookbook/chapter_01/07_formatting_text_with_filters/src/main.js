Vue.filter('capitalize', function (string) {
    var capitalFirst = string.charAt(0).toUpperCase();
    var noCaseTail = string.slice(1, string.length) ;

    return capitalFirst + noCaseTail;

    /* ES6:
        var [first, ...tail] = string;
        return first.toUpperCase() + tail.join('');
    */
});

new Vue({
    el:'#app'
});
