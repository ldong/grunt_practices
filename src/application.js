var myModule = (function(){

    function saiHi(name){
        return 'Hi, '+name+' !';
    }

    return {
        sayHi: sayHi
    };
}());
