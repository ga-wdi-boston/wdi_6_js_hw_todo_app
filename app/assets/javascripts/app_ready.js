$(document).ready(function() {
 $('#new-item-form').submit(TodoApp.addItem);

    //$('#new-item-form').submit($.proxy(TodoApp.addItem, TodoItem));

});
