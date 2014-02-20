var TodoItem = function(body){
  this.body = body;
};

TodoItem.prototype.render = function() {
  var new_li = document.createElement('li'),
  new_item_text = document.getElementById('new-task-field');
  new_li.className = 'items';
  new_li.innerHTML = new_item_text.value;
  var complete_button = document.createElement('button');
  complete_button.innerHTML = 'Complete';
  complete_button.className = 'complete';
  new_li.appendChild(complete_button);
  new_item_text.value = '';
  return new_li;
};

// Add TodoItem functions to generate the Complete and Delete buttons with onclick functions that perform those actions, and incorporate the buttons into the "rendered" DOM node
// TodoItem.prototype.generate_button = function() {
//   var complete_button = document.createElement('button');
//   this.appendChild(complete_button);
//   // complete_button.onclick = function(event) {
//   //   event.preventDefault();
//   //   var thing_to_delete = this.parentNode
//   // };
// };

// TodoItem.prototype.mark_complete = function() {

// };

// TodoItem.prototype.delete = function() {

// };
