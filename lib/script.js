(function() {
  sayHello(function(name) {
    return 'Hi ' + name + ', how are you?';
  });

}).call(this);
