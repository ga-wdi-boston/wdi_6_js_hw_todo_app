var TodoItem = function(body){
  this.body = body;
};

TodoItem.prototype.render = function() {
  var new_li = document.createElement('li'),
  new_item_text = document.getElementById('new-task-field'),
  complete_button = document.createElement('button'),
  delete_button = document.createElement('button');
  new_li.className = 'items';
  new_li.innerHTML = new_item_text.value;
  complete_button.innerHTML = 'Complete';
  complete_button.className = 'complete';
  new_li.appendChild(complete_button);
  complete_button.onclick = function(event) {
    var finished_list = document.getElementById('finished');
    event.preventDefault;
    finished_list.appendChild(this.parentNode);
    this.remove();
  };
  delete_button.innerHTML = 'Delete';
  delete_button.className = 'delete';
  new_li.appendChild(delete_button);
  delete_button.onclick = function(event) {
    event.preventDefault;
    this.parentNode.remove();
  };
  new_item_text.value = '';
  return new_li;
};

// Add TodoItem functions to generate the Complete and Delete buttons with onclick functions that perform those actions, and incorporate the buttons into the "rendered" DOM node

