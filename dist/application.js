/* Lin Dong 2014 */
var myModule = (function(){

    function sayHi(name){
        return 'Hi, '+name+' !';
    }

    return {
        sayHi: sayHi
    };
}());

function h1(text){
    return 'Something is here about <h1>'+text+'</h1>';
}
