$(document).ready(function() {
 $('#new-item-form').submit(TodoApp.addItem);
 $('#saved-list').on('click', '.delete', TodoApp.deleteItem);
 $('#unsaved-list').on('click', '.delete', TodoApp.deleteItem);
 $('#unsaved-list').on('click', '.commit', TodoApp.completeItem);
});
