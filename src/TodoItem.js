var TodoItem = function(body){
  this.body = body;
};

TodoItem.prototype.render = function() {
  var new_li = document.createElement('li'),
  new_item_text = document.getElementById('new-task-field');
  new_li.className = 'items';
  new_li.innerHTML = new_item_text.value;
  new_item_text.value = '';
  return new_li;
};
