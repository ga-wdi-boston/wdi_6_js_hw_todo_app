$(document).ready(function() {
 $('#new-item-form').submit(TodoApp.addItem);
 $('#saved-list').on('click', '.delete', TodoApp.deleteItem);
 $('#unsaved-list').on('click', '.delete', TodoApp.deleteItem);
 $('#unsaved-list').on('click', '.commit', TodoApp.completeItem);
 $('#unsaved-by-date').click(TodoApp.orderUnsavedByDate);
 $('#unsaved-by-desc').click(TodoApp.orderUnsavedByDesc);
 $('#saved-by-date').click(TodoApp.orderSavedByDate);
 $('#saved-by-desc').click(TodoApp.orderSavedByDesc);
});
