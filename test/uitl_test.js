var util = require('../src/util');

exports.testH1 = function(test){
    test.equal(util.h1('hi'), '<h1>hi</h1>', 'string should be equal');
    test.done();
};
