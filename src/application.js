var myModule = (function(){

    function sayHi(name){
        return 'Hi, '+name+' !';
    }

    return {
        sayHi: sayHi
    };
}());
