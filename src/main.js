window.onload = function() {
  // Initialization

  TodoApp.button_create = document.getElementById('new-item-button');
  TodoApp.unfini_list = document.getElementById('unfini-list')
  // Calling to create a new unfinished item
  TodoApp.button_create.onclick = function(event){
    event.preventDefault();
    TodoApp.add_to_list(TodoApp.unfini_list);
    return false;
  };

  // Calling to delete an existed item in the unfinished list



}