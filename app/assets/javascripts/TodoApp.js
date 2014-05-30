var TodoApp = {
  todo_array: [],

  displayTodos: function(){
    for(i = 0; i < TodoApp.todo_array.length; i++){
      this.todo = TodoApp.todo_array[i];
      TodoItem.dispay(this.todo);
    }
  },

  newTodo: function(event){
    var newTodo = $('#todo-field').val();

    if(newTodo !== ''){
      this.todo = new TodoItem(newTodo);

      TodoApp.todo_array.push(this.todo);
      this.todo.display();
      $('#todo-field').val('');
    }
    event.preventDefault();
  },

  complete: function(event){
    var completeId = this.parentNode.parentNode.id;
    for(i = 0; i < TodoApp.todo_array.length; i++) {
      if(TodoApp.todo_array[i].id.toString() === completeId) {
        this.todo = TodoApp.todo_array[i];
        $('#' + completeId).remove();
        this.todo.completed = new Date();
        this.todo.display();
      }
    }
    event.preventDefault();
  },

  delete: function(event){
    var deleteId = this.parentNode.parentNode.id;
    for(i = 0; i < TodoApp.todo_array.length; i++) {
      if(TodoApp.todo_array[i].id.toString() === deleteId) {
        TodoApp.todo_array.splice(i, 1);
        $('#' + deleteId).remove();
      }
    }
    event.preventDefault();
  },


};
