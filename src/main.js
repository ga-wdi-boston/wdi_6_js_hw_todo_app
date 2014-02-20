window.onload = function() {
  
  // Initialization
  var todoItem = new TodoItem(),
      button_create,
      button_complete,
      button_delete,
      unfini_list;
      fini_list;

  unfini_list = document.getElementById('unfini_list');
  // Calling to create a new unfinished item
  button_create = document.getElementById('new-item-button');

  button_create.onclick = function(event){
    event.preventDefault();
    TodoApp.add_to_list(unfini_list);
    return false;
  };

  // Calling to delete an existed item in the unfinished list



}