var todoApp = {};
var todoItem = {};

function clone(todoItem) {
  var Clone = function() {};
  Clone.prototype = todoItem;
  return new Clone();
}

